using System;
using Person;
//using static System.Console;
using MyLibrary;

namespace Basics
{
    class Program
    {
        static void Main(string[] args)
        {
            /*WriteStatement();
            Female female = new Female();
            female.Name = Console.ReadLine();
            string haha = "99";
            int haha2;
            if (int.TryParse(haha, out haha2))
                Console.WriteLine($"Her {nameof(female.Name)} is {female.Name} and age is {haha2}");
            else
                Console.WriteLine("Error in parsing");

            try
            {
                int pg = int.Parse("assasin");
            }
            catch(Exception ex)
            {
                Console.WriteLine($"{ex.GetType()} says {ex.Message}");
            }
            finally
            {
                //deallocates if any resources were allocated in try block
            }

            //using (//automatically clears resource, here goes the statement)
            //{

            //}
            */

            Example ex = new Example { FirstName = "Sri", LastName = "Swain" };
            Console.WriteLine($"Value of {nameof(ex.FirstName)} is {ex.FirstName}");
;        }

        private static void WriteStatement()
        {
            var FirstName = "sri";
            Console.WriteLine("name is " + FirstName);

            checked
            {
                int x = int.MaxValue;
                Console.WriteLine(x--);
                //Console.WriteLine(x + 2);
            }

            Car car = new Car(2021);
            car.CarName = "buggati";
            car.Cars.Add(new Car(55) { CarName="harley"});
            Console.WriteLine("My car " + car.CarName + " and childeren: " +car.Cars.Count);
        }

        class Example : IHuman
        {
            public string FirstName { get; set; }
            public string LastName { get; set; }
        }

        interface IHuman
        {
            string FirstName { get; set; }
            string LastName { get; set; }

            //can have prototypes but no definition of functions
        }
    }
}

namespace Person
{
    public class Female
    {
        public string Name { get; set; }
    }
}
