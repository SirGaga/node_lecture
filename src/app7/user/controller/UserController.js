const userService = require('../service/UserService');
const uuid = require('uuid');

class UserController {
    async userLogin(username,password){
        const userId = username;
        const userSessionId = uuid.v1();
        await userService.storeUserId(userSessionId,userId);
    }

    async userLogout(userSessionId){
        await userService.removeUserSessionByUserSessionId(userSessionId);
    }

    async userOtherOperation(userSessionId){
        const userId = await userService.getUserIdFromUserSessionByUserSessionId(userSessionId);
        console.log('userId from UserController:' + userId);

        await userService.resetUserSessionExpirationTime(userSessionId);
    }
}

module.exports = new UserController();