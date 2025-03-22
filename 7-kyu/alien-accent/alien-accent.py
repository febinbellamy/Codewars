def convert(st):
    # Code here
    result = ""
    letters = {"a": "o","o": "u"}
    for char in st:
        if char in letters:
            result += letters[char]
        else:
            result += char
    
    return result
        