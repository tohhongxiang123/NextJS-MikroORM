import { router } from '../trpc';
import { deckRouter } from './deck';

export const appRouter = router({
  deck: deckRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;