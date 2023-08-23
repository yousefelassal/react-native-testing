import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export default function App() {
  const width = useSharedValue(100);

  const handlePress = () => {
    if(width.value > 350) {
      width.value = withSpring(100);
      return;
    }
    width.value = withSpring(width.value + 50);
  };

  return (
    <View className="flex-1 flex-col gap-2 p-6 bg-amber-200">
      <Text className="text-2xl text-left text-blue-600 mt-6 pt-6">Hello World!</Text>
      <View className="flex-1 justify-center items-center">
        <Animated.View style={{ ...styles.box, width }} />
        <View className="flex-row w-fit border-2 px-3 py-2 mb-1 rounded-full shadow-md bg-blue-200 border-blue-600 active:scale-110 active:bg-blue-600 transition-transform">
        <Button onPress={handlePress} title="Click Here" />
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 64,
  },
});

