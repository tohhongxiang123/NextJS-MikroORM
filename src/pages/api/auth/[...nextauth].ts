import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { MikroOrmAdapter } from '@next-auth/mikro-orm-adapter';
import NextAuth, { AuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const options: AuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
    adapter: MikroOrmAdapter({
        driver: PostgreSqlDriver,
        clientUrl: process.env.DATABASE_URL,
        debug: process.env.DEBUG === 'true',
    }),
    secret: process.env.SECRET,
    callbacks: {
        session: async ({ session, token }) => {
            if (session?.user) {
                session.user.id = token.uid;
            }
            return session;
        },
        jwt: async ({ user, token }) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
    },
    session: {
        strategy: 'jwt',
    },
};

export default NextAuth(options)
