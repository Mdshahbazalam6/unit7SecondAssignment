const express=require('express');
const app=express();

const books={
    'book1':'God Without A Conscience',
'book2':'Parrot Of The Stockades',
"book3":'Phantoms Of Next Year',
"book4":'Horses Of The Land'
}
app.get("/", (req,res)=>{
 res.send("hello world");
});

app.get("/books", (req,res)=>{
    res.send(books);
   });
   

app.listen(8000, ()=>{
    console.log("port 8000")
})