using NUnit.Framework;
using OmniSharp;
using OmniSharp.tx;

namespace OmniSharpTests
{
    [TestFixture]
    public class TxBuilderTests
    {

        [Test]
        public void SimpleSendAssetId()
        {
            RawTxBuilder builder = new RawTxBuilder();
            var hex = builder.createSimpleSendHex(34, 100000000);
            Assert.AreEqual("00000000000000220000000005f5e100", hex);
        }

        [Test]
        public void SimpleSendAssetIdOutsideBoundry()
        {
            RawTxBuilder builder = new RawTxBuilder();
            var hex = builder.createSimpleSendHex(1, 2500050777878787878);
            Assert.AreEqual("000000000000002222b1f6efc7e77726", hex);
        }

        [Test]
        public void SimpleSendAssetIdLowBoundry()
        {
            RawTxBuilder builder = new RawTxBuilder();
            var hex = builder.createSimpleSendHex(34, 1);
            Assert.AreEqual("00000000000000220000000000000001", hex);
        }

        [Test]
        public void SendToOwners()
        {
            RawTxBuilder builder = new RawTxBuilder(); //TX 3
            var hex = builder.createSendToOwnersHex(1, 100000000);
            Assert.AreEqual("00000003000000010000000005f5e100", hex);
        }

        [Test]
        public void CreateSmartProperty() //TX 50
        {
            RawTxBuilder builder = new RawTxBuilder();
            var hex = builder.createPropertyHex(Ecosystem.Msc, PropertyType.INDIVISIBLE, 0, "Companies", "Bitcoin Mining", "Quantum Miner", "tinyurl.com/kwejgoig", "", 100000000);
            Assert.AreEqual("0000003201000100000000436f6d70616e69657300426974636f696e204d696e696e67005175616e74756d204d696e65720074696e7975726c2e636f6d2f6b77656a676f696700000000000005f5e100", hex);
        }

        [Test]
        public void GrantSmartProperty() //TX 55
        {
            RawTxBuilder builder = new RawTxBuilder();
            var hex = builder.createIssuanceHex(8, 1000, "First Milestone Reached!");
            Assert.AreEqual("000000370000000800000000000003e84669727374204d696c6573746f6e6520526561636865642100",hex);
        }

        
    }
}
/*class RawTxBuilderSpec extends Specification {
    @Shared
    RawTxBuilder builder

    

    def "The generated hex-encoded Simple To Owners transaction matches a valid reference transaction"() {
        when:
        def txHex = builder.createSendToOwnersHex(MSC,
                Coin.COIN_VALUE)

        then:
        txHex == "00000003000000010000000005f5e100"
    }

    def "The generated hex-encoded Dex Sell Offer transaction matches a valid reference transaction"() {
        when:
        def txHex = builder.createDexSellOfferHex(MSC,
                Coin.COIN_VALUE,    // 1 BTC in Satoshis
                20000000,           // 0.2 BTC in Satoshis
                (Byte) 10,
                10000,              // Fee in Satoshis
                (Byte) 1)

        then:
        txHex == "00010014000000010000000005f5e1000000000001312d000a000000000000271001"
    }
}*/
