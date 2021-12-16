import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "nepp-insta.co4gfm17ihoe.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "12341234",
  database: "insta",
  dialectOption: {
    options: {
      requestTimeout: 9000,
    },
  },
});

export default connection;
