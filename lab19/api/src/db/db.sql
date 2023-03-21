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
  "is_admin" BOOLEAN DEFAULT FALSE,
  "created_at" TIMESTAMP NOT NULL DEFAULT (now())
);

CREATE TABLE "roles" (
  "id" SERIAL PRIMARY KEY,
  "description" VARCHAR(255) NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT (now())
);

CREATE TABLE "privileges" (
  "id" SERIAL PRIMARY KEY,
  "action" VARCHAR(255) NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT (now())
);

CREATE TABLE "rolesPrivileges" (
  "id" SERIAL PRIMARY KEY,
  "roleId" SERIAL NOT NULL,
  "privilegeID" SERIAL NOT NULL
);

ALTER TABLE "rolesPrivileges"
ADD FOREIGN KEY ("roleId") REFERENCES roles("id"),
ADD FOREIGN KEY ("privilegeID") REFERENCES privileges("id");

ALTER TABLE "users"
ADD "is_admin" BOOLEAN DEFAULT FALSE;

UPDATE "users" SET "is_admin" = True WHERE id = '2';

INSERT INTO msgs(text) VALUES
    ('Bonjour!'),
    ('Wilkommen!'),
    ('¿Hermoso día no crees?'),
    ('600 marcos de oro'),
    ('A Freda no le gusta el pollo');

INSERT INTO roles(description) VALUES
    ('client'),
    ('admin');

INSERT INTO privileges(action) VALUES
    ('create-stories'),
    ('see-secret');

INSERT INTO "rolesPrivileges"("roleId", "privilegeID") VALUES
    ('1', '1'),
    ('2', '1'),
    ('2', '2');


SELECT privileges.action, roles.description
FROM (SELECT "roleId", "privilegeID" FROM "rolesPrivileges") rp, privileges, roles
WHERE privileges.id = rp."privilegeID"
AND rp."roleId" = roles.id;