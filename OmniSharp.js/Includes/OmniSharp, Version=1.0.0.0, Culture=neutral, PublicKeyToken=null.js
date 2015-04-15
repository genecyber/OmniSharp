/* Generated by JSIL v0.8.1 build 920. See http://jsil.org/ for more information. */ 
'use strict';
var $asm01 = JSIL.DeclareAssembly("OmniSharp, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");

JSIL.DeclareNamespace("OmniSharp");
/* class OmniSharp.CurrencyID */ 

(function CurrencyID$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm00.System.Int64)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm00.System.UInt64)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm00.System.Exception)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm00.System.ArithmeticException)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm00.System.Object)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm01.OmniSharp.Ecosystem)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm01.OmniSharp.Extensions)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm00.System.String)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.ConstructorSignature($asm00.TypeRef("System.Exception"), [$asm00.TypeRef("System.String")]))) ();
  };
  var $S01 = function () {
    return ($S01 = JSIL.Memoize(new JSIL.ConstructorSignature($asm00.TypeRef("System.ArithmeticException"), [$asm00.TypeRef("System.String")]))) ();
  };

  function CurrencyID__ctor (value) {
    if (!$T00().op_GreaterThanOrEqual(value, $thisType.MIN_VALUE)) {
      throw $S00().Construct("Number Format Exception");
    }
    if (!$T00().op_LessThanOrEqual(value, $thisType.MAX_VALUE)) {
      throw $S00().Construct("Number Format Exception");
    }
    this.value = value;
  };

  function CurrencyID_byteValue () {
    if (!$T00().op_LessThanOrEqual(this.value, $thisType.MAX_VALUE)) {
      throw $S01().Construct("Value too big to be converted to byte");
    }
    return (this.value).ToNumber(255, false);
  };

  function CurrencyID_doubleValue () {
    throw $S00().Construct("Unsupported");
  };

  function CurrencyID_equals (obj) {
    return (!$thisType.$Is(obj) && (((obj === this).valueOf() | 0) || 
        $T00().op_Equality(this.value, $thisType.$As(obj).value)));
  };

  function CurrencyID_floatValue () {
    throw $S00().Construct("Unsupported");
  };

  function CurrencyID_getEcosystem () {
    if (!$T00().op_Inequality(this.value, $thisType.MSC_VALUE)) {
      var result = $T05().Msc;
    } else if (!$T00().op_Inequality(this.value, $thisType.TMSC_VALUE)) {
      result = $T05().Tmsc;
    } else {
      result = (
        $T00().op_LessThanOrEqual(this.value, $thisType.MAX_REAL_ECOSYSTEM_VALUE)
           ? $T05().Msc
           : $T05().Tmsc)
      ;
    }
    return result;
  };

  function CurrencyID_hashCode () {
    return (this.value).GetHashCode();
  };

  function CurrencyID_intValue () {
    if (!$T00().op_LessThanOrEqual(this.value, $thisType.MAX_VALUE)) {
      throw $S01().Construct("Value too big to be converted to integer");
    }
    return (this.value).ToNumber(4294967295, true);
  };

  function CurrencyID_longValue () {
    return this.value;
  };

  function CurrencyID_shortValue () {
    if (!$T00().op_LessThanOrEqual(this.value, $thisType.MAX_VALUE)) {
      throw $S01().Construct("Value too big to be converted to short");
    }
    return (this.value).ToNumber(65535, true);
  };

  function CurrencyID_ToHex8 () {
    return $T06().ToHex8(this.value);
  };

  function CurrencyID_toString () {
    return JSIL.ConcatString("CurrencyID:", this.value);
  };

  function CurrencyID_valueOf (shortName) {

    var $label0 = 0;
  $labelgroup0: 
    while (true) {
      switch ($label0) {
        case 0: /* $entry0 */ 
          if (shortName !== null) {
            if (!(shortName == "BTC")) {
              if (!(shortName == "MSC")) {
                if (!(shortName == "TMSC")) {
                  if (!(shortName == "MaidSafeCoin")) {
                    if (!(shortName == "TetherUS")) {
                      $label0 = 1 /* goto IL_71 */ ;
                      continue $labelgroup0;
                    }
                    var result = $thisType.TetherUs;
                  } else {
                    result = $thisType.MaidSafeCoin;
                  }
                } else {
                  result = $thisType.Tmsc;
                }
              } else {
                result = $thisType.Msc;
              }
            } else {
              result = $thisType.Btc;
            }
            return result;
          }

          $label0 = 1 /* goto IL_71 */ ;
          continue $labelgroup0;
        case 1: /* IL_71 */ 
          throw $S00().Construct("Number Format Exception");

          break $labelgroup0;
      }
    }
  };

  JSIL.MakeType({
      BaseType: $asm00.TypeRef("System.Object"), 
      Name: "OmniSharp.CurrencyID", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 1, 
    }, function ($interfaceBuilder) {
    $ = $interfaceBuilder;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Action($.Int64), 
      CurrencyID__ctor
    );

    $.Method({Static:false, Public:true }, "byteValue", 
      JSIL.MethodSignature.Return($.Byte), 
      CurrencyID_byteValue
    );

    $.Method({Static:false, Public:true }, "doubleValue", 
      JSIL.MethodSignature.Return($.Double), 
      CurrencyID_doubleValue
    );

    $.Method({Static:false, Public:true }, "equals", 
      new JSIL.MethodSignature($.Boolean, [$.Object]), 
      CurrencyID_equals
    );

    $.Method({Static:false, Public:true }, "floatValue", 
      JSIL.MethodSignature.Return($.Single), 
      CurrencyID_floatValue
    );

    $.Method({Static:false, Public:true }, "getEcosystem", 
      JSIL.MethodSignature.Return($asm01.TypeRef("OmniSharp.Ecosystem")), 
      CurrencyID_getEcosystem
    );

    $.Method({Static:false, Public:true }, "hashCode", 
      JSIL.MethodSignature.Return($.Int32), 
      CurrencyID_hashCode
    );

    $.Method({Static:false, Public:true }, "intValue", 
      JSIL.MethodSignature.Return($.Int32), 
      CurrencyID_intValue
    );

    $.Method({Static:false, Public:true }, "longValue", 
      JSIL.MethodSignature.Return($.Int64), 
      CurrencyID_longValue
    );

    $.Method({Static:false, Public:true }, "shortValue", 
      JSIL.MethodSignature.Return($.Int16), 
      CurrencyID_shortValue
    );

    $.Method({Static:false, Public:true }, "ToHex8", 
      JSIL.MethodSignature.Return($.String), 
      CurrencyID_ToHex8
    );

    $.Method({Static:false, Public:true }, "toString", 
      JSIL.MethodSignature.Return($.String), 
      CurrencyID_toString
    );

    $.Method({Static:true , Public:true }, "valueOf", 
      new JSIL.MethodSignature($.Type, [$.String]), 
      CurrencyID_valueOf
    );

    $.Field({Static:false, Public:false, ReadOnly:true }, "value", $.Int64); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "MIN_VALUE", $.Int64, function ($pi) {
        return $asm00.System.Int64.FromNumber(0);
      }); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "MAX_VALUE", $.Int64, function ($pi) {
        return ($asm00.System.UInt64.FromNumber(-1)).ToInt64();
      }); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "MAX_REAL_ECOSYSTEM_VALUE", $.Int64, function ($pi) {
        return $asm00.System.Int64.FromNumber(2147483647);
      }); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "MAX_TEST_ECOSYSTEM_VALUE", $.Int64, function ($pi) {
        return $pi.MAX_VALUE;
      }); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "BTC_VALUE", $.Int64, function ($pi) {
        return $asm00.System.Int64.FromNumber(0);
      }); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "MSC_VALUE", $.Int64, function ($pi) {
        return $asm00.System.Int64.FromNumber(1);
      }); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "TMSC_VALUE", $.Int64, function ($pi) {
        return $asm00.System.Int64.FromNumber(2);
      }); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "MaidSafeCoin_VALUE", $.Int64, function ($pi) {
        return $asm00.System.Int64.FromNumber(3);
      }); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "TetherUS_VALUE", $.Int64, function ($pi) {
        return $asm00.System.Int64.FromNumber(31);
      }); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "Btc", $.Type); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "Msc", $.Type); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "Tmsc", $.Type); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "MaidSafeCoin", $.Type); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "TetherUs", $.Type); 
    function CurrencyID__cctor () {
      $thisType.MIN_VALUE = $T00().Create(0, 0, 0);
      $thisType.MAX_VALUE = ($T01().FromNumber(-1)).ToInt64();
      $thisType.MAX_REAL_ECOSYSTEM_VALUE = $T00().Create(16777215, 127, 0);
      $thisType.MAX_TEST_ECOSYSTEM_VALUE = $thisType.MAX_VALUE;
      $thisType.BTC_VALUE = $T00().Create(0, 0, 0);
      $thisType.MSC_VALUE = $T00().Create(1, 0, 0);
      $thisType.TMSC_VALUE = $T00().Create(2, 0, 0);
      $thisType.MaidSafeCoin_VALUE = $T00().Create(3, 0, 0);
      $thisType.TetherUS_VALUE = $T00().Create(31, 0, 0);
      $thisType.Btc = new $thisType($thisType.BTC_VALUE);
      $thisType.Msc = new $thisType($thisType.MSC_VALUE);
      $thisType.Tmsc = new $thisType($thisType.TMSC_VALUE);
      $thisType.MaidSafeCoin = new $thisType($thisType.MaidSafeCoin_VALUE);
      $thisType.TetherUs = new $thisType($thisType.TetherUS_VALUE);
    };


    $.Method({Static:true , Public:false}, ".cctor", 
      JSIL.MethodSignature.Void, 
      CurrencyID__cctor
    );

    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

