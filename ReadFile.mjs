import express from "express";
import { ObjectId } from "mongodb";
import { MongoClient } from "mongodb";

const router = express.Router();

const connectionString =
  "mongodb+srv://rsaDev:rsa995356@cluster0.8p6qwxh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(connectionString);
let conn1;
let conn2;
try {
  conn1 = await client.connect();
  conn2 = await client.connect();
} catch (e) {
  console.error(e);
}
let db = conn1.db("SmartSolution");
let collection1 = db.collection("Heunert");
router.get("/home", async (req, res) => {
  let homeresult = "";
  homeresult = await collection1
    .aggregate([
      {
        $project: {
          L1_activ: 1,
          L2_activ: 1,
          L3_activ: 1,
          L1_ist: 1,
          L2_ist: 1,
          L3_ist: 1,
          L1_soll: 1,
          L2_soll: 1,
          L3_soll: 1,
          L1_length: 1,
          L2_length: 1,
          L3_length: 1,
          L1_time: 1,
          L2_time: 1,
          L3_time: 1,
          saw_dm: 1,
          saw_manu: 1,
          saw_teeth: 1,
          saw_typ: 1,
          saw_width: 1,
          mat_dm: 1,
          mat_length: 1,
          mat_thick: 1,
          mat_typ: 1,
          mat_width: 1,
          headcut: 1,
          reststueck: 1,
          deburring: 1,
          rasagrip: 1,
          tube_light: 1,
          jobId: 1,
          busy: 1,
          busy_waiting: 1,
          standby: 1,
          error: 1,
          dateTime: 1,
          _id: 1,
        },
      },
      { $sort: { _id: -1 } },
      { $limit: 1 },
    ])
    .toArray();
  res.send(homeresult).status(200);
});

let collection2 = db.collection("History");
router.get("/history", async (req, res) => {
  const jobHistory = await collection2.find().toArray();
  res.send(jobHistory).status(200);
});
export default router;
