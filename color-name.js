module.exports = () => {
    const chalk = require('chalk');
    const name1 = "Remy";
    const name2 = "Stan";
    const name3 = "Sergio";
    const name4 = "Ganj";
    console.log(chalk.blue(name1));
    console.log(chalk.red(name2));
    console.log(chalk.green(name3));
    console.log(chalk.magenta(name4));
  }