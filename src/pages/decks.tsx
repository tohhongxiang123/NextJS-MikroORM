import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getSession, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { Deck } from '../../lib/entities';
import { getDecksByUserID } from '../../lib/services';
import { trpc } from '../utils/trpc';

export default function DeckPage({
    decks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const { data: session } = useSession();
    const mutation = trpc.deck.create.useMutation();

    const handleCreateDeck = (e: React.FormEvent) => {
        e.preventDefault();

        if (!session || !session.user?.id) return;

        mutation.mutate({ name, description, userID: session?.user?.id });
    };

    return (
        <div>
            <h1>Decks</h1>
            <ul>
                {decks.map(deck => (
                    <li key={deck.id}>
                        {deck.name}:{deck.description}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleCreateDeck}>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button type="submit" disabled={mutation.isLoading}>
                    Create deck
                </button>
                {mutation.error && <p>{mutation.error.message}</p>}
                {mutation.isSuccess && <p>Success</p>}
            </form>
        </div>
    );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const session = await getSession(ctx);
    if (!session || !session.user)
        return {
            props: { decks: [] as Deck[] },
        };

    const userDecks = await getDecksByUserID(session.user.id!);

    return {
        props: { decks: JSON.parse(JSON.stringify(userDecks)) as Deck[] },
    };
}
