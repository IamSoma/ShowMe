import express from 'express';
const router = express.Router();

import mongodb from 'mongodb';

router.get('/'(req,res)=>{
	res.send({data:[]});
});

export default router
