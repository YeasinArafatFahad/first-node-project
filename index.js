const express =require('express');

const app = express();

const rootCall=(req,res)=>res.send('Thank You Very Much');

app.get('/',(req, res)=>{
    res.send("i know how to open Node ...Yay")
})
app.listen(4000, () => console.log('Listening to port 4000'))
