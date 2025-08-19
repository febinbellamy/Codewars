def generator (_from, _to, _step):
    if _step <= 0:
        return []
    elif _from == _to:
        return [_from]
    
    result = []
    count = _from;
    while count != _to:
        result.append(count)
        if _from > _to:
            count -= _step;
        else:
            count += _step;
    
        if count < _to and count < _from: break
        if count > _to and count > _from: break
        
    if count == _to:
        result.append(count)
​
    return result
    