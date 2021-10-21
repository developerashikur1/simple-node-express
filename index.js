const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res)=>{
    res.send('hello world, i am learning node no i am not hare bro')
});


const names = [
    {id:0,name: 'ashik', college:'degree', phone:'0144775775'},
    {id:1,name: 'sakib', college:'degree', phone:'0144775775'},
    {id:2,name: 'rashik', college:'degree', phone:'0144775775'},
    {id:3,name: 'bayzid', college:'degree', phone:'0144775775'},
    {id:4,name: 'merajul', college:'degree', phone:'0144775775'},
    {id:5,name: 'rayhan', college:'degree', phone:'0144775775'},
    {id:6,name: 'talha', college:'degree', phone:'0144775775'},
    {id:7,name: 'sohag', college:'degree', phone:'0144775775'}
]





app.get('/fruits/mango/fajli',(req,res)=>{
    res.send('yammy food mama')
})


app.get('/users',(req,res)=>{
    const search= req.query.search;
    if(search){
        const searchResult = names.filter(noun=>noun.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(names)
    }
});



// app.Method
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = names.length;
    names.push(newUser);
    console.log('post is hitted', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})





app.get('/users/:id',(req, res)=>{
    const id = req.params.id;
    const user = names[id];
    res.send(user)
});



app.listen(port, ()=>{
    console.log('Listening to port', port)
})