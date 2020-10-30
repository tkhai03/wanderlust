INSERT INTO destinations
(destination_name)
VALUES ($1)
returning *;