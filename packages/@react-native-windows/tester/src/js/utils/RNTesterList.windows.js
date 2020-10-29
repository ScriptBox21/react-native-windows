/**
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 * @format
 * @flow
 */

'use strict';

import type {RNTesterExample} from '../types/RNTesterTypes';

const ComponentExamples: Array<RNTesterExample> = [
  {
    key: 'ActivityIndicatorExample',
    category: 'UI',
    module: require('../examples/ActivityIndicator/ActivityIndicatorExample'),
  },
  {
    key: 'ButtonExample',
    category: 'UI',
    module: require('../examples/Button/ButtonExample'),
  },
  {
    key: 'FlatListExample',
    category: 'ListView',
    module: require('../examples/FlatList/FlatListExample'),
  },
  {
    key: 'DatePickerExample',
    category: 'UI',
    module: require('../examples-win/DatePicker/DatePickerExample'),
  },
  {
    key: 'FastTextExample',
    category: 'Basic',
    module: require('../examples-win/FastText/FastTextExample'),
  },
  {
    key: 'FlyoutExample',
    category: 'UI',
    module: require('../examples-win/Flyout/FlyoutExample'),
  },
  {
    key: 'GlyphExample',
    category: 'UI',
    module: require('../examples-win/Glyph/GlyphExample'),
  },
  {
    key: 'ImageExample',
    category: 'Basic',
    module: require('../examples/Image/ImageExample'),
  },
  // {
  //   key: 'ModalExample',
  //   category: 'UI',
  //   module: require('../examples/Modal/ModalExample'),
  // },
  {
    key: 'MultiColumnExample',
    category: 'ListView',
    module: require('../examples/MultiColumn/MultiColumnExample'),
  },
  {
    key: 'NewAppScreenExample',
    module: require('../examples/NewAppScreen/NewAppScreenExample'),
  },
  {
    key: 'PickerWindowsExample',
    category: 'UI',
    module: require('../examples-win/Picker/PickerWindowsExample'),
  },
  {
    key: 'PressableExample',
    category: 'UI',
    module: require('../examples/Pressable/PressableExample'),
  },
  {
    key: 'PopupExample',
    category: 'UI',
    module: require('../examples-win/Popup/PopupExample'),
  },
  {
    key: 'KeyboardExtensionExample',
    category: 'Basic',
    module: require('../examples-win/Keyboard/KeyboardExtensionExample'),
  },
  {
    key: 'ScrollViewExample',
    category: 'Basic',
    module: require('../examples/ScrollView/ScrollViewExample'),
  },
  {
    key: 'ScrollViewSimpleExample',
    category: 'Basic',
    module: require('../examples/ScrollView/ScrollViewSimpleExample'),
  },
  {
    key: 'SectionListExample',
    category: 'ListView',
    module: require('../examples/SectionList/SectionListExample'),
  },
  {
    key: 'SwitchExample',
    category: 'UI',
    module: require('../examples/Switch/SwitchExample'),
  },
  {
    key: 'TextExample',
    category: 'Basic',
    module: require('../examples-win/Text/TextExample'),
  },
  {
    key: 'TextInputExample',
    category: 'Basic',
    module: require('../examples/TextInput/TextInputExample'),
  },
  {
    key: 'TouchableExample',
    category: 'UI',
    module: require('../examples/Touchable/TouchableExample'),
  },
  {
    key: 'TransferProperties',
    category: 'Basic',
    module: require('../examples-win/TransferProperties/TransferPropertiesExample'),
  },
  {
    key: 'TransparentHitTestExample',
    module: require('../examples/TransparentHitTest/TransparentHitTestExample'),
  },
  {
    key: 'ViewExample',
    category: 'Basic',
    module: require('../examples/View/ViewExample'),
  },
  {
    key: 'LegacyControlStyleTest',
    module: require('../examples-win/LegacyTests/ControlStyleTestPage'),
  },
  {
    key: 'LegacyTransformTest',
    module: require('../examples-win/LegacyTests/TransformTestPage'),
  },
  {
    key: 'LegacyTextInputTest',
    module: require('../examples-win/LegacyTests/TextInputTestPage'),
  },
  {
    key: 'LegacyLoginTest',
    module: require('../examples-win/LegacyTests/LoginTestPage'),
  },
  {
    key: 'LegacyDirectManipulationTest',
    module: require('../examples-win/LegacyTests/DirectManipulationTestPage'),
  },
  {
    key: 'LegacyImageTest',
    module: require('../examples-win/LegacyTests/ImageTestPage'),
  },
  {
    key: 'LegacyAccessibilityTest',
    module: require('../examples-win/LegacyTests/AccessibilityTestPage'),
  },
  {
    key: 'LegacyTextBackgroundColorTest',
    module: require('../examples-win/LegacyTests/TextBackgroundColorTestPage'),
  },
];

