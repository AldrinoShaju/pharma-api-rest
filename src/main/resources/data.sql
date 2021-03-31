DROP TABLE IF EXISTS orders;

DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS product;

CREATE TABLE product (
  product_code INT(10) PRIMARY KEY,
  product_name VARCHAR(30) NOT NULL,
  min_quantity INT(10) NOT NULL,
  cost_per_item DOUBLE(20) DEFAULT NOT NULL
);


INSERT INTO product (product_code, product_name, min_quantity, cost_per_item) VALUES
  ('715347', 'ADCO-ABACAVIR 300MG TAB', '5','1105.44'),
  ('789771', ' AZOMID 250MG TAB', '2','168.80'),
  ('898538', ' ZIAGEN 100MG/5ML SYR', '2','415.55');


CREATE TABLE users (
    user_id INT(10) AUTO_INCREMENT  PRIMARY KEY,
    user_name VARCHAR(25) NOT NULL,
    email VARCHAR(25) NOT NULL,
    password VARCHAR(25) DEFAULT NULL,
    address VARCHAR(250) DEFAULT NOT NULL,
    phone VARCHAR(25) DEFAULT NOT NULL,
    distributor VARCHAR(25) DEFAULT NULL,
    authority VARCHAR(20)
);

INSERT INTO users (user_name, email, password, address, phone, distributor, authority) VALUES
  ('Russel', 'russel@williams.com', '12345','Address field','123456789','','ADMIN'),
  ('Lando', 'lando@mclaren.com', '12345','Address field','123456789','','DIST'),
  ('Charles', 'charles@ferrari.com', '12345','Address field','123456789','Lando','CUSTOMER');



CREATE TABLE orders (
    order_id INT(10) AUTO_INCREMENT  PRIMARY KEY,
    product_name VARCHAR(45) NOT NULL,
    min_quantity INT(25) NOT NULL,
    order_queue INT(45) DEFAULT NOT NULL,
    netcost INT(25) DEFAULT NOT NULL,
    amount DOUBLE(25) DEFAULT NOT NULL
);

INSERT INTO orders (product_name, min_quantity, order_queue, netcost, amount) VALUES
  ('ADCO-ABACAVIR 300MG TAB', '5','10','10','11054.4'),
  ('AZOMID 250MG TAB', '2','5','5','844'),
  ('AZOMID 250MG TAB', '2','3','3','506.4');