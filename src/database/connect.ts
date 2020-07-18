import mysql, {Connection, MysqlError} from 'mysql';

/*

    Class to manage the Database Connection

*/
export class DBConnection {

    public myConnection: Connection;

    constructor() {
        this.myConnection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
    }

    connect() {
        this.myConnection.connect((err: MysqlError) => {
            if (err) {
                console.error("Error Connecting: " + err.stack);
                return;
            }
        
            console.log("Database Connected");
        });
    }

    disconnect() {
        this.myConnection.end(() => {
            console.log("Database Disconnected")
        })
    }
}
