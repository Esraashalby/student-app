const fs=require('fs')
///////////add new student///////////////
const addstudent=(id,name,age,grades)=>{
    const data=loadstudents()
    const duplicatstudents=data.find((idstudent)=>{
        return idstudent.id===id
    })
    if(!duplicatstudents){
        data.push({
            id:id,
            name:name,
            age:age,
            grades:grades
        })
        savedata(data)
    }
    else{
        console.log("this id is already exist")
    }      
}
///////////////////load////////
////////load/////////////
const loadstudents=()=>{
    try{
        const studentdata=fs.readFileSync('student.json').toString()
        return JSON.parse(studentdata)
    }
    catch(e){
        return []
    }
}


//////////save///////////
const savedata=(data)=>{
    const datajson=JSON.stringify(data)
    fs.writeFileSync('student.json',datajson)  
}
///////////////////delete/////////////////////////
const deletestudent=(idtodelete)=>{
    const data=loadstudents()
    const keepstudents=data.filter((idstudent)=>{
        return idstudent.id!==idtodelete
    })
    savedata(keepstudents)
    if(keepstudents.length==data.length){
        console.log("this id isn't found")
    }
    else{
        console.log("deleted")

    }
}
///////////////total grades////////////////
const totalgrades=(idtotal)=>{
    const alldata=loadstudents()
    const student = alldata.find((idstudent)=>{
        return idstudent.id===idtotal
    })
    var total=0
    if(!student){
        console.log("this id isn't found")
    }
    else{
        student.grades.forEach(element => {
            total=total+element
           console.log(element)
         });
         console.log("total is "+total)
    }
  
}

module.exports={
    addstudent,
    loadstudents,
    deletestudent,
    totalgrades
}