/* class OmniSharp.Ecosystem */ 

(function Ecosystem$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm00.System.Int32)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm00.System.Exception)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm00.System.Int16)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm00.System.Object)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm00.System.Type)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm00.System.Int64)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm00.System.String)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.ConstructorSignature($asm00.TypeRef("System.Exception"), [$asm00.TypeRef("System.String")]))) ();
  };

  function Ecosystem__ctor (value) {
    if ((value | 0) < ($thisType.MinValue | 0)) {
      throw $S00().Construct("Number Format Exception");
    }
    if ((value | 0) > ($thisType.MaxValue | 0)) {
      throw $S00().Construct("Number Format Exception");
    }
    this._value = ((value + 0x8000 & 0xFFFF) - 0x8000);
  };

  function Ecosystem_doubleValue () {
    throw $S00().Construct("Number Format Exception");
  };

  function Ecosystem_equals (obj) {
    return (!$T04().op_Inequality(JSIL.GetType(obj), $thisType.__Type__) && ((obj === this) || 
        ((this._value | 0) === ($thisType.$Cast(obj)._value | 0))));
  };

  function Ecosystem_floatValue () {
    throw $S00().Construct("Number Format Exception");
  };

  function Ecosystem_hashCode () {
    return (this._value).GetHashCode();
  };

  function Ecosystem_intValue () {
    return this._value;
  };

  function Ecosystem_longValue () {
    return $T05().FromNumber(this._value);
  };

  function Ecosystem_toString () {
    return JSIL.ConcatString("Ecosystem:", this._value);
  };

  JSIL.MakeType({
      BaseType: $asm00.TypeRef("System.Object"), 
      Name: "OmniSharp.Ecosystem", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 1, 
    }, function ($interfaceBuilder) {
    $ = $interfaceBuilder;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Action($.Int32), 
      Ecosystem__ctor
    );

    $.Method({Static:false, Public:true }, "doubleValue", 
      JSIL.MethodSignature.Return($.Double), 
      Ecosystem_doubleValue
    );

    $.Method({Static:false, Public:true }, "equals", 
      new JSIL.MethodSignature($.Boolean, [$.Object]), 
      Ecosystem_equals
    );

    $.Method({Static:false, Public:true }, "floatValue", 
      JSIL.MethodSignature.Return($.Single), 
      Ecosystem_floatValue
    );

    $.Method({Static:false, Public:true }, "hashCode", 
      JSIL.MethodSignature.Return($.Int32), 
      Ecosystem_hashCode
    );

    $.Method({Static:false, Public:true }, "intValue", 
      JSIL.MethodSignature.Return($.Int32), 
      Ecosystem_intValue
    );

    $.Method({Static:false, Public:true }, "longValue", 
      JSIL.MethodSignature.Return($.Int64), 
      Ecosystem_longValue
    );

    $.Method({Static:false, Public:true }, "toString", 
      JSIL.MethodSignature.Return($.String), 
      Ecosystem_toString
    );

    $.Field({Static:false, Public:false, ReadOnly:true }, "_value", $.Int16); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "MinValue", $.Int16, 1); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "MaxValue", $.Int16, 2); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "MscValue", $.Int16, 1); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "TmscValue", $.Int16, 2); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "Msc", $.Type); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "Tmsc", $.Type); 
    function Ecosystem__cctor () {
      $thisType.MinValue = 1;
      $thisType.MaxValue = 2;
      $thisType.MscValue = 1;
      $thisType.TmscValue = 2;
      $thisType.Msc = new $thisType($thisType.MscValue);
      $thisType.Tmsc = new $thisType($thisType.TmscValue);
    };


    $.Method({Static:true , Public:false}, ".cctor", 
      JSIL.MethodSignature.Void, 
      Ecosystem__cctor
    );

    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

