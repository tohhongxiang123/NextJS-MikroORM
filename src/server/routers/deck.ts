import { z } from 'zod';
import { deckService } from '../../../lib/services';
import { procedure, router } from '../trpc';

export const deckRouter = router({
    create: procedure
        .input(
            z.object({
                name: z.string(),
                description: z.string(),
                userID: z.string(),
            })
        )
        .mutation(({ input: { name, description, userID } }) =>
            deckService.createDeck({
                name,
                description,
                created_by: userID,
            })
        ),
    getByUserID: procedure
        .input(z.object({ userID: z.string() }))
        .query(({ input: { userID } }) => deckService.getDecksByUserID(userID)),
});

// export type definition of API
export type DeckRouter = typeof deckRouter;
