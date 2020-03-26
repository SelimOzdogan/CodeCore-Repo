\connect sql_lab;

insert into students
(first_name, last_name, Age, email, registration_date, phone_number)
VALUES
('Selim', 'Ozdogan', 41, 'selimozdogan@hotmail.com',date'2020-03-20','613.265.7339');

select id, first_name, last_name 
from students order by id desc limit 1;