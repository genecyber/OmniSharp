using NUnit.Framework;
using OmniSharp;
using OmniSharp.tx;
using NBitcoin;

namespace OmniSharpTests
{
    [TestFixture]
    public class TxBuilderTests
    {
        [Test]
        public void SimpleSend()
        {
            RawTxBuilder builder = new RawTxBuilder();
            var hex = builder.createSimpleSendHex(CurrencyID.Msc, (long) MoneyUnit.BTC);
            Assert.AreEqual("00000000000000010000000005f5e100", hex);
        }
    }
}
