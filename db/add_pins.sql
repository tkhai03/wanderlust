INSERT INTO pins
(pin_id, destination_id, lat, lng)
VALUES ($1, $2, $3, $4)
returning *