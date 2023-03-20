CREATE TABLE "msgs" (
  "id" SERIAL PRIMARY KEY,
  "text" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT (now())
);

CREATE TABLE "pokemons" (
  "id" SERIAL PRIMARY KEY,
  "pokemon" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT (now())
);

CREATE TABLE "stories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "message" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT (now())
);

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "email" VARCHAR(255) NOT NULL,
  "pswd" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT (now())
);


INSERT INTO msgs(text) VALUES
    ('Bonjour!'),
    ('Wilkommen!'),
    ('¿Hermoso día no crees?'),
    ('600 marcos de oro'),
    ('A Freda no le gusta el pollo');