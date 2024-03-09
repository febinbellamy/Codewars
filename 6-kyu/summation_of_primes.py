'''
6 kyu

The sum of the primes below or equal to 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below or equal to the number passed in.

From Project Euler's Problem #10.
'''

from math import sqrt

def summation_of_primes(primes):
    def is_prime(n):
        prime_flag = 0
        if(n > 1):
            for i in range(2, int(sqrt(n)) + 1):
                if (n % i == 0):
                    prime_flag = 1
                    break
            if (prime_flag == 0):
                return True
            else:
                return False
        else:
            return False
            
    sum = 0
    current_num = primes
    while current_num >= 2:
        if is_prime(current_num):
            sum += current_num
        current_num -= 1
        
    return sum