/* class OmniSharp.Extensions */ 

(function Extensions$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm00.System.Object)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm00.System.String)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm00.System.Int32)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm00.System.Convert)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm01.OmniSharp.Ecosystem)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm00.System.Int64)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm00.System.Exception)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize(System.Array.Of($asm00.System.Byte))) ();
  };
  var $T08 = function () {
    return ($T08 = JSIL.Memoize($asm00.System.Byte)) ();
  };
  var $T09 = function () {
    return ($T09 = JSIL.Memoize($asm00.System.Text.Encoding)) ();
  };
  var $T0A = function () {
    return ($T0A = JSIL.Memoize($asm00.System.Text.StringBuilder)) ();
  };
  var $T0B = function () {
    return ($T0B = JSIL.Memoize($asm04.System.Linq.Enumerable)) ();
  };
  var $T0C = function () {
    return ($T0C = JSIL.Memoize($asm00.System.Collections.Generic.IEnumerable$b1.Of($asm00.System.Byte))) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.MethodSignature($asm00.TypeRef("System.Byte"), [$asm00.TypeRef("System.String"), $asm00.TypeRef("System.Int32")]))) ();
  };
  var $S01 = function () {
    return ($S01 = JSIL.Memoize(new JSIL.MethodSignature($jsilcore.TypeRef("System.Array", [$asm00.TypeRef("System.Byte")]), [$asm00.TypeRef("System.String")]))) ();
  };
  var $S02 = function () {
    return ($S02 = JSIL.Memoize(new JSIL.MethodSignature($asm00.TypeRef("System.String"), [$jsilcore.TypeRef("System.Array", [$asm00.TypeRef("System.Byte")])]))) ();
  };
  var $S03 = function () {
    return ($S03 = JSIL.Memoize(new JSIL.ConstructorSignature($asm00.TypeRef("System.Text.StringBuilder"), null))) ();
  };
  var $S04 = function () {
    return ($S04 = JSIL.Memoize(new JSIL.MethodSignature($asm00.TypeRef("System.Int32"), [$asm00.TypeRef("System.Collections.Generic.IEnumerable`1", ["!!0"])], ["TSource"]))) ();
  };
  var $S05 = function () {
    return ($S05 = JSIL.Memoize(new JSIL.MethodSignature($asm00.TypeRef("System.Text.StringBuilder"), [$asm00.TypeRef("System.String")]))) ();
  };

  function Extensions_ToByte16 (obj) {
    var text = (JSIL.GetType(obj)).toString();
    if (text !== null) {
      if (text == "OmniSharp.Ecosystem") {
        var result = ($S00().CallStatic($T03(), "ToByte", null, (($T04().$Cast(obj)).intValue()).toString(), 16) | 0);
        return result;
      }
    }
    result = ($S00().CallStatic($T03(), "ToByte", null, "", 16) | 0);
    return result;
  };

  function Extensions_ToHex16 (value) {
    return $T01().Format("{0:X16}", value);
  };

  function Extensions_ToHex4 (value) {
    return $T01().Format("{0:X4}", value);
  };

  function Extensions_ToHex6 (value) {
    return $T01().Format("{0:X6}", value);
  };

  function Extensions_ToHex8 (value) {
    return $T01().Format("{0:X8}", value);
  };

  function Extensions_toHexString$00 (str, $exception) {
    var ba = JSIL.Array.New($T08(), 0);
    try {
      ba = $S01().CallVirtual("GetBytes", null, $T09().get_UTF8(), str);
    } catch ($exception) {
    }
    return $S02().CallStatic($thisType, "toHexString", null, ba);
  };

  function Extensions_toHexString$01 (ba) {
    var str = $S03().Construct();

    for (var i = 0; i < ($S04().CallStatic($T0B(), "Count$b1", [$asm00.System.Byte], $T0C().$Cast(ba)) | 0); i = ((i + 1) | 0)) {
      $S05().CallVirtual("Append", null, str, $T01().Format("{0:X}", ba[i]));
    }
    return $T01().Format("{0}00", str);
  };

  JSIL.MakeStaticClass("OmniSharp.Extensions", true, [], function ($interfaceBuilder) {
    $ = $interfaceBuilder;

    $.Method({Static:true , Public:true }, "ToByte16", 
      new JSIL.MethodSignature($.Int32, [$.Object]), 
      Extensions_ToByte16
    )
      .Attribute($asm00.TypeRef("System.Runtime.CompilerServices.ExtensionAttribute"));

    $.Method({Static:true , Public:true }, "ToHex16", 
      new JSIL.MethodSignature($.String, [$.Int64]), 
      Extensions_ToHex16
    )
      .Attribute($asm00.TypeRef("System.Runtime.CompilerServices.ExtensionAttribute"));

    $.Method({Static:true , Public:true }, "ToHex4", 
      new JSIL.MethodSignature($.String, [$.Int64]), 
      Extensions_ToHex4
    )
      .Attribute($asm00.TypeRef("System.Runtime.CompilerServices.ExtensionAttribute"));

    $.Method({Static:true , Public:true }, "ToHex6", 
      new JSIL.MethodSignature($.String, [$.Int64]), 
      Extensions_ToHex6
    )
      .Attribute($asm00.TypeRef("System.Runtime.CompilerServices.ExtensionAttribute"));

    $.Method({Static:true , Public:true }, "ToHex8", 
      new JSIL.MethodSignature($.String, [$.Int64]), 
      Extensions_ToHex8
    )
      .Attribute($asm00.TypeRef("System.Runtime.CompilerServices.ExtensionAttribute"));

    $.Method({Static:true , Public:true }, "toHexString", 
      new JSIL.MethodSignature($.String, [$.String]), 
      Extensions_toHexString$00
    )
      .Attribute($asm00.TypeRef("System.Runtime.CompilerServices.ExtensionAttribute"));

    $.Method({Static:true , Public:true }, "toHexString", 
      new JSIL.MethodSignature($.String, [$jsilcore.TypeRef("System.Array", [$.Byte])]), 
      Extensions_toHexString$01
    )
      .Attribute($asm00.TypeRef("System.Runtime.CompilerServices.ExtensionAttribute"));

    return function (newThisType) { $thisType = newThisType; }; 
  })
    .Attribute($asm00.TypeRef("System.Runtime.CompilerServices.ExtensionAttribute"));

})();

