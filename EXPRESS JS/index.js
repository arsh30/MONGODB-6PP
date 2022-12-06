const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: false }));

// Build routes to show -> Otherwise got error cannot get /

/*

Note -> Jb hm form submit krre h toh url me sare entries show hori pasword email etc, so we use Post methd in index.html in form tag
eg:   <form action="/api/vi/login" method="post">
means jab koi form pr login hoga toh iss address pr ajega

*/
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
  // path must be absolute or specify root to res.sendFile
  // agr yeh error aaye to use Path.join -> dirname + is file ka
  //  path [Note -> . nhi lgaege]
});

app.post("/", (req, res) => {
  res.send("<h1>DONE</h1>");
  console.log("name"); // jese form fill hoga toh yeh chl jaega
  // ACCESS DATA JO AAYA H FRONTEND SE
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server is working on port: ${PORT}`);
});

/*
GET -> Read krta hai
POST -> Create, Means Data frontend me type krege, or bhjege backend me
PUT -> Update somehing
DELETE -> Delete Something
*/
