import { getFriendlyError } from "..";
import { defaultErrorCode, errorData } from "../error-data";

const errorCodes = Object.keys(errorData);

for (const errorCode of errorCodes) {
  test(`should return proper ${errorCode} response`, () => {
    const errorResponseObject = getFriendlyError(parseInt(errorCode));
    expect(errorResponseObject).toEqual(errorData[errorCode]);
  });
}

test("should return unknown error object on not found", () => {
  const messageObject = getFriendlyError(1001);
  expect(messageObject).toEqual(defaultErrorCode);
});
