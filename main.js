const date = "202408";
const time_period = "m";

const nbuUrl = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/banksincexp");

nbuUrl.searchParams.append("date", date);
nbuUrl.searchParams.append("period", time_period);
nbuUrl.searchParams.append("json", "");

console.log(nbuUrl.toString());