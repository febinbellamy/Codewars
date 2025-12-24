def is_valid_dni(s: str) -> bool:
    # write code here.
    if len(s) != 9 or s[:8].isdigit() == False or s[8].isalpha() == False:
        return False
    
    letter_mapping = {    
        0:"T",
        1:"R",
        2:"W",
        3:"A",
        4:"G",
        5:"M",
        6:"Y",
        7:"F",
        8:"P",
        9:"D",
        10:"X",
        11:"B",
        12:"N",
        13:"J",
        14:"Z",
        15:"S",
        16:"Q",
        17:"V",
        18:"H",
        19:"L",
        20:"C",
        21:"K",
        22:"E",
    }
    result_of_algo = int(s[:8]) % 23
    if letter_mapping[result_of_algo] == s[8]:
        return True
    return False