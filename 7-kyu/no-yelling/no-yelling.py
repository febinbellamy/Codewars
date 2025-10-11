def filter_words(st):
    lowercased_and_no_spaces = map(lambda x: x.lower(), filter(lambda x: x != "", st.split(" ")))
    return " ".join(lowercased_and_no_spaces).capitalize()