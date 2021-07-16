using System;
using System.Collections.Generic;

namespace MyLibrary
{
    public class Car
    {
        readonly int Year;
        public Car(int y)
        {
            Year = y;
        }

        public string CarName { get; set; }

        public List<Car> Cars = new List<Car>();
    }
}
