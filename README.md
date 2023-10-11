# Node-Mysql-JWT

Adcionado lógica do Login

--
MIGRATION
-- 
npx knex migrate:make migration_name
npx knex migrate:up  name_file.js

--
SEEDS
--
knex seed:make create_pessoas
knex seed:run name_file.js
