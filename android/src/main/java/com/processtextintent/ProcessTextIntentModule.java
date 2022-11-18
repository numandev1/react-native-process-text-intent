package com.processtextintent;

import android.app.Activity;
import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = ProcessTextIntentModule.NAME)
public class ProcessTextIntentModule extends ReactContextBaseJavaModule {
  public static final String NAME = "ProcessTextIntent";

  public ProcessTextIntentModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  @ReactMethod
  public void processedText(Promise promise) {
    try {
        Activity activity= getCurrentActivity();
        CharSequence text = activity.getIntent().getCharSequenceExtra(Intent.EXTRA_PROCESS_TEXT);
        promise.resolve(text);
    } catch (Exception ex) {
        promise.reject(ex);
    }
  }
}
