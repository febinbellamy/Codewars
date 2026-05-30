def partition(arr, classifier_method):
    false = []
    true = []
    for item in arr:
        if classifier_method(item):
            true.append(item)
        else:
            false.append(item)
    
    return true, false