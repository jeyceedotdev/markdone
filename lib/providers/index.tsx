'use client'

import { ThemeProvider } from 'next-themes'
import { EditorProvider } from '@/components/editor/legacy'
import { trpc } from '@/lib/trpc'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { httpBatchLink } from '@trpc/react-query'
import SuperJSON from 'superjson'

export function Providers({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient({}))
	const [trpcClient] = useState(() =>
		trpc.createClient({
			transformer: SuperJSON,
			links: [
				httpBatchLink({
					url: '/api/trpc',
				}),
			],
		}),
	)
	const { Provider: TRPCProvider } = trpc

	return (
		<ThemeProvider attribute="class" enableSystem defaultTheme="system">
			<TRPCProvider client={trpcClient} queryClient={queryClient}>
				<QueryClientProvider client={queryClient}>
					<EditorProvider>{children}</EditorProvider>
				</QueryClientProvider>
			</TRPCProvider>
		</ThemeProvider>
	)
}