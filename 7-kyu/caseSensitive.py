'''
7 kyu

Your task is very simple. Given an input string s, case_sensitive(s), check whether all letters are lowercase or not. Return True/False and a list of all the entries that are not lowercase in order of their appearance in s.

For example, case_sensitive('codewars') returns [True, []], but case_sensitive('codeWaRs') returns [False, ['W', 'R']].

Goodluck :)
'''

def case_sensitive(s):
    uppercase_letters = []
    all_lowercase_letters = True

    for char in s:
        if char != char.lower():
            all_lowercase_letters = False
            uppercase_letters.append(char)
    
    return [all_lowercase_letters, uppercase_letters]