const {add,displayAll,update, updateMany,remove}=require("../controller/studentController");

const newStudent1={
   name:'KARANGWA Ines',
   age:11,
   gender:'female',
   location:'Kacyiru'
};

add(newStudent1);
displayAll();
update(1,"location","Nyarutarama");

const tobeupd={
    
    age:13,
    location:'Kampala',

};
updateMany(5,tobeupd);
remove(2)
