import { getProcessTextIntent } from 'react-native-process-text-intent';

import React, { useEffect } from 'react';
import { AppState, StyleSheet, View, Text, AppStateStatus } from 'react-native';

export default function App() {
  const [text, setText] = React.useState<string>('');

  const getTextFromProcessedTextIntent = () => {
    getProcessTextIntent()
      .then((textResult) => {
        if (textResult) {
          console.log(textResult, 'ProcessedText');
          setText(textResult);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTextFromProcessedTextIntent();
    const listener = (state: AppStateStatus) => {
      if (state === 'active') {
        getTextFromProcessedTextIntent();
      }
    };
    const appState = AppState.addEventListener('change', listener);
    return () => appState.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Text: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
