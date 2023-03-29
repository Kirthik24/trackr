import express from "express";
import { addstep, createorder, getorderid, getsteps,getorders, changestatus } from "../controllers/order.js";

const router = express.Router();

router.get("/getorderid/:owner_id/:customer_id", getorderid);
router.get("/getsteps/:order_id",getsteps);
router.get("/getorders/:owner_id", getorders);

router.post("/createorder", createorder);
router.post("/addstep", addstep);

router.put("/:step_id", changestatus);

export default router;