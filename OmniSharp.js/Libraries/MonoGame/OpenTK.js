"use strict";

if (typeof (JSIL) === "undefined") 
  throw new Error("JSIL.Core required");

var $jsilopentk = JSIL.DeclareAssembly("JSIL.OpenTK");

var $mgasms = new JSIL.AssemblyCollection({
  0: "Lidgren.Network, Version=2011.3.12.0, Culture=neutral, PublicKeyToken=null", 
  1: "MonoGame.Framework, Version=3.0.0.0, Culture=neutral, PublicKeyToken=null", 
  2: "mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089", 
  3: "OpenTK, Version=1.1.0.0, Culture=neutral, PublicKeyToken=bad199fe84eb3df4", 
  4: "System, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089", 
  5: "System.Drawing, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a", 
  6: "System.Runtime.Serialization, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089", 
  7: "System.ServiceModel.Internals, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35", 
  8: "System.Windows.Forms, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089", 
  9: "Tao.Sdl, Version=1.2.13.0, Culture=neutral, PublicKeyToken=9c7a200e36c0094e"
});


JSIL.DeclareNamespace("OpenTK");
JSIL.DeclareNamespace("OpenTK.Graphics");


OpenTK.Service = function () {
  this.keyboardDevices = [];
  this.mouseDevices = [];
};

OpenTK.Service.prototype.UpdateDevices = function OpenTK_UpdateDevices () {
  var keyboardService = JSIL.Host.getService("keyboard");
  var mouseService = JSIL.Host.getService("mouse");

  for (var i = 0, l = this.keyboardDevices.length; i < l; i++) {
    var device = this.keyboardDevices[i];

    device.PriorState = device.CurrentState;
    device.CurrentState = keyboardService.getHeldKeys();

    device.PriorState.forEach(function (keyCode) {
      if (device.CurrentState.indexOf(keyCode) < 0)
        device.fireKeyEvent(keyCode, false);      
    });

    device.CurrentState.forEach(function (keyCode) {
      if (device.PriorState.indexOf(keyCode) < 0)
        device.fireKeyEvent(keyCode, true);      
    });
  }

  for (var i = 0, l = this.mouseDevices.length; i < l; i++) {
    var device = this.mouseDevices[i];
  }
};

OpenTK.Service.prototype.StartRunLoop = function (platform) {
  var gameWindow = platform._window.window;
  var eventArgs = new OpenTK.FrameEventArgs();

  var dispatcher = (function OpenTK_Tick () {
    try {
      this.UpdateDevices();

      gameWindow.UpdateFrame(platform, eventArgs);
      gameWindow.RenderFrame(platform, eventArgs);
      
      JSIL.Host.scheduleTick(dispatcher);
    } finally {
      platform.RaiseAsyncRunLoopEnded();
    }
  }).bind(this);

  JSIL.Host.scheduleTick(dispatcher);
};


(function () {
  JSIL.Host.registerServices({
    opentk: new OpenTK.Service()
  });
})();


//
// GameWindow
//

