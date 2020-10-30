INSERT INTO notes
(content, destination_id)
VALUES ($1, $2)
returning *