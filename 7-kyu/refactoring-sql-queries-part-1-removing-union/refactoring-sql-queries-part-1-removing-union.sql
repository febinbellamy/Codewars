SELECT DISTINCT city_name 
FROM stations 
WHERE city_name LIKE ('A%') 
OR city_name LIKE('E%') 
OR city_name LIKE('I%') 
OR city_name LIKE('O%') 
OR city_name LIKE('U%')
ORDER BY city_name;