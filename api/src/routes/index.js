const { Router } = require('express');
const router = Router();
const { Feedback } = require('../db');


 router.post('/feedback', async (req, res) => {
    
     let {
        experience,
        payment_process,
        coustomer_service,
        comment,
        createdInDb
     } = req.body

     try {
      await Feedback.create({
         experience,
         payment_process,
         coustomer_service,
         comment,
         createdInDb
      }) 
      res.send('The feedback has been created successfully!')
    } catch (err) {
      console.log(err);
      next(err);
    }
 })


module.exports = router;


