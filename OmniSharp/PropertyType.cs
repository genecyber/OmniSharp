using System;

/*
 * Number type to represent an Omni protocol property type.
*/
namespace OmniSharp
{
    public class PropertyType {
        private readonly int value;

        public static readonly int INDIVISIBLE_VALUE = 1;
        public static readonly int DIVISIBLE_VALUE = 2;

        public static readonly PropertyType INDIVISIBLE = new PropertyType(INDIVISIBLE_VALUE);
        public static readonly PropertyType DIVISIBLE = new PropertyType(DIVISIBLE_VALUE);

        public PropertyType(int value) {
            if (!(value == INDIVISIBLE_VALUE ||
                  value == DIVISIBLE_VALUE)) {
                      throw new Exception("Number Format Exception");
            }
            this.value = value;
        }

        //@Override
        public int intValue() {
            return value;
        }

        //@Override
        public long longValue() {
            return (long) value;
        }

        //@Override
        public float floatValue() {
            throw new Exception("Unsupported");
        }

        //@Override
        public double doubleValue() {
            throw new Exception("Unsupported");
        }

        //@Override
        public int hashCode() {
            return value.GetHashCode();
        }

        //@Override
        public Boolean equals(Object obj) {
            if (obj.GetType() != typeof(PropertyType)) {
                return false;
            }
            if (obj == this) {
                return true;
            }
            return this.value == ((PropertyType)obj).value;
        }

        //@Override
        public String toString() {
            return "PropertyType:" + value;
        }

    }
}
