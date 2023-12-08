import { program } from '@commander-js/extra-typings';
import chalk from 'chalk';

import { isProduction } from './config';
import { ServerError, startServer } from './server';

export default program
  .name('jmdx')
  .description('interactive code runner in the browser')
  .option(
    '-p,--port <number>',
    'http port to start server on',
    isProduction ? '4000' : '3000',
  )
  .action(async ({ port }) => {
    try {
      await startServer({ port: Number(port) });
      console.info(
        chalk.magenta(
          `${chalk.inverse.bold(' INFO ')} running at http://localhost:${port}`,
        ),
      );
    } catch (error) {
      const { code, message } = error as ServerError;
      console.error(
        chalk.red(
          `${chalk.inverse.bold(' ERROR ')} ${
            code
              ? code === 'ERR_SOCKET_BAD_PORT'
                ? `${chalk.italic(port)} is not a valid port`
                : code === 'EADDRINUSE'
                  ? `port ${port} is in use`
                  : `${code} - ${message}`
              : message
          }`,
        ),
      );
    }
  });
