def types(x):
    data_type = type(x)
    if data_type == int:
        return "int"
    elif data_type == float:
        return "float"
    elif data_type == str:
        return "str"
    elif data_type == bool:
        return "bool"