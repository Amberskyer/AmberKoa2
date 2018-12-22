/**
 * API错误名称
 */
const ApiResponseNames = {};

ApiResponseNames.UNKNOW_ERROR = "unknowError";
ApiResponseNames.USER_NOT_EXIST = "userNotExist";
ApiResponseNames.USER_NAME_EXIST = "userNameExist";
ApiResponseNames.PARAMS_WRONG = "paramsWrong";

/**
 * API错误名称对应的错误信息
 */
const error_map = new Map();

error_map.set(ApiResponseNames.UNKNOW_ERROR, {code: -1, message: '未知错误'});
error_map.set(ApiResponseNames.USER_NOT_EXIST, {code: 101, message: '用户不存在'});
error_map.set(ApiResponseNames.USER_NAME_EXIST, {code: -1, message: '用户名已经存在'});
error_map.set(ApiResponseNames.PARAMS_WRONG, {code: -1, message: '参数错误'});

//根据错误名称获取错误信息
ApiResponseNames.getErrorInfo = (error_name) => {

    let error_info;

    if (error_name) {
        error_info = error_map.get(error_name);
    }

    //如果没有对应的错误信息，默认'未知错误'
    if (!error_info) {
        error_name = UNKNOW_ERROR;
        error_info = error_map.get(error_name);
    }

    return error_info;
}

module.exports = ApiResponseNames;
