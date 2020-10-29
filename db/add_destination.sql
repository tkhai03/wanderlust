INSERT INTO destinations
(id, destination_name)
VALUES ($1, $2)
returning *;