const PORT = 8000
const express = require('express')
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
// const { mongoose } = require("mongoose")
const { MongoClient } = require('mongodb')
const { v4: uuidv4 } = require("uuid")
app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
// require("dotenv").config();
const url = "mongodb://0.0.0.0:27017";

app.post("/signup", async (req, res) => {

    try {
        // console.log('Outside');
        const client = await new MongoClient(url).connect();
        //.catch(err => { console.log(err); });

        if (!client) {
            return;
        }

        try {

            const db = client.db("locofy_db");

            const users = db.collection('users');

            const { email, password } = req.body;
            const sanitizedEmail = email.toLowerCase();
            const existingUser = await users.findOne({ email: sanitizedEmail });
            console.log(existingUser);

            if (existingUser) {
                console.log('User already exists. Please log in')
                return
                //  res.status(409).send('User already exists. Please log in')
            }

            const salt = bcrypt.genSaltSync(10);
            const hashPassword = bcrypt.hashSync(password, salt);
            generatedUserId = uuidv4();

            const data = {
                user_id: generatedUserId, // new mongoose.Types.ObjectId(),
                //_id: generatedUserId,
                email: sanitizedEmail,
                hashed_password: hashPassword
            }

            const insertedUser = await users.insertOne(data);
            console.log('insertedUser', insertedUser);
            const token = jwt.sign(insertedUser, sanitizedEmail, {
                expiresIn: 60 * 24
            })
            console.log(token)

            // res.sendStatus(201).json({ token, userId: generatedUserId })
            res.status(201).json({ token, userId: generatedUserId })

        } catch (err) {

            console.log(err);
        } finally {

            await client.close();
        }
        // await client.connect();
        // console.log('Connected to MongoDB successfully!');
        // const database = client.db("locofy_db");
        // const users = database.collections("users");
        // console.log(users);

        //  const client = await MongoClient.connect(url, function(err,connect) {
        //     if(err){
        //       console.log("Error!")
        //     } else {
        //       console.log('Database connected.')               
        //       var db1=connect.db('locofy_db');
        //       const {email, password} = req.body;
        //       let query={'email': email};

        //         db1.collection('users').findOne(query,function(err,doc)
        //         {
        //             if(err) { console.log(err); throw err; }
        //             console.log(doc);
        //             db1.close();
        //         });
        //     }
        //   })

        //   ).then((db) => {

        //   })
        //   .catch((err) => {
        //     console.log('Failed...', err)
        //   });

        //      , function(err, db) {
        //         console.log('Inside');
        //         var db=mongoclient.db('locofy_db');
        //         const {email, password} = req.body;
        // var query={'email': email};

        //  db.collection('users').findOne(query,function(err,doc)
        //      {
        //          if(err) { console.log(err); throw err; }
        //          console.log(doc);
        //          db.close();
        //      });
        // if (!err) {
        //     console.log("Connected successfully!");
        //     // You can perform database operations here
        // } else {
        //     console.error("Error connecting to MongoDB:", err);
        // }
        //});     

    } catch (err) {
        console.error(err);
    } finally {
        //await client.close();
        //mongoclient.close();
    }

});
// const database = client.db("locofy_db");
// const users = database.collections("users");
// const sanitizedEmail = email.toLowerCase();
// const existingUser = await users.findOne({email: sanitizedEmail});

// if (existingUser) {
//     res.status(409).send('User already exists. Please log in')
// }





// await MongoClient.connect(url, (err, client) => {
//     if (err) {
//         return console.error(err);
//     }

//     // Specify the database you want to access (replace 'school' with your desired database name)
//     const db = client.db('locofy_db');
//     console.log(`MongoDB Connected: ${url}`);

//     // Now you can work with the database (e.g., create collections, insert data, etc.)
//     // For example:
//     const courses = db.collection('users');
//     // Insert data using the insertOne() method, if needed

//     // Don't forget to close the connection when done
//     client.close();
// });

// })


