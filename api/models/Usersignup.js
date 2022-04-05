/**
 * Usersignup.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const validator = require("validator")
module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    email:{
      type:'string',
      required:true,
      unique:[true,'email is already used '], 
      isEmail:true,
      
      
     
    },
    password:{
      type:'string',
      required:true,
      unique:[true,'pasword is already used '],
      minLength:4
    },
    

  }
  
  
};
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs")
// const userSchema = new mongoose.Schema({
//   email:{
//     type:'string',
//     required:true,
//     unique:[true,'email is already used '],
    
   
//   },
//   password:{
//     type:'string',
//     required:true,
//     unique:[true,'pasword is already used '],
//     minLength:3
//   }


// })
// userSchema.pre("save",async function(next){

// })

// module.exports =userSchema ;