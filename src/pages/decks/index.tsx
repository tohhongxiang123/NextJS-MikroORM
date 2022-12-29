import { SimpleGrid } from '@mantine/core';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getSession } from 'next-auth/react';
import { Deck } from '../../../lib/entities';
import { getDecksByUserID } from '../../../lib/services';
import { CreateDeckComponent, DeckPreview, Layout } from '../../components';
import { useRequireLogin } from '../../hooks';

export default function DeckPage({
    decks = [],
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    useRequireLogin();

    return (
        <Layout>
            <SimpleGrid cols={3}>
                {decks.length === 0 ? (
                    <p className="opacity-60">
                        <i>No decks found...</i>
                    </p>
                ) : (
                    decks.map(deck => <DeckPreview key={deck.id} {...deck} />)
                )}
                <CreateDeckComponent />
            </SimpleGrid>
        </Layout>
    );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const session = await getSession(ctx);
    if (!session || !session.user) {
        return {
            props: {
                decks: [] as Deck[],
            },
        };
    }

    const decks = await getDecksByUserID(session.user.id);
    return {
        props: {
            decks: JSON.parse(JSON.stringify(decks)) as Deck[],
        },
    };
}
