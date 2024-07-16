'''
7 kyu

Often times in schools, at the end of a semester or term, the teacher or professor will post the grades publically for everyone to see the day after the finals. Students can go to a public bulletin and check their grades to see how they did on an exam and where their ranking stands. This kata, Student Rankings will have you, the professor automate the list making for the many classes you're in charge of!

Input
Your function `post_grades` will receive a list of students denoted as *students*.
example_student_list = [
  'S01 - Student Name A - 95 98.4 92.15', 
  'S02 - Student Name B - 100 96.4 90', 
  'S03 - Student Name C - 84.2 90.5 92.8', 
  'S04 - Student Name D - 80 96.4 88.4'
]

Each student will have three things split by the - character:

– A student id i.e. S01
– A student name i.e. Student Name A
– A list of grades separated by spaces i.e. 95 98.4 92.15

To make it easy for the professor, each student will be represented as a single string.

Output
Write a function `post_grades(students)` that returns a sorted list of pairs containing the `student id` and the `average score`. So for the example list provided, the output would look like the following:
result = [('S02',95.47),('S01',95.18),('S03',89.17),('S04',88.27)]

Notes:
– For an empty list, return the empty list []
– The list should sort from highest average score to lowest average score i.e. 100 -> 0
'''
# （＊＾Ｕ＾）人（≧Ｖ≦＊）/ Good luck!
def post_grades(students):
    if len(students) == 0:
        return []
    
    result = []
    index = 0
    while index < len(students):
        current_str_list = students[index].split(" - ")
        current_student_grades = current_str_list[2].split(" ")
        if len(current_student_grades) == 1:
            result.append( ( current_str_list[0], float(current_student_grades[0]) ) ) 
        else:
            sum = 0
            i = 0
            while i < len(current_student_grades):
                sum += float(current_student_grades[i])
                i += 1
            average = sum / len(current_student_grades)
            result.append((current_str_list[0], average))
        
        index += 1;
    
    result.sort(key=lambda tup: tup[1], reverse=True)
    return result
