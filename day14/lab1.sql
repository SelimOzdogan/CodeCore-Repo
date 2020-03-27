--Find the average line_item total price (meaning quantity * price) for each order that were completed in January 2016 month.
select AVG(li.price * li.quantity), li.order_id
from line_items as li
join orders as o ON o.id = li.order_id
where o.completed_on between date('2016-1-1') and date('2016-1-31')
group by li.order_id

--Select product names, product prices and the lowest price they were sold at during the last 50 months
--Solution 1
select p.name, p.price, min(p.price)
from products as p
inner join line_items as l ON l.product_id = p.id
inner join orders as o ON l.id = o.id
where o.completed_on > (NOW() - INTERVAL '50' MONTH)
group by p.id
--Solution 2
select p.name, p.price, min(p.price)
from line_items as li
inner join products as p on li.product_id = p.id
inner join orders as o on o.id = li.order_id
where o.completed_on > current_date - interval '50 month'
group by p.id