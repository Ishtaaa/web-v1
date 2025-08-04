<script lang="ts">
  import {goto} from '$app/navigation';
  import { page } from '$app/stores';
  
  $: currentPath = $page.url.pathname;
  $: isProjectsPage = currentPath === '/projects';
  
  function redirectToHomepage() {
    if (currentPath !== '/') {
      goto('/');
    }
  }
  
  function scrollToAbout() {
   
    if (currentPath !== '/') {
      goto('/');
    
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {

      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
</script>
<header class="absolute inset-x-0 top-0 z-50 {isProjectsPage ? 'bg-darkgreen-500/90 backdrop-blur-sm rounded' : ''}">
  <nav aria-label="Global" class="flex items-center justify-center p-6 lg:px-8">
    <div class="hidden lg:flex lg:gap-x-12 lg:justify-center lg:flex-1">
      <button on:click={redirectToHomepage} class="text-sm/6 font-semibold text-beige-500 hover:text-darkbeige-500 hover:underline ">Home</button>
      <button on:click={scrollToAbout} class="text-sm/6 font-semibold text-beige-500 hover:text-darkbeige-500 hover:underline">About Me</button>
      <a href="/projects" class="text-sm/6 font-semibold text-beige-500 hover:text-darkbeige-500 hover:underline">Projects</a>
    </div>
  </nav>
</header>