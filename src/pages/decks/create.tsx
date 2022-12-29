import { Button, Textarea, TextInput } from '@mantine/core';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { Layout } from '../../components';
import { trpc } from '../../utils/trpc';

export default function CreateDeckPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { data: session } = useSession();
    const mutation = trpc.deck.create.useMutation();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        mutation.mutate({
            name: title,
            description,
            userID: session!.user!.id!,
        });
    };
    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <TextInput
                    label="Deck Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <Textarea
                    label="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <Button type="submit" mt={16} disabled={mutation.isLoading}>
                    Submit
                </Button>
            </form>
            {mutation.isSuccess ? <p>Success!</p> : <></>}
            {mutation.error ? <p>{mutation.error.message}</p> : <></>}
        </Layout>
    );
}
