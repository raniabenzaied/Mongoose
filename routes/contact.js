const express = require("express")

const contactRouter = express.Router()

const ContactSchema = require('../model/contact')

contactRouter.get('/' , async (req,res)=>{
    try{
        const Contacts = await ContactSchema.find()
        res.status(200).send({msg:'this is the user list',Contacts})
    }
    catch(err){
        console.log(err)
        res.status(500).send('you have no user to get')

    }
})

contactRouter.post('/adduser',async(req,res)=>{
try{
    const NewContact = await  new ContactSchema(req.body)
    NewContact.save()
    res.status(200).send({msg:'you did it , the contact is added',NewContact})
}
catch(err){
    console.log(err)
    res.status(500).send('could not add a user')

}
})
//
contactRouter.put('/:id',async (req,res)=>{
    try{
        const {id} = req.params
    
        const userUpdate =await  ContactSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send('the user is updated')
    }

    catch(err){
        res.status(500).send('you couldnt update it ')
    }





    
})
//
contactRouter.delete('/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const deleteUser = await ContactSchema.findByIdAndUpdate(id)
        res.status(200).send('yes you did it')
    }
    catch(err){
        res.status(500).send('could not delete')
    }
    
})
//get by id
contactRouter.get('/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const getUser = await ContactSchema.findById(id)
        res.status(200).send({msg:'this is the user you asked for' ,getUser })
    }
    catch(err){
        res.status(500).send('could not delete')
    }
    
    
})

module.exports = contactRouter