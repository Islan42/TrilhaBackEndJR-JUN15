const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./tarefas.sqlite');

db.exec(`
    DROP TABLE IF EXISTS user;
    DROP TABLE IF EXISTS tarefa;

    CREATE TABLE user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );

    CREATE TABLE tarefa (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        descricao TEXT,
        finalizada INTEGER NOT NULL
    );
    `, function(err) {
        if (!err) {
            console.log('Reconfiguração de DB completa.')
        } else {
            console.log(err)
        }
    }).close()