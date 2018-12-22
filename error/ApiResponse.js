const ApiResponseNames = require('./ApiResponseNames');

/**
 * 自定义Api异常
 */
class ApiResponse extends Error {

    //构造方法
    constructor(error_name, error_code, error_message) {
        super();

        var error_info = ApiResponseNames.getErrorInfo(error_name);

        this.name = error_name;
        this.code = error_info.code;
        this.message = error_info.message;
    }
}

module.exports = ApiResponse;
