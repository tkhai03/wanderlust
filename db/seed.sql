CREATE TABLE destinations(
    id serial primary key,
    destination_name varchar(30)
)

CREATE TABLE notes(
    note_id serial primary key,
    content text,
    destination_id int references destinations(id)
)

CREATE TABLE pins(
    pin_id serial primary key,
    destination_id int references destinations(id),
    lat varchar(40),
    lng varchar(40)
)