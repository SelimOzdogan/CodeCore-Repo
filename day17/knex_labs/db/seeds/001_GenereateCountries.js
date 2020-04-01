const data = require('../../db/allCountries');
exports.seed = function (knex, Promise) {
  const tableData = data.reduce((acc, val) => {
    const lastEntry = acc[acc.length - 1];

    const newVal = {
      title: val.countryName,
      code: val.countryCode,
    };

    if (
      lastEntry &&
      lastEntry.code === val.countryCode &&
      lastEntry.title === val.countryName
    ) {
      return acc;
    } else {
      return acc.concat([newVal]);
    }
  }, []);
  return knex('countries')
    .del()
    .then(() => {
      return knex('countries').insert(tableData);
    });
};