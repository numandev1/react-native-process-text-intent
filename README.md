# react-native-process-text-intent

Get text from android `android.intent.action.PROCESS_TEXT` intent-filter

# Demo

<img src="media/demo.gif" width="40%" />

## Installation

```sh
npm install react-native-process-text-intent
```

## Usage

```js
import { getProcessTextIntent } from 'react-native-process-text-intent';

// ...

getProcessTextIntent()
  .then((textResult) => {
    if (textResult) {
      console.log(textResult, 'ProcessedText');   // here will be your processed Text coming from android.intent.action.PROCESS_TEXT intent-filter
    }
  })
  .catch((error) => {
    console.log(error);
  });
};
```

first you need to add this `intent-filter` in `AndroidManifest.xml`

```xml
<intent-filter>
  <action android:name="android.intent.action.PROCESS_TEXT" />
  <category android:name="android.intent.category.DEFAULT" />
  <data android:mimeType="text/plain" />
</intent-filter>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
