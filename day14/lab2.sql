--Calculate how many items in stock we've ever had for each product (remaining or sold) in the database.
SELECT p.name, SUM(p.remaining_quantity + l.quantity) as total_quantity
FROM line_items as l
join products as p ON l.product_id = p.id
group by p.id
order by total_quantity desc;

-- Find the average order total price for all the orders in the system
-- [Note] the price in the line_items table is price per unit and not total price.
SELECT AVG(average.total_price)
from
(SELECT SUM(l.price) as total_price
FROM line_items as l
inner join orders as o ON l.order_id = o.id
group by o.id) as average;


-- Stretch Find the average order total price for all the orders in the system with only one query. (without nested query)
SELECT SUM(l.price)
FROM line_items as l
inner join orders as o ON l.order_id = o.id
group by 
;