/* class OmniSharp.PropertyType */ 

(function PropertyType$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm00.System.Int32)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm00.System.Exception)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm00.System.Object)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm00.System.Type)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm00.System.Int64)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm00.System.String)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.ConstructorSignature($asm00.TypeRef("System.Exception"), [$asm00.TypeRef("System.String")]))) ();
  };

  function PropertyType__ctor (value) {
    if (!(((value | 0) === ($thisType.INDIVISIBLE_VALUE | 0)) || ((value | 0) === ($thisType.DIVISIBLE_VALUE | 0)))) {
      throw $S00().Construct("Number Format Exception");
    }
    this.value = (value | 0);
  };

  function PropertyType_doubleValue () {
    throw $S00().Construct("Unsupported");
  };

  function PropertyType_equals (obj) {
    return (!$T03().op_Inequality(JSIL.GetType(obj), $thisType.__Type__) && ((obj === this) || 
        ((this.value | 0) === ($thisType.$Cast(obj).value | 0))));
  };

  function PropertyType_floatValue () {
    throw $S00().Construct("Unsupported");
  };

  function PropertyType_hashCode () {
    return (this.value).GetHashCode();
  };

  function PropertyType_intValue () {
    return this.value;
  };

  function PropertyType_longValue () {
    return $T04().FromNumber(this.value);
  };

  function PropertyType_toString () {
    return JSIL.ConcatString("PropertyType:", this.value);
  };

  JSIL.MakeType({
      BaseType: $asm00.TypeRef("System.Object"), 
      Name: "OmniSharp.PropertyType", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 1, 
    }, function ($interfaceBuilder) {
    $ = $interfaceBuilder;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Action($.Int32), 
      PropertyType__ctor
    );

    $.Method({Static:false, Public:true }, "doubleValue", 
      JSIL.MethodSignature.Return($.Double), 
      PropertyType_doubleValue
    );

    $.Method({Static:false, Public:true }, "equals", 
      new JSIL.MethodSignature($.Boolean, [$.Object]), 
      PropertyType_equals
    );

    $.Method({Static:false, Public:true }, "floatValue", 
      JSIL.MethodSignature.Return($.Single), 
      PropertyType_floatValue
    );

    $.Method({Static:false, Public:true }, "hashCode", 
      JSIL.MethodSignature.Return($.Int32), 
      PropertyType_hashCode
    );

    $.Method({Static:false, Public:true }, "intValue", 
      JSIL.MethodSignature.Return($.Int32), 
      PropertyType_intValue
    );

    $.Method({Static:false, Public:true }, "longValue", 
      JSIL.MethodSignature.Return($.Int64), 
      PropertyType_longValue
    );

    $.Method({Static:false, Public:true }, "toString", 
      JSIL.MethodSignature.Return($.String), 
      PropertyType_toString
    );

    $.Field({Static:false, Public:false, ReadOnly:true }, "value", $.Int32); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "INDIVISIBLE_VALUE", $.Int32, 1); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "DIVISIBLE_VALUE", $.Int32, 2); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "INDIVISIBLE", $.Type); 
    $.Field({Static:true , Public:true , ReadOnly:true }, "DIVISIBLE", $.Type); 
    function PropertyType__cctor () {
      $thisType.INDIVISIBLE_VALUE = 1;
      $thisType.DIVISIBLE_VALUE = 2;
      $thisType.INDIVISIBLE = new $thisType($thisType.INDIVISIBLE_VALUE);
      $thisType.DIVISIBLE = new $thisType($thisType.DIVISIBLE_VALUE);
    };


    $.Method({Static:true , Public:false}, ".cctor", 
      JSIL.MethodSignature.Void, 
      PropertyType__cctor
    );

    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

