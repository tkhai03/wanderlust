SELECT *
FROM destinations d
JOIN notes n ON d.id = n.destination_id
WHERE d.id = $1