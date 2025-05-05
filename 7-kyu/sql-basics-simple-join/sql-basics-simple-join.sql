SELECT products.id, products.name, products.isbn, products.company_id, products.price, companies.name AS company_name
FROM products
FULL OUTER JOIN companies
ON companies.id = products.company_id