import mysql, {Connection, MysqlError} from 'mysql';

/*

    Class to manage the Database Connection

*/
export class DBConnection {

    myConnection: Connection;

    constructor() {
        this.myConnection = mysql.createConnection("mysql://bd4dfbdb1ee11c:82ab9c56@us-cdbr-east-05.cleardb.net/heroku_c0fb01ad990e85c?reconnect=true");
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
