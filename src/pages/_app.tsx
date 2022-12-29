import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import '../styles/tailwind.css';
import { trpc } from '../utils/trpc';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <SessionProvider session={session}>
            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    theme={{ colorScheme: colorScheme }}
                    withGlobalStyles
                    withNormalizeCSS
                >
                    <Component {...pageProps} />
                </MantineProvider>
            </ColorSchemeProvider>
        </SessionProvider>
    );
}

export default trpc.withTRPC(App);
