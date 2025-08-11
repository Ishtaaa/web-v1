import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	// This is a placeholder for a dynamic OG image
	// In production, you might want to use a library like @vercel/og
	// or create a static image
	
	const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
		<rect width="1200" height="630" fill="#4A7C59"/>
		<rect x="100" y="100" width="1000" height="430" fill="#DAD3BE" rx="20"/>
		<text x="600" y="250" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="#2D4A3E">Ishta</text>
		<text x="600" y="320" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="#2D4A3E">CS Student & Aspiring Software Engineer</text>
		<text x="600" y="380" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="#2D4A3E">Mobile Development • Machine Learning • Full Stack</text>
	</svg>`;

	return new Response(svg, {
		headers: {
			'Content-Type': 'image/svg+xml',
			'Cache-Control': 'public, max-age=31536000, immutable'
		}
	});
};
