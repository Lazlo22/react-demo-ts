import {convertUnixToDayMonthYearTime} from "./date";

const UNIX_TIME_TEST = 1661694163000;

describe('date module test', () => {
    test('convert unix time to formatted date - D/M/Y H:M:S', () => {
        expect(convertUnixToDayMonthYearTime(UNIX_TIME_TEST)).toBe('28/08/2022 4:42:43');
    });

    test('convert wrong future unix time to formatted date - D/M/Y H:M:S', () => {
        expect(convertUnixToDayMonthYearTime(UNIX_TIME_TEST * 1000000)).toBe('Invalid date');
    });
});
