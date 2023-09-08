const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const PORT = process.env.PORT3;
const {MongoClient,ObjectId}= require("mongodb");
app.get("/",(req,res)=>
{
    res.send("Express Server Created Successfully!");
});
app.listen(PORT,()=>
{
    console.log(`Server is running on ${PORT}`);
});

const Crud=[
       {
    "id" : "838",
    "first name" : "Nitish",
    "last name" : "Enamanamelluri",
    "email" : "nitishenamanamelluri@sazpin.com ",
    "mobile" : "9390577339",
    "address" : "Hyderabad ",
    "phone" : "010-987654 ",
    "phone2" : "020-987654 ",

       },
       {
        "id" : "839",
    "first name" : "vivek",
    "last name" : "kadaganchi",
    "email" : "vivekkafaganchi@sazpin.com ",
    "mobile" : "9390577388",
    "address" : "Hyderabad - 1 ",
    "phone" : "030-987654 ",
    "phone2" : "040-987654 ",
       },
       {
        "id" : "840",
    "first name" : "vineeth",
    "last name" : "parvatham",
    "email" : "vineethparvatham@sazpin.com ",
    "mobile" : "9390577377",
    "address" : "Hyderabad - 3 ",
    "phone" : "050-987654 ",
    "phone2" : "060-987654 ",
       },
       {
        "id" : "841",
    "first name" : "siva",
    "last name" : "krishana ",
    "email" : "sivakrishana@sazpin.com ",
    "mobile" : "9390577366",
    "address" : "Hyderabad -4 ",
    "phone" : "070-987654 ",
    "phone2" : "080-987654 ",
       },
       {
        "id" : "842",
    "first name" : "srinu",
    "last name" : "bro",
    "email" : "srinubro@sazpin.com ",
    "mobile" : "9390577355",
    "address" : "Hyderabad - 5 ",
    "phone" : "090-987654 ",
    "phone2" : "0100-987654 ",
       }
];
async function run()
{
    const url=process.env.MONGO_URL3;
    const client=new MongoClient(url);
    await client.connect();
    const dbName = "CRUD";
    const collectionName = "crud";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    console.log("MongoDB Connected");

                                        //  CREATE

    // try{
    //     const insertManyResult = await collection.insertMany(Crud);
    //     console.log(`${insertManyResult.insertedCount} document inserted\n`)
    // }
    // catch(err){
    //     console.log(`Wrong!!!${err}`)
    // }
    
                                             // find one query - READ
  //  const findoneQuery1 = { id: "841" };
  //  try {
  //      const findoneResult = await collection.findOne(findoneQuery1);
  //      if (findoneResult === null) {
  //        console.log("Couldn't find any 'id: 841'.\n");
  //      } else {
  //        console.log(`Found a crud with 'id: 841':\n${JSON.stringify(findoneResult)}\n`);
  //      }
  // app.get("/deleteddata",(req,res)=>{

  //   res.send(findoneResult);

  // });
  
  //api get end point to create the post

  app.delete("/:id", async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
  
    const collection = database.collection("crud");
    let result = await collection.deleteOne(query);
  
    res.send(result).status(200);
  });




    //   catch (err) {
    //    console.error(`Something went wrong trying to find one document: ${err}\n`);
    //  }


    //   app.post("/create", async (req, res) => {
    //   let collection =  database.collection("crud");
    //   let newDocument = req.body;
    //   // newDocument.date = new Date();
    //   let result = await collection.insertOne(newDocument);
    //   res.send(result).status(201);
    // });



    // app.patch("/country/:id", async (req, res) => {

    //   const query = { _id: new ObjectId(req.params.id)          

    //   };

    //   const updates = {

    //     $push: { country: req.body }

    //   };

    //   // let collection = await database.collection("recipes");

    //   let result = await collection.updateOne(query, updates);

   

    //   res.send(result).status(200);

    // });



    // app.get("/getCrud", async (req, res) => {

    //   // let collection = await database.collection("recipes");

    //   let results = await collection.find({})

    //     .toArray();

    //   res.send(results).status(200);

    // });



    app.put('/userdetails/:id', async (req, res) => {

      try {

        const updateddetails = await collection.updateOne({ _id: new ObjectId(req.params.id)}, { $set: req.body});

        res.status(200).send(updateddetails);}

        catch (err) {

        res.status(400).json({ message: err.message });

      }

    });




                                      // UPDATE

    //  const updateDoc = { $set: { id : "999"} };
    //  const updateOptions = { returnOriginal: false };
    //  try {
    //    const updateResult = await collection.findOneAndUpdate(
    //      findoneQuery1,
    //      updateDoc,
    //      updateOptions,
    //    );
    //    console.log(`Here is the updated document:\n${JSON.stringify(updateResult.id)}\n`);
    //  } catch (err) {
    //    console.error(`Something went wrong trying to update one document: ${err}\n`);
    //  }

//                             // DELETE
            
//      const deleteQuery = { id: { $in: ["842"] } };
// try {
//   const deleteResult = await collection.deleteMany(deleteQuery);
//   console.log(`Deleted ${deleteResult.deletedCount} documents\n`);
  
//   app.get("/deleteddata",(req,res)=>{

//     res.send(deleteQuery);

//   });
// } catch (err) {
//   console.error(`Something went wrong trying to delete documents: ${err}\n`);
// }




  // await client.close();
}
run().catch(console.dir());
