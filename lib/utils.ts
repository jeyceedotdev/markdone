import { Drafts } from '@prisma/client'
import { CxOptions, cx } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: CxOptions) {
	return twMerge(cx(inputs))
}

export function toKebabCase(input: string) {
	return input
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)+/g, '')
}

export function downloadMarkdownFile(draft: Drafts) {
	const a = document.createElement('a')
	const blob = new Blob([draft.content], { type: 'text/plain' })
	const url = URL.createObjectURL(blob)
	a.href = url
	a.download = `${draft.filename}.md`
	a.click()
	URL.revokeObjectURL(url)
	a.remove()
}
