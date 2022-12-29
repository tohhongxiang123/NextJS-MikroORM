import { z } from 'zod';
import { createDeck, getDecksByUserID } from '../../../lib/services';
import { procedure, router } from '../trpc';

export const deckRouter = router({
    create: procedure
        .input(
            z.object({
                name: z.string(),
                description: z.string(),
                userID: z.string()
            }),
        )
        .mutation(({ input: { name, description, userID } }) => {
            const newDeck = createDeck({
                name,
                description,
                created_by: userID
            })
            return newDeck
        }),
    getByUserID: procedure
        .input(z.object({ userID: z.string() }))
        .query(({ input: { userID } }) => {
            const userDecks = getDecksByUserID(userID)
            return userDecks
        })
});

// export type definition of API
export type DeckRouter = typeof deckRouter;