import {
    ActionIcon,
    AppShell,
    Burger,
    Button,
    Header,
    MediaQuery,
    Navbar,
    NavLink,
    Text,
    useMantineColorScheme,
    useMantineTheme,
} from '@mantine/core';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MoonStars, Sun } from 'tabler-icons-react';

export interface LayoutProps {
    children: React.ReactElement | React.ReactElement[];
}

const links = [
    {
        label: 'Decks',
        href: '/decks',
    },
];

export default function Layout({ children }: LayoutProps) {
    const { route } = useRouter();
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const { data: session } = useSession();
    const isLoggedIn = !!session;

    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            navbar={
                <Navbar
                    p="md"
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 200, lg: 300 }}
                >
                    <Navbar.Section grow mt="md">
                        {links.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{ textDecoration: 'none' }}
                            >
                                <NavLink
                                    key={link.label}
                                    label={link.label}
                                    active={route === link.href}
                                />
                            </Link>
                        ))}
                    </Navbar.Section>
                    <Navbar.Section
                        mt="md"
                        className="flex flex-col items-center"
                    >
                        {isLoggedIn ? (
                            <>
                                <p>{session.user?.name}</p>
                                <Button onClick={() => signOut()}>
                                    Sign out
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button onClick={() => signIn()}>
                                    Sign in
                                </Button>
                            </>
                        )}
                    </Navbar.Section>
                </Navbar>
            }
            header={
                <Header
                    height={{ base: 50, md: 70 }}
                    p="md"
                    className="flex justify-between items-center"
                >
                    <div className="flex items-center h-100">
                        <MediaQuery
                            largerThan="sm"
                            styles={{ display: 'none' }}
                        >
                            <Burger
                                opened={opened}
                                onClick={() => setOpened(o => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>
                        <Text>
                            <Link href="/" style={{ textDecoration: 'none' }}>
                                <strong>Flashcards</strong>
                            </Link>
                        </Text>
                    </div>
                    <div className="flex">
                        <ActionIcon
                            variant="outline"
                            color={dark ? 'yellow' : 'blue'}
                            onClick={() => toggleColorScheme()}
                            title="Toggle color scheme"
                        >
                            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
                        </ActionIcon>
                    </div>
                </Header>
            }
        >
            {children}
        </AppShell>
    );
}
