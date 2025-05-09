SELECT name, weight, price, CAST(ROUND(CAST((CAST(price AS FLOAT) / CAST(weight AS FLOAT)) * 1000 AS NUMERIC), 2) AS DOUBLE PRECISION) AS price_per_kg
FROM Products
ORDER BY price_per_kg, name;