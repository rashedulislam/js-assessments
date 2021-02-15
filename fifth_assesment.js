const userData = [
  { id: 1, name: "First User", companyId: 1, salaryRangeId: 1 },
  { id: 2, name: "Second User", companyId: 2, salaryRangeId: 2 },
  { id: 3, name: "Third User", companyId: 1, salaryRangeId: 2 },
  { id: 4, name: "Forth User", companyId: 2, salaryRangeId: 3 },
  { id: 5, name: "Fifth User", companyId: 3, salaryRangeId: 2 },
  { id: 6, name: "Sixth User", companyId: 1, salaryRangeId: 1 },
];
​
const companyData = [
  { id: 1, name: "Company A" },
  { id: 2, name: "Company B" },
  { id: 3, name: "Company C" },
];
​
const skillList = [
  { id: 1, name: "Java" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "Golang" },
  { id: 4, name: "PHP" },
  { id: 5, name: "GCP" },
];
​
const userSkills = [
  { id: 1, userId: 1, skillIds: [1, 2, 5] },
  { id: 2, userId: 2, skillIds: [2, 4, 5] },
  { id: 3, userId: 3, skillIds: [2, 3] },
  { id: 4, userId: 4, skillIds: [1, 2, 3] },
  { id: 5, userId: 5, skillIds: [1, 4] },
  { id: 6, userId: 6, skillIds: [2, 4] },
];
​
const salaryRanges = [
  { id: 1, range: "10k-30k" },
  { id: 2, range: "31k-50k" },
  { id: 3, range: "51k-70k" },
];
​
const getSkillByUserId = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const skillIds = userSkills.find(
        (userSkill) => userSkill.userId === userId
      ).skillIds;
      const skillArray = skillList
        .filter((skill) => skillIds.includes(skill.id))
        .map((item) => item.name);
      resolve(skillArray);
    }, 2000);
  });
};
​
const getCompanyByUserId = (userId) => {
  //write code here with 3000 in setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      const companyId = userData.find((user) => user.id === userId).companyId;
      const companyName = companyData.find(
        (company) => company.id === companyId
      ).name;
      resolve(companyName);
    }, 3000);
  });
};
​
const getMinimumSalaryForCompanyById = (companyId) => {
  // compute what can be minimum monthly salary for company with id: companyId
  //  with 2000 in setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      const salaryId = userData.find((user) => user.companyId === companyId)
        .salaryRangeId;
      const salaryRange = salaryRanges.find((salary) => salary.id === salaryId)
        .range;
      const minimumSalary = salaryRange.split("-")[0];
      resolve(minimumSalary);
    }, 2000);
  });
};
​
const getMaxSalaryForCompanyById = (companyId) => {
  // compute what can be maximum monthly salary for company with id: companyId
  // with 1500 in setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      const salaryId = userData.find((user) => user.companyId === companyId)
        .salaryRangeId;
      const salaryRange = salaryRanges.find((salary) => salary.id === salaryId)
        .range;
      const maxSalary = salaryRange.split("-")[1];
      resolve(maxSalary);
    }, 1500);
  });
};
​
const getUserListByCompanyId = (companyId) => {
  // compute user names in an array for company id: companyId
  // with 3000 in setTimeout
  return new Promise((resolve) => {
    setTimeout(() => {
      const userNames = userData
        .filter((user) => user.companyId === companyId)
        .map((user) => {
          return user.name;
        });
      resolve(userNames);
    }, 3000);
  });
};
​
const getMostCommonSkillName = () => {
  // compute most common skill name with 2000 in setTimeout
  // if there is a tie, return first one
  return new Promise((resolve) => {
    setTimeout(() => {
      const skillArray = userSkills.map((item) => {
        return item.skillIds;
      });
      let merged = [].concat.apply([], skillArray);
      let mostFrequent = function (array) {
        let map = array.map((a) => array.filter((b) => a === b).length);
        return array[map.indexOf(Math.max.apply(null, map))];
      };
      let topSkill = mostFrequent(merged);
      let skillName = skillList.find((skill) => skill.id === topSkill).name;
      resolve(skillName);
    }, 2000);
  });
};
​
const getLeastCommonSkillName = () => {
  // compute least common skill name with 1500 in setTimeout
  // if there is a tie, return first one
  return new Promise((resolve) => {
    setTimeout(() => {
      const skillArray = userSkills.map((item) => {
        return item.skillIds;
      });
      let merged = [].concat.apply([], skillArray);
      const leastSkill = merged
        .sort(
          (a, b) =>
            merged.filter((v) => v === b).length -
            merged.filter((v) => v === a).length
        )
        .pop();
      let skillName = skillList.find((skill) => skill.id === leastSkill).name;
      resolve(skillName);
    }, 1500);
  });
};
​
(async () => {
  // get and print most common and least common skills
  console.log("Most common skills:", await getMostCommonSkillName());
  console.log("Least common skills:", await getLeastCommonSkillName());
  // print skills of all users using getSkillByUserId method
  console.log("user1 skills:", await getSkillByUserId(1));
  console.log("user2 skills:", await getSkillByUserId(2));
  console.log("user3 skills:", await getSkillByUserId(3));
  console.log("user4 skills:", await getSkillByUserId(4));
  console.log("user5 skills:", await getSkillByUserId(5));
  console.log("user6 skills:", await getSkillByUserId(6));
  // print min salary for company 1
  console.log(
    "Min Salary of company 1:",
    await getMinimumSalaryForCompanyById(1)
  );
  // print max salary for company 3
  console.log(
    "Max Salary of company 3:",
    await getMaxSalaryForCompanyById(3)
  );
  // print all user names of company 2
  console.log("User List of Company2:", await getUserListByCompanyId(2));
  // print company name of user 3, 5
  console.log("Company Name Of User 3:", await getCompanyByUserId(3));
  console.log("Company Name Of User 5:", await getCompanyByUserId(5));
})();