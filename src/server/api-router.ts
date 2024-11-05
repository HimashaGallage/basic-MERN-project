import express, { Router } from 'express';
import testData from '../testData.json';

const router = express.Router();
router.get("/contests", (req, res)=> {
    //get data from mongo db
    res.send({contests: testData});
}
);


export default router;