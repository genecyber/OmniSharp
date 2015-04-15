using System;
using System.Linq;
using System.Text;

namespace OmniSharp.tx
{

    /**
     * Build hex-encoded raw Omni transactions
     */
    public class RawTxBuilder
    {
        /**
         * Creates a hex-encoded raw transaction of type 0: "Simple Send".
         */
/*        public String createSimpleSendHex(CurrencyID currencyId, long amount) {
            String rawTxHex = String.Format("00000000{0}{1}", currencyId.ToHex8(), amount.ToHex16());
            return rawTxHex.ToLower();
        }*/

        public String createSimpleSendHex(long currencyId, long amount)
        {
            String rawTxHex = String.Format("00000000{0}{1}", currencyId.ToHex8(), amount.ToHex16());
            return rawTxHex.ToLower();
        }

        /**
         * Creates a hex-encoded raw transaction of type 3: "send to owners".
         */
        public String createSendToOwnersHex(CurrencyID currencyId, long amount) {
            String rawTxHex = String.Format("00000003{0}{1}", currencyId.ToHex8(), amount.ToHex16());
            return rawTxHex.ToLower();
        }

        /**
         * Creates a hex-encoded raw transaction of type 20: "sell mastercoin for bitcoin".
         *
         * Currency amounts are Long values in Satoshis/Willets
         *
         * @param currencyId
         * @param amountForSale
         * @param amountDesired
         * @param paymentWindow
         * @param commitmentFee
         * @param action
         * @return
         */

        public String createDexSellOfferHex(CurrencyID currencyId, long amountForSale, long amountDesired,
            Byte paymentWindow, long commitmentFee, Byte action)
        {
            String rawTxHex = String.Format("00010014{0:D8}{1}{2}{3}{4}{5}",
                currencyId.ToHex8(),
                amountForSale.ToHex16(),
                amountDesired.ToHex16(),
                paymentWindow,
                commitmentFee.ToHex16(),
                action);
            return rawTxHex;
        }

        /**
         * Creates a hex-encoded raw transaction of type 50: "create property with fixed supply".
         */
        public String createPropertyHex(Ecosystem ecosystem, PropertyType propertyType, long previousPropertyId,
                                 String category, String subCategory, String label, String website, String info,
                                 long amount) {
            String rawTxHex = String.Format("00000032{0:D2}{1:D4}{2:D8}{3}{4}{5}{6}{7}{8}",
                    ecosystem.intValue(),
                    propertyType.intValue(),
                    previousPropertyId,
                    category.toHexString(),
                    subCategory.toHexString(),
                    label.toHexString(),
                    website.toHexString(),
                    info.toHexString(),
                    amount.ToHex16());
            return rawTxHex.ToLower();
        }

        public object createIssuanceHex(long currencyId, long amountDesired, String msg)
        {
            var rawTxHex = String.Format("00000037{0}{1}{2}",
                currencyId.ToHex8(),
                amountDesired.ToHex16(),
                msg.toHexString());
            return rawTxHex.ToLower();
        }
    }
}
