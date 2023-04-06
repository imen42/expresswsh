const express = require('express')
const path = require('path')
const app = express();
// app.get ('/', (req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });
// app.use((req, res, next) => {
//     const date = new Date();
//     const day = date.getDay();
//     const hour = date.getHours();
//     if (day > 0 && day < 6 && hour >= 9 && hour < 17) {
//       next();
//     } else {
//       res.send("<h1>Not available at this time!</h1>");
//     }
//   });
  
  app.use(express.static(path.join(__dirname, "public")));
  
  var PORT = process.env.PORT || 3000;
  app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`Server is running on port ${PORT}`)
  );