import { ServerRoute } from "@hapi/hapi";

const authRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/auth/me',
    handler: (request, h) => {
      return h.response({
        user: request.auth.credentials
      });
    }
  },
];

export { authRoutes };