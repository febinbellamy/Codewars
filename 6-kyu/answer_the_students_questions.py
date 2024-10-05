"""
6 kyu

Mr. Khalkhoul, an amazing teacher, likes to answer questions sent by his students via e-mail, but he often doesn't have the time to answer all of them. In this kata you will help him by making a program that finds some of the answers.

You are given a question which is a string containing the question and some information which is a list of strings representing potential answers.

Your task is to find among information the UNIQUE string that has the highest number of words in common with question. We shall consider words to be separated by a single space.

You can assume that:
- all strings given contain at least one word and have no leading or trailing spaces,
- words are composed with alphanumeric characters only

You must also consider the case in which you get no matching words (again, ignoring the case): in such a case return None/nil/null.

Mr. Khalkhoul is countin' on you :)
""" 

def answer(question, information):
    wordsDictionary = {}
    index = 0
    question_list = question.lower().split()
    
    while index < len(question_list):
        word = question_list[index]
        wordsDictionary[word] = 1
        index += 1
    
    idx = 0
    phrase_with_most_words_in_common = ""
    max_num_of_words_in_common = 0
    
    while idx < len(information):
        phrase = information[idx]
        words_list = phrase.split()
        i = 0
        count_words_in_common = 0
        while i < len(words_list):
            curr_word = words_list[i].lower()
            if curr_word in wordsDictionary:
                count_words_in_common += 1
            i += 1
        
        if count_words_in_common > max_num_of_words_in_common:
            max_num_of_words_in_common = count_words_in_common
            phrase_with_most_words_in_common = phrase
            
        idx += 1
    
    if max_num_of_words_in_common == 0:
        return None
    else:
        return phrase_with_most_words_in_common