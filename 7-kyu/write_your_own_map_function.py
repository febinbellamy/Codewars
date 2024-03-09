'''
7 kyu

In this kata, you need to make your own map function. The way map works is that it accepts two arguments: the first one is a function, the second one is an array, a tuple, or a string. It goes through the array, applying the function to each element of an array and storing the result in a new array. The new array is the result of the map function. You may read more on the map function here.

You should return a list (python 2 style) instead of a generator (python 3).

Note: as Python already has a built-in map function, that is disabled.

Examples
map(sum, [[1, 2, 3], [4, 5], [6, 7, 8]])  ==>  [6, 9, 21]
map(str, [1, 2, 3])  ==>  ['1', '2', '3']
map(int, ['34', '23'])  ==>  [34, 23]
'''

def map(function, iterable):
    # Create your own map function here!
    final = []
    for i in iterable:
        final.append(function(i))
    
    return final
