def repeat_sum(l):
    dict = {}
    sum = 0;
    
    for subArr in l:
        temp_dict = {}
        for num in subArr:
            if num not in temp_dict:
                temp_dict[num] = 1
        for key in temp_dict:
            if key in dict:
                dict[key] += 1
            else:
                dict[key] = 1
        
    for key in dict:
        if dict[key] > 1:
            sum += int(key)
    
    return sum