JSIL.DeclareNamespace("OmniSharp.tx");
/* class OmniSharp.tx.RawTxBuilder */ 

(function RawTxBuilder$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm01.OmniSharp.CurrencyID)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm00.System.Int64)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm00.System.Byte)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm00.System.String)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm00.System.Object)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm01.OmniSharp.Extensions)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm01.OmniSharp.Ecosystem)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm01.OmniSharp.PropertyType)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.MethodSignature($asm00.TypeRef("System.String"), [$asm00.TypeRef("System.String")]))) ();
  };

  function RawTxBuilder__ctor () {
  };

  function RawTxBuilder_createDexSellOfferHex (currencyId, amountForSale, amountDesired, paymentWindow, commitmentFee, action) {
    return $T03().Format("00010014{0:D8}{1}{2}{3}{4}{5}", JSIL.Array.New($T04(), [currencyId.ToHex8(), $T05().ToHex16(amountForSale), $T05().ToHex16(amountDesired), paymentWindow, $T05().ToHex16(commitmentFee), action]));
  };

  function RawTxBuilder_createIssuanceHex (currencyId, amountDesired, msg) {
    var rawTxHex = $T03().Format(
      "00000037{0}{1}{2}", 
      $T05().ToHex8(currencyId), 
      $T05().ToHex16(amountDesired), 
      $S00().CallStatic($T05(), "toHexString", null, msg)
    );
    return rawTxHex.toLowerCase();
  };

  function RawTxBuilder_createPropertyHex (ecosystem, propertyType, previousPropertyId, category, subCategory, label, website, info, amount) {
    var rawTxHex = $T03().Format("00000032{0:D2}{1:D4}{2:D8}{3}{4}{5}{6}{7}{8}", JSIL.Array.New($T04(), [ecosystem.intValue(), propertyType.intValue(), previousPropertyId, $S00().CallStatic($T05(), "toHexString", null, category), $S00().CallStatic($T05(), "toHexString", null, subCategory), $S00().CallStatic($T05(), "toHexString", null, label), $S00().CallStatic($T05(), "toHexString", null, website), $S00().CallStatic($T05(), "toHexString", null, info), $T05().ToHex16(amount)]));
    return rawTxHex.toLowerCase();
  };

  function RawTxBuilder_createSendToOwnersHex (currencyId, amount) {
    var rawTxHex = $T03().Format(
      "00000003{0}{1}", 
      $T05().ToHex8(currencyId), 
      $T05().ToHex16(amount)
    );
    return rawTxHex.toLowerCase();
  };

  function RawTxBuilder_createSimpleSendHex (currencyId, amount) {
    var rawTxHex = $T03().Format(
      "00000000{0}{1}", 
      $T05().ToHex8(currencyId), 
      $T05().ToHex16(amount)
    );
    return rawTxHex.toLowerCase();
  };

  JSIL.MakeType({
      BaseType: $asm00.TypeRef("System.Object"), 
      Name: "OmniSharp.tx.RawTxBuilder", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($interfaceBuilder) {
    $ = $interfaceBuilder;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      RawTxBuilder__ctor
    );

    $.Method({Static:false, Public:true }, "createDexSellOfferHex", 
      new JSIL.MethodSignature($.String, [
          $asm01.TypeRef("OmniSharp.CurrencyID"), $.Int64, 
          $.Int64, $.Byte, 
          $.Int64, $.Byte
        ]), 
      RawTxBuilder_createDexSellOfferHex
    );

    $.Method({Static:false, Public:true }, "createIssuanceHex", 
      new JSIL.MethodSignature($.Object, [
          $.Int64, $.Int64, 
          $.String
        ]), 
      RawTxBuilder_createIssuanceHex
    );

    $.Method({Static:false, Public:true }, "createPropertyHex", 
      new JSIL.MethodSignature($.String, [
          $asm01.TypeRef("OmniSharp.Ecosystem"), $asm01.TypeRef("OmniSharp.PropertyType"), 
          $.Int64, $.String, 
          $.String, $.String, 
          $.String, $.String, 
          $.Int64
        ]), 
      RawTxBuilder_createPropertyHex
    );

    $.Method({Static:false, Public:true }, "createSendToOwnersHex", 
      new JSIL.MethodSignature($.String, [$.Int64, $.Int64]), 
      RawTxBuilder_createSendToOwnersHex
    );

    $.Method({Static:false, Public:true }, "createSimpleSendHex", 
      new JSIL.MethodSignature($.String, [$.Int64, $.Int64]), 
      RawTxBuilder_createSimpleSendHex
    );

    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

