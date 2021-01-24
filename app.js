//mongodb://abhig:<password>@cluster0-shard-00-00.mmnmr.mongodb.net:27017,cluster0-shard-00-01.mmnmr.mongodb.net:27017,cluster0-shard-00-02.mmnmr.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-10cx6g-shard-0&authSource=admin&retryWrites=true&w=majority
//mongodb+srv://abhigupta:abhigupta108@cluster0.xrnh5.mongodb.net/test?retryWrites=true&w=majority'
const exp = require('express')
const mongoose = require('mongoose')
const app = exp()
const bodyparser = require('body-parser')
const contactroutes = require('./api/routes/contacts')
const ejs = require('ejs')
const layout = require('express-ejs-layouts')

app.use(bodyparser.json())
app.use((rq,rs,nx)=>{
  rs.header('Access-Control-Allow-Origin','*');
  rs.header('Access-Control-Allow-Headers','*');

  if(rq.method === 'OPTIONS'){
    rs.header('Access-Control-Allow-Methods','Get,Put,Post,Delete,Patch');
    return(rs.status(200).json({}) );

  }
  nx();
})
mongoose.connect('mongodb://abhig:abhigupta@cluster0-shard-00-00.mmnmr.mongodb.net:27017,cluster0-shard-00-01.mmnmr.mongodb.net:27017,cluster0-shard-00-02.mmnmr.mongodb.net:27017/mycdatabase?ssl=true&replicaSet=atlas-10cx6g-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },()=>{
    console.log('Connected ....')

})

app.use(layout)
app.set('views',__dirname + './views')
app.set('view-engine' , 'ejs')

app.use('/contacts' , contactroutes)

module.exports = app;
