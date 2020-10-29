INSERT INTO notes
(note_id, content, destination_id)
VALUES ($1, $2)
returning *