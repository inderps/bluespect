package com.example.ble_app;

import android.app.Activity;
import android.os.Bundle;
import org.apache.cordova.*;

public class MyActivity extends CordovaActivity {
    /**
     * Called when the activity is first created.
     */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl(Config.getStartUrl());
    }
}
