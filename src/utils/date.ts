import moment from "moment";

export function convertUnixToDayMonthYearTime (unixTime: number): string {
    return moment(unixTime).format('D/MM/YYYY h:mm:ss');
}
