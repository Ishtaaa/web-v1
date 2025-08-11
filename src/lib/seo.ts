export interface SEOConfig {
	title: string;
	description: string;
	keywords?: string[];
	author?: string;
	image?: string;
	url?: string;
	type?: 'website' | 'article' | 'profile';
	publishedTime?: string;
	modifiedTime?: string;
	section?: string;
	tags?: string[];
}

export const defaultSEO: SEOConfig = {
	title: "Ishta - CS Student & Aspiring Software Engineer",
	description: "I am a 2nd Year CS Student at the University of Kwa-Zulu Natal and an aspiring Software Engineer. My interests include Mobile Development, Machine Learning and Full Stack Development.",
	keywords: [
		"Computer Science",
		"Software Engineer",
		"Mobile Development",
		"Machine Learning",
		"Full Stack Development",
		"Python",
		"Java",
		"Flutter",
		"Dart",
		"SvelteKit",
		"UKZN",
		"University of KwaZulu-Natal",
		"Web Development",
		"Programming",
		"Student Portfolio"
	],
	author: "Ishta",
	image: "/og-image.jpg",
	url: "https://ishta.netlify.app",
	type: "profile"
};

export function generateMetaTags(config: SEOConfig) {
	const meta = [
		// Basic meta tags
		{ name: 'description', content: config.description },
		{ name: 'keywords', content: config.keywords?.join(', ') },
		{ name: 'author', content: config.author },
		{ name: 'robots', content: 'index, follow' },
		{ name: 'language', content: 'English' },
		{ name: 'revisit-after', content: '7 days' },
		
		// Open Graph tags
		{ property: 'og:title', content: config.title },
		{ property: 'og:description', content: config.description },
		{ property: 'og:type', content: config.type },
		{ property: 'og:url', content: config.url },
		{ property: 'og:image', content: config.image },
		{ property: 'og:site_name', content: "Ishta's Portfolio" },
		{ property: 'og:locale', content: 'en_US' },
		
		// Twitter Card tags
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:title', content: config.title },
		{ name: 'twitter:description', content: config.description },
		{ name: 'twitter:image', content: config.image },
		{ name: 'twitter:creator', content: '@yourtwitterhandle' },
		
		// Additional meta tags
		{ name: 'theme-color', content: '#4A7C59' },
		{ name: 'msapplication-TileColor', content: '#4A7C59' },
		{ name: 'apple-mobile-web-app-capable', content: 'yes' },
		{ name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
		{ name: 'apple-mobile-web-app-title', content: config.title },
		
		// Canonical URL
		{ rel: 'canonical', href: config.url }
	];

	return meta;
}

export function generateStructuredData(config: SEOConfig) {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": config.author,
		"jobTitle": "Computer Science Student & Aspiring Software Engineer",
		"alumniOf": {
			"@type": "Organization",
			"name": "University of KwaZulu-Natal"
		},
		"knowsAbout": config.keywords,
		"description": config.description,
		"url": config.url,
		"sameAs": [
			"https://www.github.com/Ishtaaa"
		],
		"worksFor": {
			"@type": "Organization",
			"name": "University of KwaZulu-Natal"
		},
		"knowsLanguage": ["English"],
		"nationality": "South African"
	};

	return structuredData;
}

export function generatePageSEO(pageConfig: Partial<SEOConfig>) {
	return {
		...defaultSEO,
		...pageConfig
	};
}
