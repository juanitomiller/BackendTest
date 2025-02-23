-- Active: 1729867259697@@127.0.0.1@5432@cerveceria@public
CREATE DATABASE cerveceria;

CREATE Table users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    direccion VARCHAR(250) NOT NULL,
    telefono VARCHAR(250) NOT NULL,
    rol VARCHAR(250) NOT NULL
);

DROP Table users;

SELECT * FROM users;

CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    original_price DECIMAL(10,2) NOT NULL,
    button_text VARCHAR(50) NOT NULL,
    sale BOOLEAN NOT NULL,
    rating INT NOT NULL,
    description TEXT,
    stock INT NOT NULL DEFAULT 1
);

INSERT INTO productos (name, image, price, original_price, button_text, sale, rating, description, stock) VALUES
('Coors Botellon 330cc', 'https://labarraodoo.cloudccu.cl/web/image?model=product.product&id=2509&field=image_1024', 4900, 12990, 'Añadir', TRUE, 5, 'Diseñado pensando en la comodidad y funcionalidad, este producto combina elegancia y practicidad.', 20),
('Austral Calafate Patagonia', 'https://labarraodoo.cloudccu.cl/web/image?model=product.product&id=13362&field=image_1024', 9990, 13990, 'Añadir', FALSE, 5, NULL, 15),
('Heineken 350cc', 'https://labarraodoo.cloudccu.cl/web/image?model=product.product&id=2511&field=image_1024', 12990, 17990, 'Añadir', TRUE, 5, 'Diseñado pensando en la comodidad y funcionalidad, este producto combina elegancia y practicidad.', 25),
('Cerveza original SOL', 'https://labarraodoo.cloudccu.cl/web/image?model=product.product&id=2525&field=image_1024', 12990, 15990, 'Añadir', FALSE, 5, 'Diseñado pensando en la comodidad y funcionalidad, este producto combina elegancia y practicidad.', 30),
('Royal Guard American Pale Ale', 'https://labarraodoo.cloudccu.cl/web/image?model=product.product&id=13794&field=image_1024', 13990, 18990, 'Añadir', TRUE, 5, 'Diseñado pensando en la comodidad y funcionalidad, este producto combina elegancia y practicidad.', 18),
('Heineken Silver Lager', 'https://labarraodoo.cloudccu.cl/web/image?model=product.product&id=11610&field=image_1024', 11990, 17990, 'Añadir', TRUE, 5, 'Diseñado pensando en la comodidad y funcionalidad, este producto combina elegancia y practicidad.', 22),
('Coors Original', 'https://labarraodoo.cloudccu.cl/web/image?model=product.product&id=4464&field=image_1024', 9990, 12990, 'Añadir', TRUE, 5, 'Diseñado pensando en la comodidad y funcionalidad, este producto combina elegancia y practicidad.', 27),
('Patagonia 470cc Variedades', 'https://labarraodoo.cloudccu.cl/web/image?model=product.product&id=16472&field=image_1024', 17990, 19990, 'Añadir', TRUE, 5, 'Diseñado pensando en la comodidad y funcionalidad, este producto combina elegancia y practicidad.', 12),
('6x Vaso Schopero La Barra 570cc', 'https://labarraodoo.cloudccu.cl/web/image?model=product.product&id=11803&field=image_1024', 17990, 19990, 'Añadir', TRUE, 5, 'Diseñado pensando en la comodidad y funcionalidad, este producto combina elegancia y practicidad.', 35),
('6x Copa Cocktail La Barra 410cc', 'https://labarraodoo.cloudccu.cl/web/image?model=product.product&id=11806&field=image_1024', 17990, 19990, 'Añadir', TRUE, 5, 'Diseñado pensando en la comodidad y funcionalidad, este producto combina elegancia y practicidad.', 40),
('6x Copa Ramazzotti 490cc', 'https://labarraodoo.cloudccu.cl/web/image?model=product.product&id=2586&field=image_1024', 17990, 19990, 'Añadir', TRUE, 5, 'Diseñado pensando en la comodidad y funcionalidad, este producto combina elegancia y practicidad.', 28),
('6x Copa Ramazzotti Violetto 550cc', 'https://labarraodoo.cloudccu.cl/web/image?model=product.product&id=12104&field=image_1024', 17990, 19990, 'Añadir', TRUE, 5, 'Diseñado pensando en la comodidad y funcionalidad, este producto combina elegancia y practicidad.', 32);


DROP Table productos;

SELECT * FROM productos;

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    id_user INTEGER NOT NULL,
    fecha DATE NOT NULL,
    estado VARCHAR(50) NOT NULL,
    total VARCHAR(50) NOT NULL
);

CREATE TABLE detalle_pedidos (
    id SERIAL PRIMARY KEY,
    id_pedido INTEGER NOT NULL,
    id_producto INTEGER NOT NULL,
    cantidad INTEGER NOT NULL,
    precio_unitario VARCHAR(50) NOT NULL,
    total VARCHAR(50) NOT NULL
);

CREATE TABLE newsletter (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL
);