import { getTodayAsIso8601Date } from "./index";

describe("date-utils", () => {
  describe("getTodayAsIso8601Date", () => {
    beforeAll(() => {
      jest
        .useFakeTimers("modern")
        .setSystemTime(new Date("2022-01-01").getTime());
    });

    afterAll(() => {
      // Back to reality...
      jest.useRealTimers();
    });

    beforeEach(() => {
      console.log("new Date():", new Date());
    });

    it("should return today as string in ISO8601 date format", () => {
      const result = getTodayAsIso8601Date();

      expect(result).toBe("2022-01-01");
    });
  });
});
