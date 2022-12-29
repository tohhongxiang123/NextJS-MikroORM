import { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";
import React, { useState } from "react";
import { trpc } from "../utils/trpc";

export default function DeckPage({ }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const { data: session } = useSession()

    const handleCreateDeck = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const hello = trpc.hello.useQuery({ text: 'bbb' })

    if (!hello.data) {
        return <p>Loading...</p>
    }
    
    return (
        <div>
            <h1>Decks</h1>
            <p>{hello.data.greeting}</p>
            <form onSubmit={handleCreateDeck}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                <button type="submit">Create deck</button>
            </form>
        </div>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const session = await getSession(ctx)
    console.log(session)

    return {
        props: {}
    }
}