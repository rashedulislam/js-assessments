# JS-Assessments Three


### Solve following function using given data.

```
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

```

## From the data given below:

```

    const randomWeatherData = {
      "1-1-2020": {
        averageTemperature: 23,
        unit: "degree celsius",
        maxTemperature: 27,
        minTemperature: 17,
      },
      "15-2-2020": {
        averageTemperature: 25,
        unit: "degree celsius",
        maxTemperature: 32,
        minTemperature: 21,
      },
      "11-3-2020": {
        averageTemperature: 27,
        unit: "degree celsius",
        maxTemperature: 33,
        minTemperature: 25,
      },
      "21-4-2020": {
        averageTemperature: 33,
        unit: "degree celsius",
        maxTemperature: 37,
        minTemperature: 27,
      },
      "15-5-2020": {
        averageTemperature: 32,
        unit: "degree celsius",
        maxTemperature: 37,
        minTemperature: 26,
      },
      "18-6-2020": {
        averageTemperature: 31,
        unit: "degree celsius",
        maxTemperature: 39,
        minTemperature: 27,
      },
    };

```