import express from "express";

const app = express();

app.use(express.json());

app.post("/users", (request, response) => {
  const users = [
    { name: "Lucas Militao", age: 25 },
    { name: "Lucas Militao", age: 25 },
  ];

  return response.json(users);
});

app.listen(3333);
