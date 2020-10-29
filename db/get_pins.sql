SELECT *
FROM destinations d
JOIN pins p ON d.id = p.destination_id
WHERE d.id = $1