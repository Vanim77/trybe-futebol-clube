enum StatusCode {
  OK = 200,
  Created,
  BadRequest = 400,
  Unauthorized,
  NotFound = 404,
  UnprocessableEntity = 422,
}

export default StatusCode;
