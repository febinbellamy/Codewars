SELECT country, COUNT(*) AS products
FROM products
WHERE country IN ('United States of America', 'Canada')
GROUP BY country
ORDER BY COUNT(*) DESC;