const express = require('express');
const studentlistRoute = express.Router();
const { Addstudent, getlist, deletestudent, studentupdated, getonestudent } = require('../controllers/studentlist')



//method post
studentlistRoute.post("/Addstudent", Addstudent)


//method get
studentlistRoute.get('/list', getlist)


//method delete
studentlistRoute.delete('/:id', deletestudent)


//method update
studentlistRoute.put('/:id', studentupdated)


//method getone
studentlistRoute.get("/:id", getonestudent )
module.exports=studentlistRoute



