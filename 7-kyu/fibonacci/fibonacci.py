def fibonacci(n: int) -> int:
    sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    if n == 0:
        return 0;
    elif n <= 10:
        return sequence[n]
    
    count = 10
    for i in range(count, n):
        sequence.append(sequence[i] + sequence[-2])
        if i + 1 == n:
            return sequence[-1]