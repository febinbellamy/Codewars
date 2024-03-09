'''
7 kyu

Given a dictionary of items and their costs and an array specifying the items bought, calculate the total cost of the items plus a given tax.

If item doesn't exist in the given cost values, the item is ignored.

Output should be rounded to two decimal places.

Python:
costs = {'socks':5, 'shoes':60, 'sweater':30}
get_total(costs, ['socks', 'shoes'], 0.09)
#-> 5+60 = 65
#-> 65 + 0.09 of 65 = 70.85
#-> Output: 70.85
'''

def get_total(costs, items, tax):
    total = 0
    for item in items:
        if item in costs:
            total += costs[item]
    
    return round(total + (total * tax), 2)