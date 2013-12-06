using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Metoder_11_3
{
    class Program
    {
        static int Addera(int tal1, int tal2)
        {
            int svar = tal1 + tal2;
            return svar;
        }
        static void Main(string[] args)
        {

            int prova = Addera(8, 9);
            Console.WriteLine(prova);

            


            Console.ReadKey();
        }
    }
}
