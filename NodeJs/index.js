/**
 
 console.log("Hello world");
 const a = 20;
 console.log(a/5); // op 4
 
 
 console.log("please subscribe to a 6 pack programmer");


 Note -> NodeJs me jo bhi cheez bnaege that all are MODULES
 Eg: const a = () => { this function is a MODULE
 }


 TYPE OF MODULES ->

 1) FILE BASED MODULES -> Import and Export krna modules ko

 const a = 400;
 console.log(a);
 // EVERY THING IS MODULE, FUNCTION,VARIABLE, ARRAY,OBJECT  ETC
 // So isko 2nd file me export krege
 
 const b = {
   average: (a, b) => {
     console.log((a + b) / 2);
   },
   percent: (a, b) => {
     console.log((a / b) * 100);
   },
 };
 
 module.exports = a; // A ko transfer kra
 module.exports = b; // b ko transfer kra

 const a = require("./index"); // Importing file
 const b = require("./index"); // Importing file

 
 2) Build In Modules -> Jo download Nahi krne padhte like fs, 

    2.1st -> FS MODULE

    2.1) 
    const fs = require("fs"); // fs - file system, read write kr    
    skte h file ko

    fs.readFile("./sample.txt", "utf-8", (err, data) => {
    // 1st param is file name,
    //2nd param is konsi lang me read krna ie utf 8 for text
    //3rd param is call back func
    if (err) {
        throw err;
    }
    console.log(data);
    });
    
    // I am first, ye pehle chla coz ye readFile Async chlta h
    console.log("I am first");

    2.2)
    const fs = require("fs"); 
    // Isme CB func nhi hota, so readFile cb me print krware the isme
    // bhi print krwaege, 
    // It will do syncronously
    let data = fs.readFileSync("./sample.txt", "utf-8");
    console.log(data);
    console.log("I am First");


    2.3) writeFile
    // 1st param is konsi file me write krna hai
    // 2nd parameter is kya likhna h
    // 3rd is CB FUnction
    const a = "HEY BABBY ARSH HERE";
    fs.writeFile("./sample.txt", a, (err, data) => {
    if (err) {
        throw err;
    }
    console.log("written");
    });

    2.4)
    const fs = require("fs");
    fs.writeFileSync("./sample.txt", "Glamour");
    console.log("I am first");


    2.2ND -> PATH MODULE
    const a = path.extname("/nodejs/index.js");
     // -> It give Extension name, and isme full path dalte h


     const a = path.basename("F:/A WEB DEVELOPMENT/NodeJs> node 
     index.js"); 
     // Basename -> Jo  root folder hai vo aajega


     const a = path.dirname("F:/A WEB DEVELOPMENTNodeJs>");
     // ye path dega kis folder hai hum, means NodeJs kis folder me h


    b = "/6pp";
    const a = path.join("F:/A WEB DEVELOPMENT/NodeJs" + b);


    3.rd -> OS Module
    const os = require("os");
    console.log(os.freemem()); // ye btaega kitni memroy bchi h

    console.log(os.hostname()) ; // ->TELL HMARE PC KONSA H
  
    console.log(os.totalmem());// ye btaega kitni memeory h pure pc   
    me


    4. 3RD PARTY MODULE -> Jo hum Install krte hai
    EG: express, socket.io, mongoose, react, sass, pokemon

    [NOTE -> Like bar bar node filename.js chalue krna pdhra hai to  
    omatically refresh hojega whenever any update is there]


    HOW TO MAKE SERVER ----> 
*/
const http = require("http");
const fs = require("fs");

const PORT = 2000;
const home = fs.readFileSync("./index.html", "utf-8");

console.log(__dirname);
// ye directory name dega jese path me aaya tha

const server = http.createServer((req, res, next) => {
  // req.url(); // isse pura url pta gjaega kya hai
  console.log(req.url); // -> JO ul me parameer hoga vo aajega

  if (req.url === "/") {
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end("<h1>ABOUT PAGE</h1>");
  }

  if (req.url === "/contact") {
    return res.end("<h1>CBOUT PAGE</h1>");
  } else {
    return res.end("<h1>PAGE NOT FOUND</h1>");
  }
});
server.listen(PORT, () => {
  console.log(`SERVER IS WORKING`);
});
