def identify_weapon(character):
    dict = {"Laval": "Laval-Shado Valious", "Cragger": "Cragger-Vengdualize", "Lagravis": "Lagravis-Blazeprowlor", "Crominus": "Crominus-Grandorius", "Tormak": "Tormak-Tygafyre", "LiElla": "LiElla-Roarburn"}
    
    if character in dict:
        return dict[character]
    
    return "Not a character"
    