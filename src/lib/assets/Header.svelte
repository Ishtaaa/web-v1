<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	
	$: currentPath = $page.url.pathname;
	$: isProjectsPage = currentPath === '/projects';
	$: isGamesPage = currentPath === '/games';

	function redirectToHomepage() {
		if (currentPath !== '/') {
			goto('/');
		}
	}

	function isHomePage(){
		return currentPath === '/';
	}

	function scrollToAbout() {
		if (currentPath !== '/') {
			goto('/?scroll=about');
		} else {
			scrollToAboutSection();
		}
	}

	function scrollToAboutSection() {
		const aboutSection = document.getElementById('about');
		if (aboutSection) {
			aboutSection.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function scrollToContact() {
		redirectToHomepage();
		const contactSection = document.getElementById('Contact Me');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<header class="sticky top-0 z-50">
	<div class="navbar bg-darkgreen-500 shadow-sm rounded">
		<div class="navbar-start">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
					<li>
						<button
							on:click={redirectToHomepage}
							class="text-beige-500 hover:text-darkbeige-500 hover:bg-beige-500 "
						>
							Home
						</button>
					</li>
					<li>
						<button
							on:click={scrollToAbout}
							class="text-beige-500 hover:text-darkbeige-500 hover:bg-beige-500"
						>
							About Me
						</button>
					</li>
					<li>
						<a
							href="/projects"
							class="text-beige-500 hover:text-darkbeige-500 hover:bg-beige-500 {isProjectsPage ? 'bg-beige-500 text-darkbeige-500' : ''}"
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="#contact"
							class="text-beige-500 hover:text-darkbeige-500 hover:bg-beige-500"
						>
							Contact Me
						</a>
					</li>
					<li>
						<a
							href="/games"
							class="text-beige-500 hover:text-darkbeige-500 hover:bg-beige-500 {isGamesPage ? 'bg-beige-500 text-darkbeige-500' : ''}"
						>
							Games
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li>
					<button
						on:click={redirectToHomepage}
						class="text-beige-500 hover:text-darkbeige-500 hover:bg-beige-500"
					>
						Home
					</button>
				</li>
				<li>
					<button
						on:click={scrollToAbout}
						class="text-beige-500 hover:text-darkbeige-500 hover:bg-beige-500"
					>
						About Me
					</button>
				</li>
				<li>
					<a
						href="/projects"
						class="text-beige-500 hover:text-darkbeige-500 hover:bg-beige-500 {isProjectsPage ? 'bg-sage-500 text-beige-500' : ''}"
					>
						Projects
					</a>
				</li>
				<li>
					<button
						on:click={scrollToContact}
						class="text-beige-500 hover:text-darkbeige-500 hover:bg-beige-500"
					>
						Contact Me
					</button>
				</li>
				<li>
					<a
						href="/games"
						class="text-beige-500 hover:text-darkbeige-500 hover:bg-beige-500 {isGamesPage ? 'bg-sage-500 text-beige-500' : ''}"
					>
						Games
					</a>
				</li>
			</ul>
		</div>
		<div class="navbar-end"></div>
	</div>
</header>
