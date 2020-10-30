INSERT INTO pins
(destination_id, lat, lng)
VALUES ($1, $2, $3)
returning *