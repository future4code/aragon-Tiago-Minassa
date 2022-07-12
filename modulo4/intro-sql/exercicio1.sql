USE `aragon-tiago-minassa`;

SET SQL_SAFE_UPDATES = 0;

CREATE TABLE `Headcount` (
  id INT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  idade INT DEFAULT 18
  );
  