'''
7 kyu

A great flood has hit the land, and just as in Biblical times we need to get the animals to the ark in pairs. We are only interested in getting one pair of each animal, and not interested in any animals where there are less than 2....they need to mate to repopulate the planet after all!

You will be given a list of animals, which you need to check to see which animals there are at least two of, and then return a dictionary containing the name of the animal along with the fact that there are 2 of them to bring onto the ark.

>>> two_by_two(['goat', 'goat', 'rabbit', 'rabbit', 'rabbit', 'duck', 'horse', 'horse', 'swan'])
{'goat': 2, 'horse': 2, 'rabbit': 2}

# If the list of animals is empty, return False as there are no animals to bring onto the ark and we are all doomed!!!
>>> two_by_two([])
False

# If there are no pairs of animals, return an empty dictionary
>>> two_by_two(['goat'])
{}
'''

def two_by_two(animals):
    if len(animals) == 0:
        return False
    
    dict = {}
    for animal in animals:
        if animal in dict:
            dict[animal] += 1
        else:
            dict[animal] = 1
    
    result = {}
    for key in dict:
        if dict[key] >= 2:
            result[key] = 2
    
    return result
            
