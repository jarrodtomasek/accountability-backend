import mysql, {Connection, MysqlError} from 'mysql';

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

    createUserTable() {
        var sql = `CREATE TABLE User (user_id INT AUTO_INCREMENT PRIMARY KEY,Pemail VARCHAR(75),Pfirst_name DATE,Plast_name DATE,Ppassword VARCHAR(255),Pcompleted_tasks INT DEFAULT 0,Pcreated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)  ENGINE=INNODB;`

        this.myConnection.query(sql, (err, result) => {
            if (err) throw err;
            console.log("User Table Created")
        })
    }

    createTaskTable() {
        var sql = `CREATE TABLE Task (user_id INT AUTO_INCREMENT PRIMARY KEY,email VARCHAR(75),start_date DATE,due_date DATE,status TINYINT NOT NULL,priority TINYINT NOT NULL,description TEXT,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)  ENGINE=INNODB;`

        this.myConnection.query(sql, (err, result) => {
            if (err) throw err;
            console.log("Task Table Created")
        })
    }

    createGroupTable() {
        var sql = `CREATE TABLE Group (group_id INT AUTO_INCREMENT PRIMARY KEY,group_name VARCHAR(150),number_of_members INT DEFAULT 0,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)  ENGINE=INNODB;`

        this.myConnection.query(sql, (err, result) => {
            if (err) throw err;
            console.log("Group Table Created")
        })
    }
}

`
CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(75),
    first_name DATE,
    last_name DATE,
    password VARCHAR(255),
    completed_tasks INT DEFAULT 0
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

CREATE TABLE Task (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(75),
    start_date DATE,
    due_date DATE,
    status TINYINT NOT NULL,
    priority TINYINT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

CREATE TABLE Group (
    group_id INT AUTO_INCREMENT PRIMARY KEY,
    group_name VARCHAR(150),
    number_of_members INT DEFAULT 0
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;
`