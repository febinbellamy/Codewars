import math
​
def distance(p1, p2):
    if len(p1) != len(p2) or len(p1) == 0:
        return -1
    
    total = 0
    index = 0
    while index < len(p1):
        difference = (p2[index] - p1[index]) ** 2
        total += difference
        index += 1
    return math.sqrt(total)