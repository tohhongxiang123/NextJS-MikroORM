import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { Deck } from '../../../../lib/entities';
import { getDeckByDeckID } from '../../../../lib/services';
import { Layout } from '../../../components';

export default function DeckIDPage({
    deck,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(deck);
    return (
        <Layout>
            {deck ? (
                <>
                    <p>{deck.name}</p>
                    <p>{deck.description}</p>
                </>
            ) : (
                <>
                    <p>Deck not found</p>
                </>
            )}
        </Layout>
    );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const { params } = ctx;
    if (!params) return;

    const deckID = parseInt(params.id as string);
    const deck = await getDeckByDeckID(deckID);

    return {
        props: {
            deck: JSON.parse(JSON.stringify(deck)) as Deck,
        },
    };
}
