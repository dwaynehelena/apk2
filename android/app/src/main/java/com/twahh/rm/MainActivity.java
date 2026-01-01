package com.twahh.rm;

import com.getcapacitor.BridgeActivity;
import com.twahh.rm.TwahhPlugin;
import android.os.Bundle;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(TwahhPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
