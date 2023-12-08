import fastify, { FastifyError, FastifyListenOptions } from 'fastify';

const server = fastify();

type ServerOptions = Required<Pick<FastifyListenOptions, 'port'>>;

export const startServer = async ({ port }: ServerOptions) => {
  server.get('/', () => ({ hello: 'world' }));

  await server.listen({ port });
};

export type ServerError = Pick<FastifyError, 'code' | 'message'>;