const APIExamples: Array<RNTesterExample> = [
  {
    key: 'KeyboardFocusExample',
    category: 'Basic',
    module: require('../examples-win/Keyboard/KeyboardFocusExample'),
  },
  {
    key: 'AccessibilityExample',
    category: 'Basic',
    module: require('../examples/Accessibility/AccessibilityExample'),
  },
  {
    key: 'AccessibilityExampleWindows',
    category: 'Basic',
    module: require('../examples-win/Accessibility/AccessibilityExampleWindows'),
  },
  {
    key: 'AccessibilityInfo',
    category: 'Basic',
    module: require('../examples-win/Accessibility/AccessibilityInfoExample'),
  },
  {
    key: 'AsyncStorageExampleWindows',
    category: 'Basic',
    module: require('../examples-win/AsyncStorage/AsyncStorageExampleWindows'),
  },
  {
    key: 'AlertExample',
    category: 'UI',
    module: require('../examples/Alert/AlertExample'),
  },
  {
    key: 'AnimatedExample',
    category: 'UI',
    module: require('../examples/Animated/AnimatedExample'),
  },
  {
    key: 'Animation - GratuitousAnimation',
    category: 'UI',
    module: require('../examples/Animated/AnimatedGratuitousApp/AnExApp'),
  },
  {
    key: 'AppearanceExample',
    category: 'UI',
    module: require('../examples/Appearance/AppearanceExample'),
  },
  {
    key: 'AppStateExample',
    category: 'Basic',
    module: require('../examples/AppState/AppStateExample'),
  },
  {
    key: 'BorderExample',
    category: 'UI',
    module: require('../examples/Border/BorderExample'),
  },
  {
    key: 'CrashExample',
    category: 'Basic',
    module: require('../examples/Crash/CrashExample'),
  },
  {
    key: 'DevSettings',
    category: 'Basic',
    module: require('../examples/DevSettings/DevSettingsExample'),
  },
  {
    key: 'Dimensions',
    category: 'UI',
    module: require('../examples/Dimensions/DimensionsExample'),
  },
  {
    key: 'KeyboardExample',
    module: require('../examples-win/Keyboard/KeyboardExample'),
  },
  {
    key: 'LayoutEventsExample',
    category: 'UI',
    module: require('../examples/Layout/LayoutEventsExample'),
  },
  {
    key: 'LinkingExample',
    category: 'Basic',
    module: require('../examples/Linking/LinkingExample'),
  },
  // {
  //   key: 'LayoutAnimationExample',
  //   category: 'UI',
  //   module: require('../examples/Layout/LayoutAnimationExample'),
  // },
  {
    key: 'LayoutExample',
    category: 'UI',
    module: require('../examples/Layout/LayoutExample'),
  },
  {
    key: 'MouseExample',
    category: 'Basic',
    module: require('../examples-win/Mouse/MouseExample'),
  },
  {
    key: 'NativeAnimationsExample',
    category: 'UI',
    module: require('../examples/NativeAnimation/NativeAnimationsExample'),
  },
  {
    key: 'PanResponderExample',
    category: 'Basic',
    module: require('../examples/PanResponder/PanResponderExample'),
  },
  {
    key: 'PlatformColorExample',
    category: 'UI',
    module: require('../examples/PlatformColor/PlatformColorExample'),
  },
  {
    key: 'PointerEventsExample',
    category: 'Basic',
    module: require('../examples/PointerEvents/PointerEventsExample'),
  },
  {
    key: 'RTLExample',
    category: 'Basic',
    module: require('../examples/RTL/RTLExample'),
  },
  {
    key: 'ShareExample',
    category: 'Basic',
    module: require('../examples/Share/ShareExample'),
  },
  {
    key: 'TimerExample',
    category: 'UI',
    module: require('../examples/Timer/TimerExample'),
  },
  {
    key: 'TransformExample',
    category: 'UI',
    module: require('../examples/Transform/TransformExample'),
  },
  {
    key: 'WebSocketExample',
    category: 'Basic',
    module: require('../examples/WebSocket/WebSocketExample'),
  },
  // TODO:  TurboModuleExample crashes the app if web debugging is turned on
  //  {
  //    key: 'TurboModuleExample',
  //    module: require('../examples/TurboModule/TurboModuleExample'),
  //  },
  /* TODO: ? XHRExample requires CameraRoll access
  {
    key: 'XHRExample',
    category: 'Basic',
    module: require('../examples/XHR/XHRExample'),
  },*/
];

const Modules: any = {};

APIExamples.concat(ComponentExamples).forEach(Example => {
  Modules[Example.key] = Example.module;
});

const RNTesterList = {
  APIExamples,
  ComponentExamples,
  Modules,
};

module.exports = RNTesterList;
