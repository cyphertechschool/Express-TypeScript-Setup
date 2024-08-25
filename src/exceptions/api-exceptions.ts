class ApiExceptionsHandler extends Error {
    statusCode: number;
    message: string;
    errors?: any;
    success: boolean;
    data?: any;
    stack?: string | undefined;

    constructor(
        statusCode: number,
        message: string,
        errors?: any,
        data?: any,
        stack?: string | undefined
    ) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.errors = errors;
        this.data = data;
        this.success = false;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiExceptionsHandler;
