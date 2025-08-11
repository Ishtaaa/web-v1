<script lang="ts">
	import { onMount } from 'svelte';
	import type { SEOConfig } from '$lib/seo';
	import { generateMetaTags, generateStructuredData } from '$lib/seo';

	export let config: SEOConfig;

	let structuredData: string;

	onMount(() => {
		// Generate structured data
		const data = generateStructuredData(config);
		structuredData = JSON.stringify(data);

		// Update document title
		document.title = config.title;

		// Update meta tags
		const metaTags = generateMetaTags(config);
		
		// Remove existing meta tags
		const existingMeta = document.querySelectorAll('meta[name], meta[property], meta[rel]');
		existingMeta.forEach(meta => meta.remove());

		// Add new meta tags
		metaTags.forEach(tag => {
			const meta = document.createElement('meta');
			if (tag.name) meta.setAttribute('name', tag.name);
			if (tag.property) meta.setAttribute('property', tag.property);
			if (tag.rel) meta.setAttribute('rel', tag.rel);
			if (tag.content) meta.setAttribute('content', tag.content);
			if (tag.href) meta.setAttribute('href', tag.href);
			document.head.appendChild(meta);
		});

		// Add structured data
		const script = document.createElement('script');
		script.type = 'application/ld+json';
		script.textContent = structuredData;
		document.head.appendChild(script);
	});
</script>

<!-- This component doesn't render anything visible -->
<!-- It only handles SEO meta tags and structured data -->

<svelte:head>
	<title>{config.title}</title>
	<meta name="description" content={config.description} />
	<meta name="keywords" content={config.keywords?.join(', ')} />
	<meta name="author" content={config.author} />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />
	
	<!-- Open Graph -->
	<meta property="og:title" content={config.title} />
	<meta property="og:description" content={config.description} />
	<meta property="og:type" content={config.type} />
	<meta property="og:url" content={config.url} />
	<meta property="og:image" content={config.image} />
	<meta property="og:site_name" content="Ishta's Portfolio" />
	<meta property="og:locale" content="en_US" />
	
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={config.title} />
	<meta name="twitter:description" content={config.description} />
	<meta name="twitter:image" content={config.image} />
	<meta name="twitter:creator" content="@yourtwitterhandle" />
	
	<!-- Additional meta tags -->
	<meta name="theme-color" content="#4A7C59" />
	<meta name="msapplication-TileColor" content="#4A7C59" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta name="apple-mobile-web-app-title" content={config.title} />
	
	<!-- Canonical URL -->
	<link rel="canonical" href={config.url} />
	
	<!-- Structured Data -->
	<script type="application/ld+json">
		{JSON.stringify(generateStructuredData(config))}
	</script>
</svelte:head>
