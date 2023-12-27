import express from 'express';
import routes from './routes/index.js'
import cors from 'cors'

const app = express()
import {db} from './config/mongoose.js'

db();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.use('/', routes)


app.listen(8080, (err)=>{
    if(err){
        console.log("Error Starting The Server!");
        return;
    }
    console.log("Server is running at port 8080!")
})
