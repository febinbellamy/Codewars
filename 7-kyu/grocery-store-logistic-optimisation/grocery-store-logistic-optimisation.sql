SELECT producer, COUNT(*) AS count_products_types
FROM products
GROUP BY producer
ORDER BY count_products_types DESC, producer ASC;