const dataModule = require("./data");
let datas = dataModule.data;


const calcMaxAverage = (callback) => {
  // write code here
};
​
const printAnalyticsUsingMap = () => {
  const weatherMap = new Map();
  // key of this map will be the date.
  // Value will be an object containing max and min temperature
  // Like this: key = 18-6-2020 and value = { max: 39, min: 27 }
​
  // print map now
};
​
const sortAnalyticsData = () => {
  // return a sorted array where there will be an object in every index
  // the structure of object will be like this: { day: "1-1-2020", temperature: 23 }
  // data will be sorted in ascending order against averageTemperature
}
​
// do not change this function
const mainFunc = () => {
  // print max average temperature with this func
  calcMaxAverage((maxAverageTemperature) => {
    console.log(maxAverageTemperature);
  });
​
  printAnalyticsUsingMap();
​
  // bonus - it is not mandatory. But, you should give it a try
  // uncomment the following code and try
  // const sortedData = sortAnalyticsData();
  // sortedData.forEach((data) => {
  //   console.log(`Day: ${data.day}, Temperature: ${data.temperature}`);
  // });
};
​
mainFunc();