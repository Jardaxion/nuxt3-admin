import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

class DBConnection{
    public database_host: string | undefined = process.env.DB_HOST;
    public database_name: string | undefined = process.env.DB_DATABASE;
    public database_username: string | undefined = process.env.DB_USERNAME;
    public database_password: string | undefined = process.env.DB_PASSWORD == undefined ? '' : process.env.DB_PASSWORD;

    public connect(): mysql2.Connection {
        return mysql2.createConnection({
            host: this.database_host,
            user: this.database_username,
            password: this.database_password,
            database: this.database_name
        });
    } 
}

const connect: DBConnection = new DBConnection();

export {DBConnection, connect};