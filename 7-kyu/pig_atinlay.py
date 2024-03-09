'''
7 kyu

Make a function that converts a word to pig latin. The rules of pig latin are:

If the word has more than 3 letters:
  1. Take the first letter of a word and move it to the end
  2. Add -ay to the word

Otherwise leave the word alone.

Example: hello = ellohay
'''
def pig_latin(word):   
    if len(word) > 3:
        return word[1:] + word[0]+ "ay"
    else:
        return word