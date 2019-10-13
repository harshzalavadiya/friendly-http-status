import { defaultErrorCode, errorData, StatusDataObject } from "./error-data";

/**
 * finds status code enrey against provided status code
 *
 * @param {number} httpStatusCode
 * @returns {StatusDataObject}
 */
export const getFriendlyError = (httpStatusCode: number): StatusDataObject =>
  errorData.hasOwnProperty(httpStatusCode.toString())
    ? errorData[httpStatusCode.toString()]
    : defaultErrorCode;
