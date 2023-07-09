
const Student = require('../models/Student.model')
module.exports.studentsController = {
  getStudents:(req,res)=>{
Student.find().then((data) => {
  res.json(data)
})
  },

  deleteStudents:(req,res) =>{
Student.findByIdAndRemove( req.params.id).then((data) => {
  res.json(data)
})
  },
  patchStudents:(req,res) =>{
Student.findByIdAndUpdate(req.params.id, {name: req.body.name})
.then((data)=>{
  res.json(data)
})
  },
    createStudent:(req, res) => {
      Student.create({
        name: req.body.name,
        phone: req.body.phone,
        age: req.body.age
      }).then((data) => {
        res.json(data)
      })
    },

}