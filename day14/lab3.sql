-- Select all the products that have been purchased in the last 24 months.
select p.name, o.completed_on
from line_items as li 
join products as p ON p.id = li.product_id
join orders o ON o.id = li.order_id
where o.completed_on > current_date - interval '36 month';

-- Select the top 10 products in terms of last year's gross sales.
select p.name, sum(li.price) as grosssales
from line_items as li 
join products as p ON p.id = li.product_id
join orders o ON o.id = li.order_id
where o.completed_on between date('2017-01-01') and date('2017-12-31')
group by p.id
order by grosssales desc
limit 10;

-- Select all the products that weren't purchased during the last 24 months.
-- [Note] the price in the line_items table is price per unit and not total price.
select p.id
from products as p 
where p.id not IN(select li.product_id
					from line_items as li 
					join orders o ON o.id = li.order_id
					where o.completed_on between date('2017-01-01') and date('2017-12-31') and 
				  	li.product_id is not NULL );


