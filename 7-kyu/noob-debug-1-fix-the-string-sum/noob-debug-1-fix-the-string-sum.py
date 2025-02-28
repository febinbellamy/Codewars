def add(s1, s2):
    s1 = [ord(c) for c in s1]
    s2 = [ord(c) for c in s2]
    return sum(s1) + sum(s2)