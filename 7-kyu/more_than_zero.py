'''
7 kyu

Correct this code so that it takes one argument, x, and returns "x is more than zero" if x is positive (and nonzero), and otherwise, returns "x is equal to or less than zero." 

In both cases, replace x with the actual value of x.
'''

def corrections(x):
    if x > 0:
        return str(int(x)) + " is more than zero."
    else:
        return str(int(x)) + " is equal to or less than zero."