//sign up
// app.post("/signup", async (req, res)=> {

//     try { 
//         //const mongoclient = new MongoClient(uri);

// // server=require('mongodb').Server;

// // var mongoclient=new MongoClient(new server('localhost',27017));
// // mongoose.connect('mongodb://localhost:27017/locofy_db',{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
// //     console.log("MongoDB database connected")
// // }).catch((error)=>{
// //     console.log(error)
// // })

// const usersSchema = new mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     email: String,
//     hashed_password: String     
// });

// // const User = mongoose.model('users', usersSchema);
// // const generatedUserId = uuidv4();
// // console.log(generatedUserId)
// // let sanitizedEmail;
// // let insertedUser;
// mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
//     const {email, password} = req.body;
//     const users = mongoose.model('users', usersSchema);
//     sanitizedEmail = email.toLowerCase();
//     const query={ 'email': email };


//     const user = users.findOne(query).then(function (doc) {
//         if (doc === null ) {
//             const salt = bcrypt.genSaltSync(10);
//             const hashPassword = bcrypt.hashSync(password, salt);


//              const User = mongoose.model('users', usersSchema);

//             const newUser =  new User({
//                 _id: new mongoose.Types.ObjectId(),
//                 //_id: generatedUserId,
//                 email: sanitizedEmail,
//                 hashed_password: hashPassword
//             })


//             // const insertedUser = users.create(data, usersSchema)
//             newUser.save();
//             console.log(newUser._id._id)
//             // const token = jwt.sign(newUser._id, sanitizedEmail, {
//             //         expiresIn: 60 * 24
//             // })
//             // console.log(token)

//             // res.sendStatus(201).json({ token, userId: generatedUserId })
//         }
//     }); 
//         //console.log(doc)});          
//     //console.log(user);






//     //console.log("MongoDB database connected")
// }).catch((error)=>{
//     console.log(error)
// })

// // await mongoclient.connect('mongodb://127.0.0.1:27017/locofy_db',function(err,db)
// // {
// //     if(err) throw err;
// //     //var db=mongoclient.db('course');
// //     var query={'email': email};

// //     db.collection('users').findOne(query,function(err,doc)
// //         {
// //             if(err) { console.log(err); throw err; }
// //             console.log(doc);
// //             db.close();
// //         });
// // });


// //     const salt = bcrypt.genSaltSync(10);
// //     const hashPassword = bcrypt.hashSync(password, salt);
// //     const generatedUserId = uuid9;
// //     const client = new MongoClient(uri);
// //     try {

// //         //await client.connect();
// //         client.connect(uri, function(err, db) {
// //     if (!err) {
// //         console.log("Connected successfully!");
// //         // You can perform database operations here
// //     } else {
// //         console.error("Error connecting to MongoDB:", err);
// //     }
// // });
//         // const database = client.db("locofy_db");
//         // const users = database.collections("users");
//         // const sanitizedEmail = email.toLowerCase();
//         // const existingUser = await users.findOne({email: sanitizedEmail});

//         // if (existingUser) {
//         //     res.status(409).send('User already exists. Please log in')
//         // }




//     } catch(err) {
//         console.error(err);
//     } finally {
//         //await mongoclient.close();
//         //mongoclient.close();
//     }



// })

// sign-in
app.post('/login', async (req, res) => {
    const client = new MongoClient(url);
    const { email, password } = req.body;

    try {
        await client.connect();
        const database = client.db("locofy_db")
        const users = database.collection("users")

        const user = await users.findOne({ email });

        const correctPassword = await bcrypt.compare(password, user.hashed_password)

        if (user && correctPassword) {
            const token = jwt.sign(user, email, {
                expiresIn: 60 * 24
            })
            res.status(201).json({ token, userId: user.user_Id })
        }
        console.log('Invalid Credentials')

    } catch (err) {
        console.error(err)
    } finally {
        await client.close()
    }

})

app.listen(PORT, () => console.log('app is running on', PORT))

