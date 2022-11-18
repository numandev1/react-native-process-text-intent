import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-process-text-intent' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const ProcessTextIntent = NativeModules.ProcessTextIntent
  ? NativeModules.ProcessTextIntent
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return ProcessTextIntent.multiply(a, b);
}
