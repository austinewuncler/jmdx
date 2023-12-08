import { program } from '@commander-js/extra-typings';
import chalk from 'chalk';

export default program.name('jmdx').action(() => {
  console.info(chalk.magenta(`${chalk.inverse.bold(' INFO ')} running`));
});
