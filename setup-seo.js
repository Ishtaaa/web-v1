#!/usr/bin/env node

/**
 * SEO Setup Script for Ishta's Portfolio
 * Run this script to configure your SEO settings
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Setting up SEO for your portfolio website...\n');

// Read the current SEO configuration
const seoPath = path.join(__dirname, 'src', 'lib', 'seo.ts');
let seoContent = fs.readFileSync(seoPath, 'utf8');

// Get user input
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function setupSEO() {
  try {
    console.log('Please provide the following information:\n');

    const domain = await question('🌐 What is your website domain? (e.g., https://ishta.dev): ');
    const twitterHandle = await question('🐦 What is your Twitter handle? (e.g., @Ishtaaa): ');
    const email = await question('📧 What is your email address?: ');
    const location = await question('📍 Where are you located? (e.g., Durban, South Africa): ');
    const linkedin = await question('💼 What is your LinkedIn profile URL? (optional, press Enter to skip): ');

    // Update the SEO configuration
    seoContent = seoContent.replace(/https:\/\/yourdomain\.com/g, domain);
    seoContent = seoContent.replace(/@yourtwitterhandle/g, twitterHandle);
    
    // Update additional information
    if (email) {
      seoContent = seoContent.replace(/\/\/ Add your email here/g, `"email": "${email}",`);
    }
    
    if (location) {
      seoContent = seoContent.replace(/\/\/ Add your location here/g, `"address": { "@type": "PostalAddress", "addressLocality": "${location}" },`);
    }
    
    if (linkedin) {
      seoContent = seoContent.replace(/\/\/ Add your LinkedIn here/g, `"${linkedin}",`);
    }

    // Write the updated configuration
    fs.writeFileSync(seoPath, seoContent);

    // Update sitemap
    const sitemapPath = path.join(__dirname, 'src', 'routes', 'sitemap.xml', '+server.ts');
    let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    sitemapContent = sitemapContent.replace(/https:\/\/yourdomain\.com/g, domain);
    fs.writeFileSync(sitemapPath, sitemapContent);

    // Update robots.txt
    const robotsPath = path.join(__dirname, 'static', 'robots.txt');
    let robotsContent = fs.readFileSync(robotsPath, 'utf8');
    robotsContent = robotsContent.replace(/https:\/\/yourdomain\.com/g, domain);
    fs.writeFileSync(robotsPath, robotsContent);

    console.log('\n✅ SEO configuration updated successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Update your actual domain in the configuration files');
    console.log('2. Add your real projects to the projects page');
    console.log('3. Create a custom Open Graph image (recommended size: 1200x630px)');
    console.log('4. Submit your sitemap to Google Search Console');
    console.log('5. Test your website with Google PageSpeed Insights');
    console.log('\n🔗 Useful tools:');
    console.log('- Google Search Console: https://search.google.com/search-console');
    console.log('- Google PageSpeed Insights: https://pagespeed.web.dev/');
    console.log('- Meta Tags Checker: https://metatags.io/');
    console.log('- Schema Markup Validator: https://validator.schema.org/');

  } catch (error) {
    console.error('❌ Error setting up SEO:', error);
  } finally {
    rl.close();
  }
}

setupSEO();
