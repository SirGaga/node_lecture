const mysql = require('mysql');
const uuid = require('uuid');

const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'test'
});

connection.connect(error=>{
    if (error){
        console.log(error);
        throw error;
    }
    else {
        console.log('connection successful');
        const userId= uuid.v1();
        const username='hello';
        const realName='wangwu';
        const age = 30;
        const address = 'shijiazhuang';
        connection.query('insert into users set ?',{
            id:userId,
            username:username,
            real_name:realName,
            age:age,
            address:address
        },(error,result) => {
            if (error){
                console.log('insert error occurred'+ error);
                throw error;
            } else {
                console.log(result);
                connection.query('select * from users',(error,result)=>{
                    if (error){
                        console.log('select error occurred:'+error)
                    } else {
                        console.log(result);

                        connection.end(error=>{
                            if (error){
                                console.log('end error occurred:'+error);
                                throw error;
                            }

                        });
                    }
                });
            }
        });
    }
});
