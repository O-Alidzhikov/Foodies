import sql from "better-sqlite3"

const db = sql("meals.db")

export function getAll(){
    return db.prepare("SELECT * FROM meals").all()
}