import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "nio.larryzheng.cn",
  user: "nio",
  password: "965082888",
  database: "nio",
  connectionLimit: 20,
  waitForConnections: false
})

export default pool;
