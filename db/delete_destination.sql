DELETE FROM destinations
WHERE id = $1;

DELETE FROM notes
WHERE id = $1;

DELETE FROM pins
WHERE id = $1;
