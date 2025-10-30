export function withBasePath(path: string): string {
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
	return `${prefix}${path}`
}


