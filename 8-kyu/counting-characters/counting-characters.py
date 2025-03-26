def count_char_occurrences(strng, char):
    counter = 0
    for letter in strng:
        if letter == char:
            counter+=1
    return counter;