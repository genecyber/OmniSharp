/* Generated by JSIL v0.8.1 build 920. See http://jsil.org/ for more information. */ 
'use strict';
var $asm0C = JSIL.DeclareAssembly("OmniSharpTests, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");

JSIL.DeclareNamespace("OmniSharpTests");
/* class OmniSharpTests.TxBuilderTests */ 

(function TxBuilderTests$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm01.OmniSharp.tx.RawTxBuilder)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm00.System.String)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm01.OmniSharp.Ecosystem)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm01.OmniSharp.PropertyType)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm00.System.Int64)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm0B.NUnit.Framework.Assert)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm00.System.Object)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.MethodSignature(null, [$asm0A.TypeRef("System.Object"), $asm0A.TypeRef("System.Object")]))) ();
  };

  function TxBuilderTests__ctor () {
  };

  function TxBuilderTests_CreateSmartProperty () {
    var builder = new ($T00())();
    var hex = builder.createPropertyHex(
      $T02().Msc, 
      $T03().INDIVISIBLE, 
      $T04().Create(0, 0, 0), 
      "Companies", 
      "Bitcoin Mining", 
      "Quantum Miner", 
      "tinyurl.com/kwejgoig", 
      "", 
      $T04().Create(16113920, 5, 0)
    );
    $S00().CallStatic($T05(), "AreEqual", null, "0000003201000100000000436f6d70616e69657300426974636f696e204d696e696e67005175616e74756d204d696e65720074696e7975726c2e636f6d2f6b77656a676f696700000000000005f5e100", hex);
  };

  function TxBuilderTests_GrantSmartProperty () {
    var builder = new ($T00())();
    var hex = builder.createIssuanceHex(
      $T04().Create(8, 0, 0), 
      $T04().Create(1000, 0, 0), 
      "First Milestone Reached!"
    );
    $S00().CallStatic($T05(), "AreEqual", null, "000000370000000800000000000003e84669727374204d696c6573746f6e6520526561636865642100", hex);
  };

  function TxBuilderTests_SendToOwners () {
    var builder = new ($T00())();
    $S00().CallStatic($T05(), "AreEqual", null, "00000003000000010000000005f5e100", builder.createSendToOwnersHex(
        $T04().Create(1, 0, 0), 
        $T04().Create(16113920, 5, 0)
      ));
  };

  function TxBuilderTests_SimpleSendAssetId () {
    var builder = new ($T00())();
    $S00().CallStatic($T05(), "AreEqual", null, "00000000000000220000000005f5e100", builder.createSimpleSendHex(
        $T04().Create(34, 0, 0), 
        $T04().Create(16113920, 5, 0)
      ));
  };

  JSIL.MakeType({
      BaseType: $asm00.TypeRef("System.Object"), 
      Name: "OmniSharpTests.TxBuilderTests", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($interfaceBuilder) {
    $ = $interfaceBuilder;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      TxBuilderTests__ctor
    );

    $.Method({Static:false, Public:true }, "CreateSmartProperty", 
      JSIL.MethodSignature.Void, 
      TxBuilderTests_CreateSmartProperty
    )
      .Attribute($asm0B.TypeRef("NUnit.Framework.TestAttribute"));

    $.Method({Static:false, Public:true }, "GrantSmartProperty", 
      JSIL.MethodSignature.Void, 
      TxBuilderTests_GrantSmartProperty
    )
      .Attribute($asm0B.TypeRef("NUnit.Framework.TestAttribute"));

    $.Method({Static:false, Public:true }, "SendToOwners", 
      JSIL.MethodSignature.Void, 
      TxBuilderTests_SendToOwners
    )
      .Attribute($asm0B.TypeRef("NUnit.Framework.TestAttribute"));

    $.Method({Static:false, Public:true }, "SimpleSendAssetId", 
      JSIL.MethodSignature.Void, 
      TxBuilderTests_SimpleSendAssetId
    )
      .Attribute($asm0B.TypeRef("NUnit.Framework.TestAttribute"));

    return function (newThisType) { $thisType = newThisType; }; 
  })
    .Attribute($asm0B.TypeRef("NUnit.Framework.TestFixtureAttribute"));

})();

