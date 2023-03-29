import { db } from "../db.js";  

export const createorder = (req, res) => {
  const q = "INSERT INTO orders(`owner_id`,`customer_id`) VALUES (?)";
  const values = [req.body.owner_id, req.body.customer_id];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Order has been created.");
  });  
};

export const addstep = (req, res) => {
  const q = "INSERT INTO order_steps(`order_id`,`step`,`status`) VALUES (?)";
  const values = [req.body.order_id, req.body.step, req.body.status];
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Order has been created.");
  });   
}

export const getorderid = (req, res) => {
  const q = "SELECT order_id FROM orders WHERE `owner_id` = ?  AND `customer_id` = ?"
  db.query(q, [req.params.owner_id,req.params.customer_id], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

export const getsteps = (req, res) => {
  const q = "SELECT * from order_steps WHERE `order_id` = ?"
  db.query(q, [req.params.order_id], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

export const getorders = (req, res) => {
  const q = "SELECT * from orders WHERE `owner_id` = ?"
  db.query(q, [req.params.owner_id], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};

export const changestatus = (req, res) => {
    const step_id = req.params.step_id;
    const q = "UPDATE order_steps SET `status`= true WHERE `order_steps_id` = ?";
    const values = [req.body.order_steps_id];
    db.query(q, values , (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Status has been updated.");
    });
}



