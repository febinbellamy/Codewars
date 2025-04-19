def caeser(message, key):
    alphabet="abcdefghijklmnopqrstuvwxyz"
    result=""
    for letter in message:
        if letter.lower() in alphabet:
            index_of_letter = alphabet.index(letter.lower())
            new_index = (index_of_letter + key) % 26
            result += alphabet[new_index].upper()
        else:
            result += letter
    return result