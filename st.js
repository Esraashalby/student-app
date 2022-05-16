const index=require('./index')
const yargs= require('yargs')
yargs.command({
    command:'add',
    describe: 'add new student',
    handler:()=>{index.addstudent(yargs.argv.id,yargs.argv.name,yargs.argv.age,yargs.argv.grades)},
    builder:{
        id:{
            describe:'you must add id',
            type:'string',
            demandOption:true,
        },
        name:{
            describe:'you must add student name',
            type:'string',
            demandOption:true,
        },
        age:{
            describe:'you must add student age',
            type:'string',
            demandOption:true,
        },
        grades:{
            describe:'you must add student grades',
            type:'array',
            demandOption: true

        }
    }
})
yargs.command({
    command:'delete',
    describe:'you must write student ID',
    handler:()=>{
        index.deletestudent(yargs.argv.id)
    },
    builder:{
        id:{
            describe:'you must add id',
            type:'string',
            demandOption:true,
        }
    }
})
yargs.command({
    command:'total',
    describe:'total grades',
    handler:()=>{
        index.totalgrades(yargs.argv.id)
    },
    builder:{
        id:{
            describe:'enter student id:',
            typ:'string',
            demandOption:true,
        }
    }
})

yargs.parse()