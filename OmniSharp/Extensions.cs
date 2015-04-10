using System;
using System.Linq;
using System.Text;

namespace OmniSharp
{
    public static class Extensions
    {
        public static String ToHex16(this long value)
        {
            return String.Format("{0:X16}", value);
        }

        public static String ToHex8(this long value)
        {
            return String.Format("{0:X8}", value);
        }

        public static String ToHex4(this long value)
        {
            return String.Format("{0:X4}", value);
        }

        public static String ToHex6(this long value)
        {
            return String.Format("{0:X6}", value);
        }

        public static int ToByte16(this Object obj)
        {
            switch (obj.GetType().ToString())
            {
                case "OmniSharp.Ecosystem":
                    return Convert.ToByte(((Ecosystem)obj).intValue().ToString(), 16);
                default :
                    return Convert.ToByte("", 16);
            }
            
        }

        /**
         * Converts an UTF-8 encoded String into a hexadecimal string representation.
         *
         * @param str The string
         * @return The hexadecimal representation
         */
        public static String toHexString(this String str)
        {
            byte[] ba = new byte[0];
            try
            {
                ba = Encoding.UTF8.GetBytes(str);
            }
            catch (Exception e)
            {
                //e.printStackTrace();
                //throw new RuntimeException(e);
            }
            return ba.toHexString();
        }

        /**
         * Converts a byte array into a hexadecimal string representation.
         *
         * @param ba The byte array
         * @return The hexadecimal representation
         */
        public static String toHexString(this byte[] ba)
        {
            StringBuilder str = new StringBuilder();
            for (int i = 0; i < ba.Count(); i++)
            {
                str.Append(String.Format("{0:X}", ba[i]));
            }
            return String.Format("{0}00",str);
        }
    }
}
