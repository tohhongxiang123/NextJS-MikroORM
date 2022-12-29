import { Card } from '@mantine/core';
import Link from 'next/link';
import { Deck } from '../../lib/entities';

export default function DeckPreview({ id, name, description }: Deck) {
    return (
        <Link href={`/decks/${id}`} className="no-underline">
            <Card
                shadow="sm"
                p="lg"
                radius="md"
                withBorder
                style={{ cursor: 'pointer' }}
            >
                <p>{name}</p>
                <p>{description}</p>
            </Card>
        </Link>
    );
}
