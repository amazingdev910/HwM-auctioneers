import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req,res)=>{
    
});
app.listen(port, ()=>{
    console.log('Listening at port http://localhost:'+port);
});