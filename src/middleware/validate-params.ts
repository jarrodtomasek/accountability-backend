import {Request, NextFunction, Response} from 'express'
import myValidator from 'validator';

const validateParams = function (requestParams: any) {
    return function (req: Request, res: Response, next: NextFunction) {
        // Loop through each request parameter
        for (let param of requestParams) {

            // Is Present
            if (checkParamPresent(Object.keys(req.body), param)) {
                let reqParam = req.body[param.paramKey];

                // Check for Type
                if (!checkParamType(reqParam, param)) {
                    return res.send({
                        status: 400,
                        result: `${param.paramKey} is of type ` +
                        `${typeof reqParam} but should be ${param.type}`
                    });
                } else {
                    if (!runValidators(reqParam, param)) {
                        return res.send({
                            status: 400,
                            result: `Validation failed for ${param.paramKey}`
                        });
                    }
                }
            
            // Is Required
            } else if (param.required){
                return res.send({
                    status: 400,
                    result: `Missing Parameter ` + param.paramKey
                });
            }
        }
        next();
    }
};

const checkParamPresent = function (reqParams: any, paramObj: any) {
    return (reqParams.includes(paramObj.paramKey));
};

const checkParamType = function (reqParam: any, paramObj: any) {
    const reqParamType = typeof reqParam;
    return reqParamType === paramObj.type;
};

const runValidators = function (reqParam: any, paramObj: any) {
    for (let validator of paramObj.validatorFunctions) {
        if (validator == 'email') {
            return myValidator.isEmail(reqParam);
        }
        else if (!validator(reqParam)) {
            return false
        }
    }
    return true;
};

export default validateParams;