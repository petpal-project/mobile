import { createTRPCClient } from '@trpc/client';
import type { AppRouter } from '../../../server/src/utils/trpc';
import { auth } from '../config/firebase';

export const client = createTRPCClient<AppRouter>({
  url: 'http://localhost:8080/trpc',
  async headers() {
    const token = await auth.currentUser?.getIdToken();
    if (token) {
      return {
        Authorization: 'Bearer ' + token,
      };
    }
    return {};
  },
});
