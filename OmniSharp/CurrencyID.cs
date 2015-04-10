using System;

namespace OmniSharp
{
    public sealed class CurrencyID
    {
        private readonly long value;

        public static readonly long MIN_VALUE = 0;
        public static readonly long MAX_VALUE = 4294967295L;

        public static readonly long MAX_REAL_ECOSYSTEM_VALUE = 2147483647;
        public static readonly long MAX_TEST_ECOSYSTEM_VALUE = MAX_VALUE;

        public static readonly long BTC_VALUE = 0;
        public static readonly long MSC_VALUE = 1;
        public static readonly long TMSC_VALUE = 2;
        public static readonly long MaidSafeCoin_VALUE = 3;
        public static readonly long TetherUS_VALUE = 31;

        public static readonly CurrencyID Btc = new CurrencyID(BTC_VALUE);
        public static readonly CurrencyID Msc = new CurrencyID(MSC_VALUE);
        public static readonly CurrencyID Tmsc = new CurrencyID(TMSC_VALUE);
        public static readonly CurrencyID MaidSafeCoin = new CurrencyID(MaidSafeCoin_VALUE);
        public static readonly CurrencyID TetherUs = new CurrencyID(TetherUS_VALUE);

        public static CurrencyID valueOf(String shortName)
        {
            switch (shortName)
            {
                case "BTC":
                    return Btc;
                case "MSC":
                    return Msc;
                case "TMSC":
                    return Tmsc;
                case "MaidSafeCoin":
                    return MaidSafeCoin;
                case "TetherUS":
                    return TetherUs;
                default:
                    throw new Exception("Number Format Exception");
            }
        }


        public CurrencyID( long value)
        {
            if (value < MIN_VALUE)
            {
                throw new Exception("Number Format Exception");
            }
            if (value > MAX_VALUE)
            {
                throw new Exception("Number Format Exception");
            }
            this.value = value;
        }

        public Ecosystem getEcosystem()
        {
            if (value == MSC_VALUE)
            {
                return Ecosystem.Msc;
            }
            if (value == TMSC_VALUE)
            {
                return Ecosystem.Tmsc;
            }
            return value <= MAX_REAL_ECOSYSTEM_VALUE ? Ecosystem.Msc : Ecosystem.Tmsc;
        }

        //@Override
        public byte byteValue()
        {
            if (value > MAX_VALUE)
            {
                throw new ArithmeticException("Value too big to be converted to byte");
            }
            return (byte) value;
        }

        //@Override
        public short shortValue()
        {
            if (value > MAX_VALUE)
            {
                throw new ArithmeticException("Value too big to be converted to short");
            }
            return (short) value;
        }

        //@Override
        public int intValue()
        {
            if (value > MAX_VALUE)
            {
                throw new ArithmeticException("Value too big to be converted to integer");
            }
            return (int) value;
        }

        //@Override
        public long longValue()
        {
            return value;
        }

        public String ToHex8()
        {
            return value.ToHex8();
        }

        //@Override
        public float floatValue()
        {
            throw new Exception("Unsupported");
        }

        //@Override
        public double doubleValue()
        {
            throw new Exception("Unsupported");
        }

        //@Override
        public int hashCode()
        {
            return value.GetHashCode();
        }

        //@Override
        public Boolean equals(Object obj)
        {
            if (obj is CurrencyID)
            {
                return false;
            }
            if (obj == this)
            {
                return true;
            }
            return value == (obj as CurrencyID).value;
        }

        //@Override
        public String toString()
        {
            return "CurrencyID:" + value;
        }

    }
}
