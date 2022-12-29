import { Card } from '@mantine/core';
import Link from 'next/link';
import { Plus } from 'tabler-icons-react';

export default function CreateDeckComponent() {
    return (
        <Link href="/decks/create" className="no-underline">
            <Card
                p="lg"
                radius="md"
                className="border-dashed border-2 border-sky-500 opacity-60 hover:opacity-100 flex flex-col justify-center items-center h-full"
            >
                <div>
                    <Plus size={48} strokeWidth={2} />
                </div>
                <p className="m-0">Create Deck</p>
            </Card>
        </Link>
    );
}