JSIL.ImplementExternals("OpenTK.GameWindow", function ($interfaceBuilder) {
  var $ = $interfaceBuilder;

  $.Method({Static:false, Public:true }, ".ctor", 
    JSIL.MethodSignature.Void, 
    function _ctor () {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true }, ".ctor", 
    new JSIL.MethodSignature(null, [$.Int32, $.Int32], []), 
    function _ctor (width, height) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true }, ".ctor", 
    new JSIL.MethodSignature(null, [
        $.Int32, $.Int32, 
        $mgasms[3].TypeRef("OpenTK.Graphics.GraphicsMode")
      ], []), 
    function _ctor (width, height, mode) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true }, ".ctor", 
    new JSIL.MethodSignature(null, [
        $.Int32, $.Int32, 
        $mgasms[3].TypeRef("OpenTK.Graphics.GraphicsMode"), $.String
      ], []), 
    function _ctor (width, height, mode, title) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true }, ".ctor", 
    new JSIL.MethodSignature(null, [
        $.Int32, $.Int32, 
        $mgasms[3].TypeRef("OpenTK.Graphics.GraphicsMode"), $.String, 
        $mgasms[3].TypeRef("OpenTK.GameWindowFlags")
      ], []), 
    function _ctor (width, height, mode, title, options) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true }, ".ctor", 
    new JSIL.MethodSignature(null, [
        $.Int32, $.Int32, 
        $mgasms[3].TypeRef("OpenTK.Graphics.GraphicsMode"), $.String, 
        $mgasms[3].TypeRef("OpenTK.GameWindowFlags"), $mgasms[3].TypeRef("OpenTK.DisplayDevice")
      ], []), 
    function _ctor (width, height, mode, title, options, device) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true }, ".ctor", 
    new JSIL.MethodSignature(null, [
        $.Int32, $.Int32, 
        $mgasms[3].TypeRef("OpenTK.Graphics.GraphicsMode"), $.String, 
        $mgasms[3].TypeRef("OpenTK.GameWindowFlags"), $mgasms[3].TypeRef("OpenTK.DisplayDevice"), 
        $.Int32, $.Int32, 
        $mgasms[3].TypeRef("OpenTK.Graphics.GraphicsContextFlags")
      ], []), 
    function _ctor (width, height, mode, title, options, device, major, minor, flags) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true }, ".ctor", 
    new JSIL.MethodSignature(null, [
        $.Int32, $.Int32, 
        $mgasms[3].TypeRef("OpenTK.Graphics.GraphicsMode"), $.String, 
        $mgasms[3].TypeRef("OpenTK.GameWindowFlags"), $mgasms[3].TypeRef("OpenTK.DisplayDevice"), 
        $.Int32, $.Int32, 
        $mgasms[3].TypeRef("OpenTK.Graphics.GraphicsContextFlags"), $mgasms[3].TypeRef("OpenTK.Graphics.IGraphicsContext")
      ], []), 
    function _ctor (width, height, mode, title, options, device, major, minor, flags, sharedContext) {
      // FIXME
    }
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "Load", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[2].TypeRef("System.EventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "Unload", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[2].TypeRef("System.EventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "RenderFrame", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[3].TypeRef("OpenTK.FrameEventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "UpdateFrame", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[3].TypeRef("OpenTK.FrameEventArgs")])
  );

  $.Method({Static:false, Public:true , Virtual:true }, "Dispose", 
    JSIL.MethodSignature.Void, 
    function Dispose () {
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "Exit", 
    JSIL.MethodSignature.Void, 
    function Exit () {
    }
  );

  $.Method({Static:false, Public:true }, "get_Context", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.Graphics.IGraphicsContext"), [], []), 
    function get_Context () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "get_IsExiting", 
    new JSIL.MethodSignature($.Boolean, [], []), 
    function get_IsExiting () {
      return false;
    }
  );

  $.Method({Static:false, Public:true }, "get_Joysticks", 
    new JSIL.MethodSignature($mgasms[2].TypeRef("System.Collections.Generic.IList`1", [$mgasms[3].TypeRef("OpenTK.Input.JoystickDevice")]), [], []), 
    function get_Joysticks () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "get_Keyboard", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.Input.KeyboardDevice"), [], []), 
    function get_Keyboard () {
      // FIXME
      return new OpenTK.Input.KeyboardDevice();
    }
  );

  $.Method({Static:false, Public:true }, "get_Mouse", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.Input.MouseDevice"), [], []), 
    function get_Mouse () {
      // FIXME
      return new OpenTK.Input.MouseDevice();
    }
  );

  $.Method({Static:false, Public:true }, "get_RenderFrequency", 
    new JSIL.MethodSignature($.Double, [], []), 
    function get_RenderFrequency () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "get_RenderPeriod", 
    new JSIL.MethodSignature($.Double, [], []), 
    function get_RenderPeriod () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "get_RenderTime", 
    new JSIL.MethodSignature($.Double, [], []), 
    function get_RenderTime () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "get_TargetRenderFrequency", 
    new JSIL.MethodSignature($.Double, [], []), 
    function get_TargetRenderFrequency () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "get_TargetRenderPeriod", 
    new JSIL.MethodSignature($.Double, [], []), 
    function get_TargetRenderPeriod () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "get_TargetUpdateFrequency", 
    new JSIL.MethodSignature($.Double, [], []), 
    function get_TargetUpdateFrequency () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "get_TargetUpdatePeriod", 
    new JSIL.MethodSignature($.Double, [], []), 
    function get_TargetUpdatePeriod () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "get_UpdateFrequency", 
    new JSIL.MethodSignature($.Double, [], []), 
    function get_UpdateFrequency () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "get_UpdatePeriod", 
    new JSIL.MethodSignature($.Double, [], []), 
    function get_UpdatePeriod () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "get_UpdateTime", 
    new JSIL.MethodSignature($.Double, [], []), 
    function get_UpdateTime () {
      throw new Error('Not implemented');
    }
  );

  /*
  $.Method({Static:false, Public:true }, "get_VSync", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.VSyncMode"), [], []), 
    function get_VSync () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_WindowState", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.WindowState"), [], []), 
    function get_WindowState () {
      throw new Error('Not implemented');
    }
  );
  */

  $.Method({Static:false, Public:true , Virtual:true }, "MakeCurrent", 
    JSIL.MethodSignature.Void, 
    function MakeCurrent () {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "Run", 
    JSIL.MethodSignature.Void, 
    function Run () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "Run", 
    new JSIL.MethodSignature(null, [$.Double], []), 
    function Run (updateRate) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "Run", 
    new JSIL.MethodSignature(null, [$.Double, $.Double], []), 
    function Run (updates_per_second, frames_per_second) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "set_TargetRenderFrequency", 
    new JSIL.MethodSignature(null, [$.Double], []), 
    function set_TargetRenderFrequency (value) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "set_TargetRenderPeriod", 
    new JSIL.MethodSignature(null, [$.Double], []), 
    function set_TargetRenderPeriod (value) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "set_TargetUpdateFrequency", 
    new JSIL.MethodSignature(null, [$.Double], []), 
    function set_TargetUpdateFrequency (value) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "set_TargetUpdatePeriod", 
    new JSIL.MethodSignature(null, [$.Double], []), 
    function set_TargetUpdatePeriod (value) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "set_VSync", 
    new JSIL.MethodSignature(null, [$mgasms[3].TypeRef("OpenTK.VSyncMode")], []), 
    function set_VSync (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_WindowState", 
    new JSIL.MethodSignature(null, [$mgasms[3].TypeRef("OpenTK.WindowState")], []), 
    function set_WindowState (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "SwapBuffers", 
    JSIL.MethodSignature.Void, 
    function SwapBuffers () {
      // FIXME
    }
  );
});

//
// NativeWindow
//

JSIL.ImplementExternals("OpenTK.NativeWindow", function ($interfaceBuilder) {
  var $ = $interfaceBuilder;

  $.Method({Static:false, Public:true }, ".ctor", 
    JSIL.MethodSignature.Void, 
    function _ctor () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, ".ctor", 
    new JSIL.MethodSignature(null, [
        $.Int32, $.Int32, 
        $.String, $mgasms[3].TypeRef("OpenTK.GameWindowFlags"), 
        $mgasms[3].TypeRef("OpenTK.Graphics.GraphicsMode"), $mgasms[3].TypeRef("OpenTK.DisplayDevice")
      ], []), 
    function _ctor (width, height, title, options, mode, device) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, ".ctor", 
    new JSIL.MethodSignature(null, [
        $.Int32, $.Int32, 
        $.Int32, $.Int32, 
        $.String, $mgasms[3].TypeRef("OpenTK.GameWindowFlags"), 
        $mgasms[3].TypeRef("OpenTK.Graphics.GraphicsMode"), $mgasms[3].TypeRef("OpenTK.DisplayDevice")
      ], []), 
    function _ctor (x, y, width, height, title, options, mode, device) {
      throw new Error('Not implemented');
    }
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "Closed", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[2].TypeRef("System.EventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "Closing", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[4].TypeRef("System.ComponentModel.CancelEventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "Disposed", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[2].TypeRef("System.EventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "FocusedChanged", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[2].TypeRef("System.EventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "IconChanged", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[2].TypeRef("System.EventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "KeyDown", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[3].TypeRef("OpenTK.Input.KeyboardKeyEventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "KeyPress", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[3].TypeRef("OpenTK.KeyPressEventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "KeyUp", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[3].TypeRef("OpenTK.Input.KeyboardKeyEventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "MouseEnter", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[2].TypeRef("System.EventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "MouseLeave", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[2].TypeRef("System.EventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "Move", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[2].TypeRef("System.EventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "Resize", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[2].TypeRef("System.EventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "TitleChanged", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[2].TypeRef("System.EventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "VisibleChanged", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[2].TypeRef("System.EventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "WindowBorderChanged", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[2].TypeRef("System.EventArgs")])
  );

  $.MakeEventAccessors(
    {Static:false, Public:true , Virtual:true }, "WindowStateChanged", 
    $mgasms[2].TypeRef("System.EventHandler`1", [$mgasms[2].TypeRef("System.EventArgs")])
  );

  $.Method({Static:false, Public:true , Virtual:true }, "Close", 
    JSIL.MethodSignature.Void, 
    function Close () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "Dispose", 
    JSIL.MethodSignature.Void, 
    function Dispose () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_Bounds", 
    new JSIL.MethodSignature($mgasms[5].TypeRef("System.Drawing.Rectangle"), [], []), 
    function get_Bounds () {
      return System.Windows.Forms.Screen.PrimaryScreen.Bounds;
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_ClientRectangle", 
    new JSIL.MethodSignature($mgasms[5].TypeRef("System.Drawing.Rectangle"), [], []), 
    function get_ClientRectangle () {
      return System.Windows.Forms.Screen.PrimaryScreen.Bounds;
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_ClientSize", 
    new JSIL.MethodSignature($mgasms[5].TypeRef("System.Drawing.Size"), [], []), 
    function get_ClientSize () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_CursorVisible", 
    new JSIL.MethodSignature($.Boolean, [], []), 
    function get_CursorVisible () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_Exists", 
    new JSIL.MethodSignature($.Boolean, [], []), 
    function get_Exists () {
      return true;
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_Focused", 
    new JSIL.MethodSignature($.Boolean, [], []), 
    function get_Focused () {
      return JSIL.Host.isPageVisible();
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_Height", 
    new JSIL.MethodSignature($.Int32, [], []), 
    function get_Height () {
      return System.Windows.Forms.Screen.PrimaryScreen.Bounds.get_Height();
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_Icon", 
    new JSIL.MethodSignature($mgasms[5].TypeRef("System.Drawing.Icon"), [], []), 
    function get_Icon () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_InputDriver", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.Input.IInputDriver"), [], []), 
    function get_InputDriver () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_Location", 
    new JSIL.MethodSignature($mgasms[5].TypeRef("System.Drawing.Point"), [], []), 
    function get_Location () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_Size", 
    new JSIL.MethodSignature($mgasms[5].TypeRef("System.Drawing.Size"), [], []), 
    function get_Size () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_Title", 
    new JSIL.MethodSignature($.String, [], []), 
    function get_Title () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_Visible", 
    new JSIL.MethodSignature($.Boolean, [], []), 
    function get_Visible () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_Width", 
    new JSIL.MethodSignature($.Int32, [], []), 
    function get_Width () {
      return System.Windows.Forms.Screen.PrimaryScreen.Bounds.get_Width();
    }
  );

  /*
  $.Method({Static:false, Public:true , Virtual:true }, "get_WindowBorder", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.WindowBorder"), [], []), 
    function get_WindowBorder () {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_WindowInfo", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.Platform.IWindowInfo"), [], []), 
    function get_WindowInfo () {
      // FIXME
      return null;
    }
  );
  */

  $.Method({Static:false, Public:true , Virtual:true }, "get_WindowState", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.WindowState"), [], []), 
    function get_WindowState () {
      // FIXME
      return OpenTK.WindowState.Normal;
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_X", 
    new JSIL.MethodSignature($.Int32, [], []), 
    function get_X () {
      return System.Windows.Forms.Screen.PrimaryScreen.Bounds.get_X();
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_Y", 
    new JSIL.MethodSignature($.Int32, [], []), 
    function get_Y () {
      return System.Windows.Forms.Screen.PrimaryScreen.Bounds.get_Y();
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "PointToClient", 
    new JSIL.MethodSignature($mgasms[5].TypeRef("System.Drawing.Point"), [$mgasms[5].TypeRef("System.Drawing.Point")], []), 
    function PointToClient (point) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "PointToScreen", 
    new JSIL.MethodSignature($mgasms[5].TypeRef("System.Drawing.Point"), [$mgasms[5].TypeRef("System.Drawing.Point")], []), 
    function PointToScreen (point) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "ProcessEvents", 
    JSIL.MethodSignature.Void, 
    function ProcessEvents () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_Bounds", 
    new JSIL.MethodSignature(null, [$mgasms[5].TypeRef("System.Drawing.Rectangle")], []), 
    function set_Bounds (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_ClientRectangle", 
    new JSIL.MethodSignature(null, [$mgasms[5].TypeRef("System.Drawing.Rectangle")], []), 
    function set_ClientRectangle (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_ClientSize", 
    new JSIL.MethodSignature(null, [$mgasms[5].TypeRef("System.Drawing.Size")], []), 
    function set_ClientSize (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_CursorVisible", 
    new JSIL.MethodSignature(null, [$.Boolean], []), 
    function set_CursorVisible (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_Height", 
    new JSIL.MethodSignature(null, [$.Int32], []), 
    function set_Height (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_Icon", 
    new JSIL.MethodSignature(null, [$mgasms[5].TypeRef("System.Drawing.Icon")], []), 
    function set_Icon (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_Location", 
    new JSIL.MethodSignature(null, [$mgasms[5].TypeRef("System.Drawing.Point")], []), 
    function set_Location (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_Size", 
    new JSIL.MethodSignature(null, [$mgasms[5].TypeRef("System.Drawing.Size")], []), 
    function set_Size (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_Title", 
    new JSIL.MethodSignature(null, [$.String], []), 
    function set_Title (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_Visible", 
    new JSIL.MethodSignature(null, [$.Boolean], []), 
    function set_Visible (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_Width", 
    new JSIL.MethodSignature(null, [$.Int32], []), 
    function set_Width (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_WindowBorder", 
    new JSIL.MethodSignature(null, [$mgasms[3].TypeRef("OpenTK.WindowBorder")], []), 
    function set_WindowBorder (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_WindowState", 
    new JSIL.MethodSignature(null, [$mgasms[3].TypeRef("OpenTK.WindowState")], []), 
    function set_WindowState (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_X", 
    new JSIL.MethodSignature(null, [$.Int32], []), 
    function set_X (value) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_Y", 
    new JSIL.MethodSignature(null, [$.Int32], []), 
    function set_Y (value) {
      // FIXME
    }
  );

});

//
// GraphicsContext
//

JSIL.ImplementExternals("OpenTK.Graphics.GraphicsContext", function ($interfaceBuilder) {
  var $ = $interfaceBuilder;

  $.Method({Static:false, Public:true }, ".ctor", 
    new JSIL.MethodSignature(null, [$mgasms[3].TypeRef("OpenTK.Graphics.GraphicsMode"), $mgasms[3].TypeRef("OpenTK.Platform.IWindowInfo")], []), 
    function _ctor (mode, window) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true }, ".ctor", 
    new JSIL.MethodSignature(null, [
        $mgasms[3].TypeRef("OpenTK.Graphics.GraphicsMode"), $mgasms[3].TypeRef("OpenTK.Platform.IWindowInfo"), 
        $.Int32, $.Int32, 
        $mgasms[3].TypeRef("OpenTK.Graphics.GraphicsContextFlags")
      ], []), 
    function _ctor (mode, window, major, minor, flags) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true }, ".ctor", 
    new JSIL.MethodSignature(null, [$mgasms[3].TypeRef("OpenTK.ContextHandle"), $mgasms[3].TypeRef("OpenTK.Platform.IWindowInfo")], []), 
    function _ctor (handle, window) {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true }, ".ctor", 
    new JSIL.MethodSignature(null, [
        $mgasms[3].TypeRef("OpenTK.ContextHandle"), $mgasms[3].TypeRef("OpenTK.Platform.IWindowInfo"), 
        $mgasms[3].TypeRef("OpenTK.Graphics.IGraphicsContext"), $.Int32, 
        $.Int32, $mgasms[3].TypeRef("OpenTK.Graphics.GraphicsContextFlags")
      ], []), 
    function _ctor (handle, window, shareContext, major, minor, flags) {
      // FIXME
    }
  );

  $.Method({Static:true , Public:true }, "Assert", 
    JSIL.MethodSignature.Void, 
    function Assert () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:true , Public:true }, "CreateDummyContext", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.Graphics.GraphicsContext"), [], []), 
    function CreateDummyContext () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:true , Public:true }, "CreateDummyContext", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.Graphics.GraphicsContext"), [$mgasms[3].TypeRef("OpenTK.ContextHandle")], []), 
    function CreateDummyContext (handle) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "Dispose", 
    JSIL.MethodSignature.Void, 
    function Dispose () {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "Object.Equals", 
    new JSIL.MethodSignature($.Boolean, [$.Object], []), 
    function Object_Equals (obj) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:true , Public:true }, "get_CurrentContext", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.Graphics.IGraphicsContext"), [], []), 
    function get_CurrentContext () {
      // FIXME
      return new OpenTK.Graphics.GraphicsContext(null, null);
    }
  );

  $.Method({Static:true , Public:true }, "get_DirectRendering", 
    new JSIL.MethodSignature($.Boolean, [], []), 
    function get_DirectRendering () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_ErrorChecking", 
    new JSIL.MethodSignature($.Boolean, [], []), 
    function get_ErrorChecking () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_GraphicsMode", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.Graphics.GraphicsMode"), [], []), 
    function get_GraphicsMode () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_IsCurrent", 
    new JSIL.MethodSignature($.Boolean, [], []), 
    function get_IsCurrent () {
      // FIXME
      return true;
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_IsDisposed", 
    new JSIL.MethodSignature($.Boolean, [], []), 
    function get_IsDisposed () {
      return false;
    }
  );

  $.Method({Static:true , Public:true }, "get_ShareContexts", 
    new JSIL.MethodSignature($.Boolean, [], []), 
    function get_ShareContexts () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_SwapInterval", 
    new JSIL.MethodSignature($.Int32, [], []), 
    function get_SwapInterval () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "get_VSync", 
    new JSIL.MethodSignature($.Boolean, [], []), 
    function get_VSync () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "GetHashCode", 
    new JSIL.MethodSignature($.Int32, [], []), 
    function GetHashCode () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "LoadAll", 
    JSIL.MethodSignature.Void, 
    function LoadAll () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "MakeCurrent", 
    new JSIL.MethodSignature(null, [$mgasms[3].TypeRef("OpenTK.Platform.IWindowInfo")], []), 
    function MakeCurrent (window) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:false, Virtual:true }, "OpenTK.Graphics.IGraphicsContextInternal.get_Context", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.ContextHandle"), [], []), 
    function OpenTK_Graphics_IGraphicsContextInternal_get_Context () {
      throw new Error('Not implemented');
    }
  )
    .Overrides("OpenTK.Graphics.IGraphicsContextInternal", "get_Context");

  $.Method({Static:false, Public:false, Virtual:true }, "OpenTK.Graphics.IGraphicsContextInternal.get_Implementation", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.Graphics.IGraphicsContext"), [], []), 
    function OpenTK_Graphics_IGraphicsContextInternal_get_Implementation () {
      throw new Error('Not implemented');
    }
  )
    .Overrides("OpenTK.Graphics.IGraphicsContextInternal", "get_Implementation");

  $.Method({Static:false, Public:false, Virtual:true }, "OpenTK.Graphics.IGraphicsContextInternal.GetAddress", 
    new JSIL.MethodSignature($mgasms[2].TypeRef("System.IntPtr"), [$.String], []), 
    function OpenTK_Graphics_IGraphicsContextInternal_GetAddress ($function) {
      throw new Error('Not implemented');
    }
  )
    .Overrides("OpenTK.Graphics.IGraphicsContextInternal", "GetAddress");

/*
  $.Method({Static:true , Public:true }, "set_DirectRendering", 
    new JSIL.MethodSignature(null, [$.Boolean], []), 
    function set_DirectRendering (value) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_ErrorChecking", 
    new JSIL.MethodSignature(null, [$.Boolean], []), 
    function set_ErrorChecking (value) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:true , Public:true }, "set_ShareContexts", 
    new JSIL.MethodSignature(null, [$.Boolean], []), 
    function set_ShareContexts (value) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_SwapInterval", 
    new JSIL.MethodSignature(null, [$.Int32], []), 
    function set_SwapInterval (value) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "set_VSync", 
    new JSIL.MethodSignature(null, [$.Boolean], []), 
    function set_VSync (value) {
      throw new Error('Not implemented');
    }
  );
*/

  $.Method({Static:false, Public:true , Virtual:true }, "SwapBuffers", 
    JSIL.MethodSignature.Void, 
    function SwapBuffers () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true , Virtual:true }, "Update", 
    new JSIL.MethodSignature(null, [$mgasms[3].TypeRef("OpenTK.Platform.IWindowInfo")], []), 
    function Update (window) {
      throw new Error('Not implemented');
    }
  );

});

//
// DisplayDevice
//

JSIL.ImplementExternals("OpenTK.DisplayDevice", function ($interfaceBuilder) {
  var $ = $interfaceBuilder;

  $.Method({Static:false, Public:false}, ".ctor", 
    JSIL.MethodSignature.Void, 
    function _ctor () {
    }
  );

  $.Method({Static:false, Public:true }, "ChangeResolution", 
    new JSIL.MethodSignature(null, [$mgasms[3].TypeRef("OpenTK.DisplayResolution")], []), 
    function ChangeResolution (resolution) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "ChangeResolution", 
    new JSIL.MethodSignature(null, [
        $.Int32, $.Int32, 
        $.Int32, $.Single
      ], []), 
    function ChangeResolution (width, height, bitsPerPixel, refreshRate) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:true , Public:true }, "get_AvailableDisplays", 
    new JSIL.MethodSignature($mgasms[2].TypeRef("System.Collections.Generic.IList`1", [$mgasms[3].TypeRef("OpenTK.DisplayDevice")]), [], []), 
    function get_AvailableDisplays () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "get_AvailableResolutions", 
    new JSIL.MethodSignature($mgasms[2].TypeRef("System.Collections.Generic.IList`1", [$mgasms[3].TypeRef("OpenTK.DisplayResolution")]), [], []), 
    function get_AvailableResolutions () {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "get_BitsPerPixel", 
    new JSIL.MethodSignature($.Int32, [], []), 
    function get_BitsPerPixel () {
      // FIXME
      return 32;
    }
  );

  $.Method({Static:false, Public:true }, "get_Bounds", 
    new JSIL.MethodSignature($mgasms[5].TypeRef("System.Drawing.Rectangle"), [], []), 
    function get_Bounds () {
      return System.Windows.Forms.Screen.PrimaryScreen.Bounds;
    }
  );

  $.Method({Static:true , Public:true }, "get_Default", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.DisplayDevice"), [], []), 
    function get_Default () {
      // FIXME
      return new OpenTK.DisplayDevice();
    }
  );

  $.Method({Static:false, Public:true }, "get_Height", 
    new JSIL.MethodSignature($.Int32, [], []), 
    function get_Height () {
      return System.Windows.Forms.Screen.PrimaryScreen.Bounds.get_Height();
    }
  );

  $.Method({Static:false, Public:true }, "get_IsPrimary", 
    new JSIL.MethodSignature($.Boolean, [], []), 
    function get_IsPrimary () {
      return true;
    }
  );

  $.Method({Static:false, Public:true }, "get_RefreshRate", 
    new JSIL.MethodSignature($.Single, [], []), 
    function get_RefreshRate () {
      // FIXME
      return 60;
    }
  );

  $.Method({Static:false, Public:true }, "get_Width", 
    new JSIL.MethodSignature($.Int32, [], []), 
    function get_Width () {
      return System.Windows.Forms.Screen.PrimaryScreen.Bounds.get_Width();
    }
  );

  $.Method({Static:true , Public:true }, "GetDisplay", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.DisplayDevice"), [$mgasms[3].TypeRef("OpenTK.DisplayIndex")], []), 
    function GetDisplay (index) {
      throw new Error('Not implemented');
    }
  );

  $.Method({Static:false, Public:true }, "RestoreResolution", 
    JSIL.MethodSignature.Void, 
    function RestoreResolution () {
      // FIXME
    }
  );

  $.Method({Static:false, Public:true }, "SelectResolution", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.DisplayResolution"), [
        $.Int32, $.Int32, 
        $.Int32, $.Single
      ], []), 
    function SelectResolution (width, height, bitsPerPixel, refreshRate) {
      throw new Error('Not implemented');
    }
  );

});

// 
// KeyboardKeyEventArgs
//

JSIL.ImplementExternals("OpenTK.Input.KeyboardKeyEventArgs", function ($interfaceBuilder) {
  var $ = $interfaceBuilder;

  $.Method({Static:false, Public:true }, ".ctor", 
    new JSIL.MethodSignature(null, [$mgasms[3].TypeRef("OpenTK.Input.KeyboardKeyEventArgs")], []), 
    function _ctor (value) {
      this.key = value;
    }
  );

  $.Method({Static:false, Public:true }, "get_Key", 
    new JSIL.MethodSignature($mgasms[3].TypeRef("OpenTK.Input.Key"), [], []), 
    function get_Key () {
      return this.key;
    }
  );

  $.Method({Static:false, Public:false}, "set_Key", 
    new JSIL.MethodSignature(null, [$mgasms[3].TypeRef("OpenTK.Input.Key")], []), 
    function set_Key (value) {
      this.key = value;
    }
  );
});

//
// KeyboardDevice
//

JSIL.ImplementExternals("OpenTK.Input.KeyboardDevice", function ($) {
    var keyMap = Object.create(null);

    // Define a mapping from browser keycode -> OpenTK Key enumeration.
    // FIXME: Missing some keys.
    // FIXME: Right ctrl/shift/alt not implemented.
    $.RawMethod(true, ".cctor2", function () {
      var Key = $mgasms[3].OpenTK.Input.Key;

      keyMap[27] = Key.Escape;

      for (var i = 0; i < 24; i++) {
        keyMap[112 + i] = Key.$Cast(Key.F1.value + i);
      }

      for (var j = 0; j <= 9; j++) {
        keyMap[48 + j] = Key.$Cast(Key.Number0.value + j);
      }

      for (var k = 0; k < 26; k++) {
        keyMap[65 + k] = Key.$Cast(Key.A.value + k);
      }

      keyMap[9] = Key.Tab;
      keyMap[20] = Key.CapsLock;
      keyMap[17] = Key.ControlLeft;
      keyMap[16] = Key.ShiftLeft;
      keyMap[91] = Key.WinLeft;
      keyMap[18] = Key.AltLeft;
      keyMap[32] = Key.Space;
      // keyMap[VirtualKeys.RMENU] = Key.AltRight;
      keyMap[92] = Key.WinRight;
      keyMap[93] = Key.Menu;
      // keyMap[VirtualKeys.RCONTROL] = Key.ControlRight;
      // keyMap[VirtualKeys.RSHIFT] = Key.ShiftRight;
      keyMap[13] = Key.Enter;
      keyMap[8] = Key.BackSpace;
      keyMap[59] = Key.Semicolon;
      keyMap[186] = Key.Semicolon;
      keyMap[191] = Key.Slash;
      keyMap[192] = Key.Tilde;
      keyMap[219] = Key.BracketLeft;
      keyMap[220] = Key.BackSlash;
      keyMap[221] = Key.BracketRight;
      keyMap[222] = Key.Quote;
      keyMap[61] = Key.Plus;
      keyMap[187] = Key.Plus;
      keyMap[188] = Key.Comma;
      keyMap[109] = Key.Minus;
      keyMap[189] = Key.Minus;
      keyMap[190] = Key.Period;
      keyMap[36] = Key.Home;
      keyMap[35] = Key.End;
      keyMap[46] = Key.Delete;
      keyMap[33] = Key.PageUp;
      keyMap[34] = Key.PageDown;
      keyMap[144] = Key.NumLock;
      keyMap[45] = Key.Insert;

      for (var l = 0; l <= 9; l++) {
        keyMap[96 + l] = Key.$Cast(Key.Keypad0.value + l);
      }

      keyMap[46] = Key.KeypadDecimal;
      keyMap[110] = Key.KeypadDecimal;
      keyMap[107] = Key.KeypadAdd;
      keyMap[109] = Key.KeypadSubtract;
      keyMap[111] = Key.KeypadDivide;
      keyMap[106] = Key.KeypadMultiply;
      keyMap[38] = Key.Up;
      keyMap[40] = Key.Down;
      keyMap[37] = Key.Left;
      keyMap[39] = Key.Right;
    });

    $.Method({Static:false, Public:false}, ".ctor", 
      JSIL.MethodSignature.Void,
      function ctor () {
        this.PriorState = [];
        this.CurrentState = [];

        this.KeyDown = null;
        this.KeyUp = null;

        var svc = JSIL.Host.getService("opentk");
        svc.keyboardDevices.push(this);
      }
    );

    $.RawMethod(false, "fireKeyEvent",
      function fireKeyEvent (nativeKeyCode, isDown) {
        var mappedKeyCode = keyMap[nativeKeyCode] || null;

        // FIXME: Produce a warning?
        if (mappedKeyCode === null)
          return;

        var args = new OpenTK.Input.KeyboardKeyEventArgs(mappedKeyCode);

        if (isDown && this.KeyDown)
          this.KeyDown(this, args);
        else if (!isDown && this.KeyUp)
          this.KeyUp(this, args);          
      }
    );

    $.MakeEventAccessors(
      {Static: false, Public: true }, "KeyDown", 
      $jsilcore.TypeRef("System.EventHandler`1", [$mgasms[3].TypeRef("OpenTK.Input.KeyboardKeyEventArgs")])
    );

    $.MakeEventAccessors(
      {Static: false, Public: true }, "KeyUp", 
      $jsilcore.TypeRef("System.EventHandler`1", [$mgasms[3].TypeRef("OpenTK.Input.KeyboardKeyEventArgs")])
    );


});