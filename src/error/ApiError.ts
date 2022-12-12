class ApiError {
  message: string;
  code: number;

  constructor(message: string, code: number) {
    this.message = message;
    this.code = code;
  }

  static badRequest(message: string) {
    return new ApiError(message, 400);
  }

  static unauthorized(message: string) {
    return new ApiError(message ?? 'Unauthorized', 401);
  }

  static forbidden(message: string) {
    return new ApiError(message, 403);
  }

  static conflict(message: string) {
    return new ApiError(message, 409);
  }

  static notFound(message: string) {
    return new ApiError(message, 404);
  }

  static failedDependency(message: string) {
    return new ApiError(message, 424);
  }

  static internalServerError(message: string) {
    return new ApiError(message, 500);
  }
}

export default ApiError;

