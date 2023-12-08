import { dirname } from 'node:path';

import fastifyHttpProxy from '@fastify/http-proxy';
import fastifyStatic from '@fastify/static';
import fastify, { FastifyError, FastifyListenOptions } from 'fastify';

import { isProduction } from './config';

const server = fastify();

type ServerOptions = Required<Pick<FastifyListenOptions, 'port'>>;

export const startServer = async (options: ServerOptions) => {
  await (isProduction
    ? server.register(fastifyStatic, {
        root: dirname(
          new URL(import.meta.resolve('@jmdx/local/dist/index.html')).pathname,
        ),
      })
    : server.register(fastifyHttpProxy, {
        upstream: 'http://localhost:5173',
      }));

  await server.listen(options);
};

export type ServerError = Pick<FastifyError, 'code' | 'message'>;
