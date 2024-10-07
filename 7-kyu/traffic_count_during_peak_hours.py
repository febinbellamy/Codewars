"""
7 kyu

You work for a company that analyzes traffic count at a particular intersection during the peak hours of 4:00 PM to 8:00 PM. Each day, you are given a list that contains the number of vehicles that pass through the intersection every 10 minutes from 4:00 to 8:00 PM.

You are expected to return a list of tuples that each contain the hour and the maximum amount of traffic for each hour.

For example:
a1 = [23,24,34,45,43,23,57,34,65,12,19,45, 54,65,54,43,89,48,42,55,22,69,23,93]
traffic_count(a1) ==> [('4:00pm', 45), ('5:00pm', 65), ('6:00pm', 89), ('7:00pm', 93)]

All values in the given list are integers.
"""

def traffic_count(array):
    result = []
    index = 0
    time = 4;
    while index < len(array):
        max_value = max(array[index: index + 6 : 1])
        result.append((f"{time}:00pm", max_value))
        time += 1;
        index += 6
    
    return result
