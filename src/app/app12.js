const util = require("util");

const obj = {
    name:"zhangsan",
    address: {
        city:"jiangxi",
        show:true,
        code:1301,
        getCode:function (){
            return this.code;
        }
    }
};

const str = util.inspect(obj,{
    'colors':true
});

console.info(str);