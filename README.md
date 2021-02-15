# JS Assessments Five

## There are two intentional wrong data in this assessment. If you fix that, you will get 10 bonus marks ...Also, you can add more function if you need to ... 

```

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
  { id: 1, range: "31k-50k" },
  { id: 1, range: "51k-70k" },
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
};
​
const getMinimumSalaryForCompanyById = (companyId) => {
  // compute what can be minimum monthly salary for company with id: companyId
  //  with 2000 in setTimeout
};
​
const getMinMaxSalaryForCompanyById = (companyId) => {
  // compute what can be maximum monthly salary for company with id: companyId
  // with 1500 in setTimeout
};
​
const getUserListByCompanyId = (companyId) => {
  // compute user names in an array for company id: companyId
  // with 3000 in setTimeout
};
​
const getMostCommonSkillName = () => {
  // compute most common skill name with 2000 in setTimeout
  // if there is a tie, return first one
};
​
const getLeastCommonSkillName = () => {
  // compute least common skill name with 1500 in setTimeout
  // if there is a tie, return first one
};
​
(async () => {
  // get and print most common and least common skills
  // print skills of all users using getSkillByUserId method
  // print min salary for company 1
  // print max salary for company 3
  // print all user names of company 2
  // print company name of user 3, 5
})();

```