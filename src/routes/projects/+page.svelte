<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import { generatePageSEO } from '$lib/seo';
  
  // Define the Project type
  interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github: string;
    live: string;
    category: string;
  }
  
  // SEO configuration for projects page
  const projectsSEO = generatePageSEO({
    title: "Projects - Ishta's Portfolio",
    description: "Explore my projects in mobile development, machine learning, and full stack development. View my work with Python, Java, Flutter, and SvelteKit.",
    keywords: ["Projects", "Portfolio", "Mobile Development", "Machine Learning", "Full Stack Development", "Python", "Java", "Flutter", "SvelteKit"],
    type: "website"
  });

  // Project data - add your actual projects here
  const projects: Project[] = [
    // Add your real projects here
    // Example structure:
    // {
    //   id: 1,
    //   title: "Project Name",
    //   description: "Brief description of the project",
    //   technologies: ["Technology 1", "Technology 2"],
    //   image: "path/to/image.jpg",
    //   github: "https://github.com/your-repo",
    //   live: "https://live-demo-url.com",
    //   category: "Category"
    // }
    {
		id: 1,
		title: "Spotify Data Analysis",
		description: "A simple data analysis tool that processes your Spotify listening history to uncover trends.",
		technologies: ["Python", "Pandas", "Matplotlib"],
		image: "/images/mobile-app.jpg",
		github: " https://github.com/Ishtaaa/spotify-data",
		live: '',
		category: 'Data Science'
	},
  {
		id: 2,
		title: "Pomodoro Timer",
		description: "A simple pomodoro timer app in Flutter",
		technologies: ["Flutter", "Dart"],
		image: "/images/mobile-app.jpg",
		github: " https://github.com/Ishtaaa/pomodoro_timer",
		live: '',
		category: 'Mobile Development'
	}
      ];

  // Filter state
  let selectedCategory = "All";
  const categories = ["All", "Mobile Development", "Machine Learning", "Full Stack Development", "Data Science"];
  
  // Filter projects based on selected category
  $: filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
</script>

<SEO config={projectsSEO} />

<div class="bg-beige-500 min-h-screen">
  <!-- Header Section -->
  <div class="relative isolate px-6 lg:px-8">
    <div class="mx-auto max-w-7xl py-24 sm:py-32">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-darkgreen-500 sm:text-6xl">
          My Projects
        </h1>
        <p class="mt-6 text-lg leading-8 text-sage-600 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in mobile development, 
          machine learning, and full stack development.
        </p>
      </div>

      <!-- Category Filter -->
      <div class="mt-12 flex flex-wrap justify-center gap-4">
        {#each categories as category}
          <button
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 {selectedCategory === category 
              ? 'bg-darkgreen-500 text-white shadow-lg' 
              : 'bg-darkbeige-500 text-darkgreen-500 hover:bg-sage-500 hover:text-white'}"
            on:click={() => selectedCategory = category}
          >
            {category}
          </button>
        {/each}
      </div>

      <!-- Projects Grid -->
      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {#each filteredProjects as project}
          <div class="group relative bg-darkbeige-500 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105  ">
            <!-- Project Image -->
            <div class="aspect-w-16 aspect-h-9 bg-gray-200">
              <img 
                src={project.image} 
                alt={project.title}
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <!-- Project Content -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-darkgreen-500 text-white">
                  {project.category}
                </span>
              </div>
              
              <h3 class="text-lg font-semibold text-darkgreen-500 mb-2 group-hover:text-sage-500 transition-colors duration-200">
                {project.title}
              </h3>
              
              <p class="text-sm text-sage-600 mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <!-- Technologies -->
              <div class="flex flex-wrap gap-1 mb-4">
                {#each project.technologies as tech}
                  <span class="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-beige-500 text-darkgreen-500">
                    {tech}
                  </span>
                {/each}
              </div>
              
              <!-- Action Buttons -->
              <div class="flex gap-2">
                <a 
                  href={project.github} 
                  class="flex-1 inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-darkgreen-500 bg-beige-500 rounded-md hover:bg-sage-500 hover:text-white transition-colors duration-200"
                >
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                
              </div>
            </div>
          </div>
        {/each}
      </div>

      <!-- Empty State -->
      {#if filteredProjects.length === 0}
        <div class="mt-16 text-center">
          <div class="mx-auto h-12 w-12 text-sage-500">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="mt-2 text-sm font-medium text-darkgreen-500">No projects yet</h3>
          <p class="mt-1 text-sm text-sage-600">Projects will be added here soon. Check back later!</p>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  /* Custom styles for line clamping */
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style> 