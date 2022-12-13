class ApiError {
  message: string;
  code: number;

  constructor(message: string, code: number) {
    this.message = message;
    this.code = code;
  }

  static badRequest(message: string = 'BadRequest') {
    return new ApiError(message, 400);
  }

  static unauthorized(message: string = 'Unauthorized') {
    return new ApiError(message, 401);
  }

  static forbidden(message: string = 'Forbidden') {
    return new ApiError(message, 403);
  }

  static conflict(message: string = 'Conflict') {
    return new ApiError(message, 409);
  }

  static notFound(message: string = 'Not Found') {
    return new ApiError(message, 404);
  }

  static failedDependency(message: string = 'Failed Dependency') {
    return new ApiError(message, 424);
  }

  static internalServerError(message: string = 'Internal Server Error') {
    return new ApiError(message, 500);
  }
}

export default ApiError;

