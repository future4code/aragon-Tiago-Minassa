USE `aragon-tiago-minassa`;

SET SQL_SAFE_UPDATES = 0;

CREATE TABLE `Projetos` (
  `id` INT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NOT NULL UNIQUE);
  
