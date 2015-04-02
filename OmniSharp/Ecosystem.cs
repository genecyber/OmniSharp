using System;

namespace OmniSharp
{
    /**
     * Number type to represent a Master Protocol Ecosystem
     */
    public class Ecosystem {
        private readonly short _value;

        public static readonly short   MinValue = 1;
        public static readonly short   MaxValue = 2;

        public static readonly short   MscValue = 1;
        public static readonly short   TmscValue = 2;

        public static readonly Ecosystem   Msc = new Ecosystem(MscValue);
        public static readonly Ecosystem   Tmsc = new Ecosystem(TmscValue);

        public Ecosystem(int value) {
            if (value < MinValue) {
                throw new Exception("Number Format Exception");
            }
            if (value > MaxValue) {
                throw new Exception("Number Format Exception");
            }
            this._value = (short) value;
        }

        //@Override
        public int intValue() {
            return _value;
        }

        //@Override
        public long longValue() {
            return _value;
        }

        //@Override
        public float floatValue() {
            throw new Exception("Number Format Exception");
        }

        //@Override
        public double doubleValue() {
            throw new Exception("Number Format Exception");
        }

        //@Override
        public int hashCode() {
            return _value.GetHashCode();
        }

        //@Override
        public Boolean equals(Object obj) {
            if (obj.GetType() !=  typeof(Ecosystem)) {
                return false;
            }
            if (obj == this) {
                return true;
            }
            return _value == ((Ecosystem)obj)._value;
        }

        //@Override
        public String toString() {
            return "Ecosystem:" + _value;
        }

    }
}
