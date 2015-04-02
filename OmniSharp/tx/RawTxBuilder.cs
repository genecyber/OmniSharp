using System;
using System.Linq;
using System.Text;

namespace OmniSharp.tx
{

    /**
     * Build hex-encoded raw Omni transactions
     */
    public class RawTxBuilder {

        /**
         * Creates a hex-encoded raw transaction of type 0: "Simple Send".
         */
        public String createSimpleSendHex(CurrencyID currencyId, long amount) {
            String rawTxHex = String.Format("00000000{0:D8}{1}", currencyId.longValue(), amount.ToHex16()).ToLower();
            return rawTxHex;
        }

        /**
         * Creates a hex-encoded raw transaction of type 3: "send to owners".
         */
        public String createSendToOwnersHex(CurrencyID currencyId, long amount) {
            String rawTxHex = String.Format("00000003{0}{1}", currencyId.longValue(), amount);
            return rawTxHex;
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
                                            Byte paymentWindow, long commitmentFee, Byte action) {
            String rawTxHex = String.Format("00010014{0}{1}{2}{3}{4}{5}",
                    currencyId.longValue(),
                    amountForSale,
                    amountDesired,
                    paymentWindow,
                    commitmentFee,
                    action);
            return rawTxHex;
                                            }

        /**
         * Creates a hex-encoded raw transaction of type 50: "create property with fixed supply".
         */
        public String createPropertyHex(Ecosystem ecosystem, PropertyType propertyType, long previousPropertyId,
                                 String category, String subCategory, String label, String website, String info,
                                 long amount) {
            String rawTxHex = String.Format("00000032{0}{1}{2}{3}{4}{5}{6}{7}{8}",
                    Convert.ToByte(ecosystem.toString(),16),
                    propertyType.intValue(),
                    previousPropertyId,
                    toHexString(category),
                    toHexString(subCategory),
                    toHexString(label),
                    toHexString(website),
                    toHexString(info),
                    amount);
            return rawTxHex;
        }

        /**
         * Converts an UTF-8 encoded String into a hexadecimal string representation.
         *
         * @param str The string
         * @return The hexadecimal representation
         */
        String toHexString(String str) {
            byte[] ba = new byte[0];
            try {
                ba = Encoding.UTF8.GetBytes(str);
            } catch (Exception e) {
                //e.printStackTrace();
                //throw new RuntimeException(e);
            }
            return toHexString(ba);
        }

        /**
         * Converts a byte array into a hexadecimal string representation.
         *
         * @param ba The byte array
         * @return The hexadecimal representation
         */
        String toHexString(byte[] ba) {
            StringBuilder str = new StringBuilder();
            for (int i = 0; i < ba.Count(); i++) {
                str.Append(String.Format("{0}", ba[i]));
            }
            return str.ToString();
        }

    }
}
