
const express = require("express");
const app = express();


app.use(express.json());

app.get("/products" , (req, res)=> {
    console.log(req.headers)
  res.send("This is a response!");
})

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server running! On PORT: ${PORT}`);
});