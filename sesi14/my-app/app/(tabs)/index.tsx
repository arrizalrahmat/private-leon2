import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function HomeScreen() {
  const [counter, setCounter] = useState(0);
  return (
    <SafeAreaView>
      <View style={styles.row}>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </View>
      <Text style={styles.counter}>{counter}</Text>
      <View style={styles.row}>
        <Pressable
          style={styles.button}
          onPress={() => {
            setCounter(counter + 1);
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            setCounter(counter - 1);
          }}
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight
        : 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  counter: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 12,
  },
  button: {
    borderRadius: 8,
    backgroundColor: 'rgba(52, 172, 224,1.0)',
    width: 120,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
