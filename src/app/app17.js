const dns = require('dns');

const ipAddress = '61.135.169.121';

dns.reverse(ipAddress,function(error,domain){
    console.info(domain);
})