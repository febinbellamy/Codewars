'''
7 kyu

Complete the function so that it takes a collection of keys and a default value and returns a hash (Ruby) / dictionary (Python) / map (Scala) with all keys set to the default value.

Example
solution([:draft, :completed], 0) # should return {draft: 0, completed: 0}
'''

def populate_dict(keys, default):
    dict = {}
    index = 0
    
    while index < len(keys):
        currentKey = keys[index]
        dict[currentKey] = default
        index += 1
    
    return dict