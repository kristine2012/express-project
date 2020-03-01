const express = require('express');
const app = express();//top-level function of express

const path = require('path');//*
const apiData = require('./')
const port = 3000;

app.use((req,res,next)=>{
  console.log(`${req.method} request for ${req.url} `);
  next();
})


//used to set default message before routing
// app.get('/', (req, res) => res.send('good morning queen'));

app.use(express.static('public'));//all files from public folder must be included - static means we are not going to change them .
app.use('/boostrap',express.static(path.join(__dirname,'node_modules/bootstrap/dist')));
app.use('/jquery',express.static(path.join(__dirname,'node_modules/jquery/dist')));
app.use('/popper',express.static(path.join(__dirname,'node_modules/@popperjs/core/dist/umd')));
app.use('/js',express.static(path.join(__dirname,'pubic/js')));
// set the route for index.html
app.get('/',(req,res,)=>{
  res.sendFile(path.join(__dirname+'/public/index.html'));//sending file to the browser , joins the set of paremeters you give
})
// set the route for about.html
app.get('/',(req,res,)=>{
    res.sendFile(path.join(__dirname+'/public/about.html'));
})// in order to use path make sure you set the path before hand look at *

app.get('/people',(req,res,)=>{
  res.json(apiData);
})

app.listen(port, () => console.log(`This app is listening on port ${port}!`))
