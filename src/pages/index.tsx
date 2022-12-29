import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
    const { data: session } = useSession();

    return (
        <div>
            Hello
            {!session ? (
                <button onClick={() => signIn()}>Sign in</button>
            ) : (
                <>
                    <p>{session.user?.name}</p>
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            )}
        </div>
    );
}
