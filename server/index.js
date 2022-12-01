const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "pizzaria",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO usuarios (email, password) VALUE (?,?)",
          [email, hash],
          (error, response) => {
            if (err) {
              res.send(err);
            }
            
            res.send({ msg: "Usuário cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({ msg: "Usuário logado" });
          
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Usuário não registrado!" });
    }
  });
});

app.post("/catalog", (req, res) => {
  const massa = req.body.massa;
  const borda = req.body.password;
  const sabor1 = req.body.sabores;
  const sabor2 = req.body.sabor2;
  const sabor3 = req.body.sabor3;

    
        db.query("INSERT INTO pedidos (statusPizza, sabor1, sabor2, sabor3, massa, borda ) VALUE (?,?,?,?,?,?)",['Em produção',sabor1,sabor2,sabor3,massa,borda], (error, response) => {
            if (err) {
              res.send(err);
            }
            
            res.send({ msg: "Pedido realizado com sucesso" });
          }
        );
      });
    
app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
