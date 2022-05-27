import { config } from 'dotenv';
config();

export const environment = {
  database: {
    type: 'mysql',
    host: process.env.AUTH_DB_HOST,
    port: parseInt(process.env.AUTH_MYSQL_PORT),
    username: process.env.AUTH_DB_USER,
    password: process.env.AUTH_DB_PASSWORD,
    database: process.env.AUTH_DB,
    synchronize: true,
  },
};
