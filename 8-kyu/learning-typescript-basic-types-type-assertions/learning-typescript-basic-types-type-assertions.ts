export class SuccessServerResult {
  constructor (public httpCode: number, public resultObject:Object) {}
}
​
export class ErrorServerResult {
  constructor (public httpCode: number, public message:string) {}
}
​
export function getResult(result: SuccessServerResult | ErrorServerResult) {
  if (result.httpCode === 200) {
    return (result as SuccessServerResult).resultObject;
  } else {
    return (result as ErrorServerResult).message;
  }
}