
/*

    Returns Parameter information for each endpoint. Includes:
    
    userAuth/register
    userAuth/login

*/

export default class RequestRequirements {

    getRegisterParameters() {
        return [
            {
                paramKey:"password",
                required:true,
                type:"string"
            },
            {
                paramKey:"firstName",
                required:true,
                type:"string"
            },
            {
                paramKey:"lastName",
                required:true,
                type:"string"
            },
            {
                paramKey:"email",
                required:true,
                type:"string",
                validatorFunction:"email"
            }
        ]
    }

    getLoginParameters() {
        return [
            {
                paramKey:"email",
                required:true,
                type:"string",
                validatorFunction:"email"
            },
            {
                paramKey:"password",
                required:true,
                type:"string"
            },
        ]
    }
}