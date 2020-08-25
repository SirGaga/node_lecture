const dns = require('dns');

const domain = 'www.baidu.com';

dns.resolve(domain,function (error,address){
    if (error){
        console.error(error);
        return
    }
    console.info(address);
})