var fs = require('fs');
const mysqlConnection = require('./services/dbConnection');
const { People } = require('./models/people')

// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });
const test = async () => {
    try {
        await mysqlConnection.authenticate();
        await mysqlConnection.sync();
        await People.create({name: 'testas', birth_year:'19BBY'})
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

test()

console.log('!!!!!!!!!!!!!! SEEEEEEEEDDDDD !!!!!!!!!')