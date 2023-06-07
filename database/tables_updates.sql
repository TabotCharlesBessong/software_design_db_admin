CREATE TABLE crops(
	planting_date DATE NOT NULL,
	location VARCHAR(255),
	soil_type VARCHAR(255),
	crop_id INT NOT NULL PRIMARY KEY
);

CREATE TABLE users (
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  id INT NOT NULL PRIMARY KEY
);


-- ALTER TABLE users RENAME id TO user_id;

select * from users;

CREATE TABLE diseases(
	name VARCHAR(255) NOT NULL,
	symptoms VARCHAR(255),
	causes VARCHAR(255),
	treatment VARCHAR(255),
	disease_id INT NOT NULL PRIMARY KEY,
	crop_id INT,
	foreign key (crop_id) references crops(crop_id)
);

CREATE TABLE treatments (
  type VARCHAR(255) NOT NULL,
  dosage INT NOT NULL,
  frequency INT NOT NULL,
  treatment_id INT NOT NULL PRIMARY KEY,
  disease_id INT,
  foreign key (disease_id) references diseases(disease_id)
);
