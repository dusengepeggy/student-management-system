const {students}=require("../db/s1db");
//Function which adds a new student

const add=(newStudent)=>{
    newStudent.id=students.length+1;
    students.push(newStudent);

    console.log("\nNew student added\n");
    console.log("\n Students in the system after adding\n ");
    console.log(students);

}
//function to display all students

const displayAll=()=>{
  console.log("\n All students \n");
  console.log(students);
 
};

// Updating an element

const update=(id,key,value)=>{
    var exists=students.find(ele=>ele.id===id);
    if (!exists) {
        console.log("student not found\n");
    }
    else{
       
        exists[key]=value;
        
        console.log("student info updated\n");
        console.log(exists);

    }
}

//updating many elements
const updateMany=(id,obj)=>{
     var exists=students.find(ele=>ele.id===id);
     if (!exists) {
        console.log("student not found\n");
        
     } else {
        for(key in obj){
            exists[key]=obj[key];  
        }
        console.log("student info updated\n");
        console.log(exists);
        
     }


};
const remove=(id)=>{
  var exists=students.find(ele=>ele.id===id);
  if (!exists) {
    console.log("student not found\n");

    
  } else {
    var remaining=[];
    remaining=students.filter(ele=>ele.id!==id);
    console.log(remaining);
    
  }  
}


module.exports={
   add,
   displayAll,
   update,
   updateMany,
   remove
}