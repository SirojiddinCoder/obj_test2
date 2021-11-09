
    const companies = [
        { name: 'Company one', category: 'Finance', start: 1981, end: 2003 },
        { name: 'Company two', category: 'Auto', start: 1992, end: 2008 },
        { name: 'Company three', category: 'Retail', start: 1999, end: 2007 },
        { name: 'Company four', category: 'Technology', start: 1989, end: 2010 },
        { name: 'Company five', category: 'Finance', start: 2009, end: 2014 },
        { name: 'Company six', category: 'Auto', start: 1987, end: 2010 },
        { name: 'Company seven', category: 'Technology', start: 1986, end: 1996 },
        { name: 'Company eight', category: 'Finance', start: 2011, end: 2016 },
        { name: 'Company nine', category: 'Retail', start: 1981, end: 1989 },
      ];

      const ages = [34, 23, 41, 32, 2, 5, 21, 26]

      // // FOR EACH:

      // WITH FOR LOOP

      // for (let i = 0; i < companies.length; i++) {
      //     console.log(companies[i]);
      // }

      //  WITH FOR EACH THE SAME THING

      // const forE = companies.forEach((value) => {
      //     console.log(value);
      // })


      // FILTER

      // With for loop

      // let canDrink = [];

      // for (let i = 0; i < ages.length; i++) {
      //     if (ages[i] >= 21) {
      //         canDrink.push(ages[i]); //unshift
      //    }
      // }
      // console.log(canDrink); //=> 21 and over

      // With filter

      // const canDrink = ages.filter(value => value >= 21);

      // console.log(canDrink); //=> 21 and over


      //<< Filtering retail companies >>

      // const retailCompanies = companies.filter(value => value.category === 'Retail')

      // console.log(retailCompanies);


      //<<< Filtering 80s companies >>>

      // const eightiesCompany = companies.filter(value => (value.start >= 1980 && value.start < 1990));

      // console.log(eightiesCompany);


      //<< Filtering companies that lasted 10 years or more>>>

      // const lastedTenYears = companies.filter(value =>(value.end - value.start >= 10));

      // console.log(lastedTenYears);




      //  MAP

      //<<< creating array of company names>>

      // const companyNames = companies.map(value => value.name);

      // console.log(companyNames);

      //<< testing map()>>

      // const testMap = companies.map(value => `${value.name} [${value.start} - ${value.end}]`);

      // console.log(testMap);


      // << example with ages arr>>
      // const ages = [34, 23, 41, 32, 2, 5, 21, 26];


      // const agesSquare = ages.map((age) => parseInt(Math.sqrt(age)));
      //<< pow >>

      // const agesSquare = ages.map(age => age * age);

      // console.log(agesSquare);

      //<< age => Math.sqrt and age * 2>>

      // const ageMap = ages
      //     .map(age => Math.sqrt(age))
      //     .map(age => age * 2);

      // console.log(ageMap);




      // SORT

      //<< sorting companies by their start year>>

      // first way

      // const sortedCompanies = companies.sort(function (a, b) {
      //     if (a.start > b.start) {
      //         return 1
      //     } else {
      //         return -1
      //     }
      // })

      // shorter way

      // const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))

      // console.log(sortedCompanies)


      //<< sort ages>>


        // const sortAges = ages.sort((a, b) => a - b);
        // console.log(sortAges);


      // console.log(sortAges);




      // REDUCE

      //<<<sum of ages by using for loop>>

      // var sum = 0;

      // for (let i = 0; i < ages.length; i++) {
      //     sum += ages[i]
      // }

      // console.log(sum);


      //<<< ages sum by using reduce()>>

      // const agesSum = ages.reduce((total, age) => total + age, 0);

      // console.log(agesSum);


      //<< get total years of all companies>>

      // const getTotal = companies.reduce((total, company) => total + (company.end - company.start), 0);

      // console.log(getTotal)




      //COMBINING METHODS


      // const combined = ages
      //     .map(age => age * 2)
      //     .filter(age => age >= 40)
      //     .sort((a, b) => a - b)
      //     .reduce((a, b) => a + b, 0);

      // console.log(combined);

      // const arr = [3, 5, 7, 2, 5, 78, 67, 1, 8, 9];

      // arr.forEach(function (el) {
      //   if (el % 2 !== 0) {
      //     console.log(el)
      //   }
      // })

      //map

      // const newMap = arr.map(num => num * 2);

      // console.log(newMap);



      // ANOTHER CHALLENGE

      // const user = [
      //  {
      //   name: 'Eshmat',
      //   year: 2011,
      //   id: 1,
      //   status: 'student',
      //   key: 'test',
      // },

      // {
      //   name: 'Eshmat akasi',
      //   year: 2012,
      //   id: 2,
      //   status: 'programmer',
      //   key: 'test',
      // },

      // {
      //   name: 'Toshmat',
      //   year: 2010,
      //   id: 3,
      //   status: 'student',
      //   key: "test",
      // }
      // ]

      //<< Deleting object with current id>>>


      // const onDelete = id => user.filter(value => value.id !== id);
      // console.log(onDelete(2));


      //<<< sorting by year>>>

      // const userSort = user.sort(function (a, b) {
      //   if (a.year > b.year) {
      //     return 1
      //   } else {
      //     return -1
      //   }
      // })

      // console.log(userSort);


      // <<< sorting by name>>>

      // const sortName = user.filter(function (value) {
      //   if (value.name === 'Eshmat') {
      //     return value;
      //   }
      // })

      // console.log(sortName);


      //<<< filtering by the status>>

      // const filterStatus = user.filter(value => value.status === 'student');

      // console.log(filterStatus);


      //<<< Calling by key and name>>>    FILTER ADVANCED

      // const filterAdvanced = (key, value) => {
      //   const res = [];
      //   user.map(val => {
      //     if (val[key].includes(value)) {
      //       for (const kalit in val) {
      //         if (kalit === key) {
      //           res.push(val)
      //         }
      //       }
      //     }
      //   })
      //   return res;
      // };

      // console.log(filterAdvanced('name', "Eshmat"));