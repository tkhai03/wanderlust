UPDATE destinations
SET destination_name = $1
WHERE id = $2
returning *;
