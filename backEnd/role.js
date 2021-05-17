const AccessControl = require('accesscontrol')
const ac = new AccessControl();

exports.roles = ( function(){

    ac.grant("user")
    .readOwn("profile")
    .updateOwn("profile")

    ac.grant("professional")
    .extend("user")
    .readOwn("profile")
    .upadteOwn("profile")
    .deleteOwn("profile")

    ac.grant("admin")
    .extend("user") 
    .readAny("profile")
    .updateAny("profile")
    .deleteAny("profile")
    
   return ac
})();