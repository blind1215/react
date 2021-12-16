import conn from "../db/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY as secretKey } from "../config/index.js";

export const postUser = async (req, res) => {
  console.log(req.body);
  const { userName, password, name } = req.body;
  //중복된 아이디가 있는지 확인
  const query = `SELECT id FROM user WHERE user_name = '${userName}';`;
  const [rows] = await conn.query(query);
  console.log(rows);
  if (rows.length) {
    return res.send({
      success: false,
      message: "중복되는 아이디가 존재합니다.",
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPW = await bcrypt.hash(password, salt);

  const query2 = `
  insert into user(user_name, password, salt , name) 
  values('${userName}','${hashedPW}', '${salt}','${name}');
  `;
  await conn.query(query2);
  res.send({ success: true });
};

export const postUserLogin = async (req, res) => {
  const { userName, password } = req.body;

  //아이디있는지 확인
  const query1 = `select salt from user where user_name = '${userName}';`;
  const [users] = await conn.query(query1);
  if (users.length === 0) {
    //없으면 로그인 실패
    return res.send({
      success: false,
      message: "아이디가 존재하지 않습니다.",
    });
  }
  const { salt } = users[0];
  const hashedPW = await bcrypt.hash(password, salt);

  const query2 = `
  select id from user where user_name= '${userName}' and password='${hashedPW}'; 
  `;

  const [rows] = await conn.query(query2);
  const user = rows[0];
  if (!user) {
    return res.send({ success: false, message: "비밀번호가 틀렸습니다." });
  }

  //토큰생성
  const payload = { userId: user.id };
  const option = { expiresIn: "10s" };
  const token = jwt.sign(payload, secretKey, option);
  //성공하고 클라이언트에 토큰보내기
  res.send({ success: true, token });
};
