namespace OmniSharp.math
{
    public class BigInt
    {
        //initial variables
        private string BigValue;
        public int Length;

        //Constructor
        public BigInt(string value)
        {
            BigValue = value;
            Length = value.Length;
        }

        //String value
        public override string ToString()
        {
            return BigValue;
        }

        //Comparison
        private int CompareTo(BigInt BigIntegerTwo) //returns -1 if less than argument, 0 if equal, and 1 if greater than
        {
            int CharDifference = Length - BigIntegerTwo.Length;
            if (CharDifference < 0)
            {
                return -1;
            }
            else if (CharDifference > 0)
            {
                return 1;
            }
            else
            {
                for (int i = 0; i < Length; i++)
                {
                    int ThisValue = int.Parse(BigValue.Substring(i, 1));
                    int ArgValue = int.Parse(BigIntegerTwo.BigValue.Substring(i, 1));
                    if (ThisValue > ArgValue)
                    {
                        return 1;
                    }
                    else if (ThisValue < ArgValue)
                    {
                        return -1;
                    }
                }
            }
            return 0;
        }

        //Equals
        public bool Equals(BigInt BigIntegerTwo)
        {
            if (this.CompareTo(BigIntegerTwo) == 0)
            {
                return true;
            }

            return false;
        }

        //Less Than
        public bool LessThan(BigInt BigIntegerTwo)
        {
            if (this.CompareTo(BigIntegerTwo) == -1)
            {
                return true;
            }

            return false;
        }

        //Greater Than
        public bool GreaterThan(BigInt BigIntegerTwo)
        {
            if (this.CompareTo(BigIntegerTwo) == 1)
            {
                return true;
            }

            return false;
        }

        //Addition
        public BigInt Add(BigInt BigIntegerTwo)
        {
            string SumString = "";

            int CharDifference = Length - BigIntegerTwo.Length;

            int Remainder = 0;

            if (CharDifference == 0)
            {
                for (int i = Length - 1; i >= 0; i--)
                {
                    int Top = int.Parse(BigValue.Substring(i, 1)) + Remainder;
                    int Bottom = int.Parse((BigIntegerTwo.ToString()).Substring(i, 1));
                    int Sum = (Top + Bottom);

                    if ((Sum >= 10) && (i != 0))
                    {
                        Sum -= 10;
                        Remainder = 1;
                    }
                    else
                    {
                        Remainder = 0;
                    }
                    SumString = Sum.ToString() + SumString;
                }
            }
            else
            {
                if (CharDifference < 0)
                {
                    string Pref = BigIntegerTwo.ToString().Substring(0, CharDifference * -1);
                    string Suff = BigIntegerTwo.ToString().Substring((CharDifference * -1));

                    for (int i = Suff.Length - 1; i >= 0; i--)
                    {
                        int Top = int.Parse(BigValue.Substring(i, 1)) + Remainder;
                        int Bottom = int.Parse(Suff.Substring(i, 1));
                        int Sum = (Top + Bottom);

                        if ((Sum >= 10))
                        {
                            Sum -= 10;
                            Remainder = 1;
                        }
                        else
                        {
                            Remainder = 0;
                        }
                        SumString = Sum.ToString() + SumString;
                    }

                    for (int i = Pref.Length - 1; i >= 0; i--)
                    {
                        int Top = int.Parse(Pref.Substring(i, 1)) + Remainder;
                        if ((Top >= 10) && (i != 0))
                        {
                            Top -= 10;
                            Remainder = 1;
                        }
                        else
                        {
                            Remainder = 0;
                        }
                        SumString = Top.ToString() + SumString;
                    }
                }
                else
                {
                    string Pref = BigValue.Substring(0, CharDifference);
                    string Suff = BigValue.Substring((CharDifference));

                    for (int i = Suff.Length - 1; i >= 0; i--)
                    {
                        int Top = int.Parse(Suff.Substring(i, 1)) + Remainder;
                        int Bottom = int.Parse((BigIntegerTwo.ToString()).Substring(i, 1));
                        int Sum = (Top + Bottom);

                        if ((Sum >= 10))
                        {
                            Sum -= 10;
                            Remainder = 1;
                        }
                        else
                        {
                            Remainder = 0;
                        }
                        SumString = Sum.ToString() + SumString;
                    }

                    for (int i = Pref.Length - 1; i >= 0; i--)
                    {
                        int Top = int.Parse(Pref.Substring(i, 1)) + Remainder;
                        if ((Top >= 10) && (i != 0))
                        {
                            Top -= 10;
                            Remainder = 1;
                        }
                        else
                        {
                            Remainder = 0;
                        }
                        SumString = Top.ToString() + SumString;
                    }
                }

            }

            return new BigInt(SumString);
        }

        //Multiplication with Integer
        public BigInt Multiply(int Limit)
        {
            BigInt ProductInt = new BigInt("0");
            int Count = 0;
            while (Count < Limit)
            {
                ProductInt = ProductInt.Add(this);
                Count++;
            }
            return ProductInt;
        }

        //Multiplication with BigInteger as argument instead
        public BigInt BigMultiply(BigInt Limit)
        {
            BigInt Product = new BigInt("0");
            BigInt Count = new BigInt("0");
            BigInt Increment = new BigInt("1");
            while (Count.LessThan(Limit))
            {
                Product = Product.Add(this);
                Count = Count.Add(Increment);
            }
            return Product;
        }
    } 

}
