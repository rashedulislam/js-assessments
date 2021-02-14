const dataModule = require("./data");
let datas = dataModule.data;

// Question One --- All pro subscribers

function proSubscribers(datas) {
  const proSubscriberlist = datas.filter((data) => {
    return data.isPro == true;
  });

  return proSubscriberlist;
}

//console.log(proSubscribers(datas));

// Question Two -- Sum of ages

function sumOfAges(datas) {
  const totalAge = datas.reduce((total, data) => {
    return total + data.age;
  }, 0);

  return totalAge;
}

//console.log(sumOfAges(datas));

// Question Three -- {id: ?, email: ?} of pro subscribers

function IdEmailOfPros(datas) {
  const IdEmailOfPro = datas
    .filter((data) => data.isPro == true)
    .map((data) => ({ id: data.id, email: data.email }));
  return IdEmailOfPro;
}

//console.log(IdEmailOfPros(datas));

// Question Four -- List of all users whose id is odd number

function oddIdUsers(datas) {
  const oddId = datas.filter((data) => data.id % 2 != 0);
  return oddId;
}

//console.log(oddIdUsers(datas));
