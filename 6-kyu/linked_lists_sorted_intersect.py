'''
6 kyu

Linked Lists - Sorted Intersect

Write a SortedIntersect() function which creates and returns a list representing the intersection of two lists that are sorted in increasing order. Ideally, each list should only be traversed once. The resulting list should not contain duplicates.

var first = 1 -> 2 -> 2 -> 3 -> 3 -> 6 -> null
var second = 1 -> 3 -> 4 -> 5 -> -> 6 -> null
sortedIntersect(first, second) === 1 -> 3 -> 6 -> null
'''


class Node(object):
    def __init__(self, data=None):
        self.data = data
        self.next = None
    
def sorted_intersect(first, second):
    # Your code goes here.
    current1 = first
    current2 = second
    
    firstSet = set()
    secondSet = set()
    
    while (current1):
        firstSet.add(current1.data)
        current1 = current1.next
    
    while (current2):
        secondSet.add(current2.data)
        current2 = current2.next
    
    commonData = list(firstSet.intersection(secondSet))
    
    if len(commonData) == 0:
        return None;
    
    dummyNode = Node(0);
    current = dummyNode;
    
    for elem in sorted(commonData):
        current.next = Node(elem)
        current = current.next;
    
    return dummyNode.next