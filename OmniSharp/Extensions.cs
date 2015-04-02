using System;

namespace OmniSharp
{
    public static class Extensions
    {
        public static String ToHex16(this long value)
        {
            return String.Format("{0:X16}", value);
        }
    }
}
