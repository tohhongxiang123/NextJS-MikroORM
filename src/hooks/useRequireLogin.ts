import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function useRequireLogin() {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'loading') return;

        if (status === 'unauthenticated') {
            signIn();
        }
    }, [session, status]);
}
