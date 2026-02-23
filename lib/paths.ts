export function withBasePath(path: string): string {
	const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
	const normalizedPath = path.startsWith('/') ? path : `/${path}`
	return `${prefix}${normalizedPath}`
}


