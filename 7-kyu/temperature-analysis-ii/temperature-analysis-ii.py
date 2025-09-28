def close_to_zero(t):
    if (t == ""):
        return 0
    
    temperature_list = t.split(" ")
​
    value_closest_to_zero = abs(int(temperature_list[0])) # always positive
    temperature_closest_to_zero = int(temperature_list[0]) # positive or negative
    
    for temperature in temperature_list:
        temperature = int(temperature)
​
        if abs(temperature) <= value_closest_to_zero:
            temp = value_closest_to_zero
            value_closest_to_zero = abs(temperature)
            
            if value_closest_to_zero == temp and temperature <= temperature_closest_to_zero:
                continue
                
            temperature_closest_to_zero = temperature
    
    return temperature_closest_to_zero