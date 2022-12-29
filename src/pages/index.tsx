import { signIn, signOut, useSession } from 'next-auth/react';
import { Layout } from '../components';

export default function Home() {
    const { data: session } = useSession();

    return (
        <Layout>
            {!session ? (
                <button onClick={() => signIn()}>Sign in</button>
            ) : (
                <>
                    <p>{session.user?.name}</p>
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            )}
        </Layout>
    );
}
