--Структура базы данных

create TABLE person (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_password VARCHAR(30) NOT NULL,
    ip_address VARCHAR(16)
)

ALTER TABLE person ADD UNIQUE (user_name); --ALTER TABLE: ИМЯ УНИКАЛЬНО!

create TABLE sensor (
    id SERIAL PRIMARY KEY,
    sensor_name VARCHAR(255) NOT NULL,
    temperature FLOAT,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
)