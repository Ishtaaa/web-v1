<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { quadIn } from 'svelte/easing';
	import { interpolateRound } from 'd3-interpolate';
	import { page } from '$app/stores';
	import logo from './assets/bg.png';
	import SEO from '$lib/components/SEO.svelte';
	import { defaultSEO } from '$lib/seo';

	const greeting = "Hello World I'm Ishta!";
	const duration = 3000;
	const position = tweened(0, { interpolate: interpolateRound, easing: quadIn });

	onMount(() => {
		// Start the typing animation
		position.set(greeting.length, { duration: duration });
		
		// Check if we need to scroll to about section
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.get('scroll') === 'about') {
			setTimeout(() => {
				const aboutSection = document.getElementById('about');
				if (aboutSection) {
					aboutSection.scrollIntoView({ behavior: 'smooth' });
				}
			}, 100);
		}
	});
</script>

<SEO config={defaultSEO} />

<div class="bg-image-container" style="background-image: url({logo})">
	<div class="relative isolate px-6 lg:px-8">
		<div
			aria-hidden="true"
			class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
		>
			<div
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
			></div>
		</div>
		<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<div class="hidden sm:mb-8 sm:flex sm:justify-center"></div>
			<div class="text-center">
				<div class="typing-animation">
					<h1 class="text-5xl font-semibold tracking-tight text-balance text-beige-500 sm:text-7xl">
						<span class="text">{greeting.substr(0, $position)}</span>
						<span class="cursor"></span>
					</h1>
				</div>
				<p class="mt-8 text-lg font-medium text-pretty text-darkbeige-500 sm:text-xl/8">
					I am a 2nd Year CS Student at the University of Kwa-Zulu Natal and an aspiring Software
					Engineer. My interests include Mobile Development, Machine Learning and Full Stack
					Development.
				</p>
			</div>
		</div>
		<div class="flex justify-center items-center mt-8">
			<a class="flex items-center gap-2 bg-darkgreen-500 text-beige-500 px-6 py-3 rounded-lg hover:bg-sage-500 hover:text-white p-10 transition-all duration-300" href="https://www.github.com/Ishtaaa" target="_blank" rel="noopener noreferrer"> 
				<span class="font-semibold">GitHub</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
					<mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
						<g fill="#fff">
							<ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
							<ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
						</g>
					</mask>
					<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
						<path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3">
							<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0" />
						</path>
						<path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5">
							<animate attributeName="d" dur="3s" repeatCount="indefinite" values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5" />
							<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0" />
						</path>
					</g>
					<rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#lineMdGithubLoop0)">
						<animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite" values="11;11;7;7;11;11" />
					</rect>
				</svg>
			</a>
		</div>

		<div
			aria-hidden="true"
			class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
		>
			<div
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
			></div>
		</div>
	</div>
</div>

	<div id="about" class="bg-beige-500 py-24 sm:py-32">
    <div class="container mx-auto px-6">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-pretty text-sage-500">
            About Me
        </h2>
        <div class="flex justify-center items-center">
            <div class="carousel w-full max-w-4xl mx-auto overflow-hidden rounded-box space-x-4">
                <div id="slide1" class="carousel-item flex justify-center relative w-full bg-darkbeige-500 rounded-2xl hover:shadow-2xl transition-all duration-300 mx-auto">
                    <div class="flex justify-center items-center text-darkgreen-500 p-10">
                <p class="text-darkgreen-500 text-lg font-medium">
                    I'm a second-year Computer Science student at the University of KwaZulu-Natal, passionate about exploring the intersection of technology and problem-solving. As I progress through my undergraduate studies, I'm developing a strong foundation in programming, algorithms, and software development while discovering my areas of specialization within the field.
                    <br><br>
                    Beyond academics, I'm an avid film enthusiast who enjoys analyzing storytelling techniques and cinematography. Music plays a significant role in my life; whether I'm discovering new artists or revisiting classic albums, it often serves as the soundtrack to my coding sessions. I also value the collaborative and strategic thinking that comes from gaming with friends, which has actually enhanced my approach to teamwork and problem-solving in programming projects.
                    <br><br>
                    I'm always eager to learn new technologies, contribute to meaningful projects, and connect with fellow developers and tech enthusiasts. Feel free to explore my work and reach out if you'd like to collaborate or discuss anything tech-related!
                </p>
                    </div>
                    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full bg-darkbeige-500 rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden mx-auto justify-center">
				
				<div class="flex justify-center items-center text-darkgreen-500">
					<h2 class="w-full justify-center text-3xl font-semibold text-pretty text-sage-500 text-center absolute top-15 left-1/2 -translate-x-1/2">My Education</h2>
					<ul class="timeline timeline-vertical p-16">
					<li class="">
						<div class="timeline-start timeline-box bg-darkgreen-500 hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm p-6 text-beige-500">Finished High School</div>
						<div class="timeline-end font-bold font-semibold tracking-wide text-pretty text-darkgreen-500 hover:underline">2023</div>
						
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-8 w-8 text-darkgreen-500"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						
						<hr class="bg-darkgreen-500 h-3 border-0 rounded" />
					</li>
					<li class="">
						<hr class="bg-beige-500 h-3 border-0 rounded" />
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-8 w-8 text-beige-500"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="timeline-end timeline-box hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm p-6 bg-darkgreen-500 text-beige-500">Bsc Computer Science at UKZN</div>
						<div class="timeline-start font-bold font-semibold tracking-wide text-pretty text-darkgreen-500 hover:underline">Current</div>
						<hr class="bg-beige-500 h-3 border-0 rounded" />
					</li>
					<li class="">
						<hr class="bg-beige-500 h-3 border-0 rounded" />
						<div class="timeline-start timeline-box hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm p-6 bg-darkgreen-500 text-beige-500">Software Engineer</div>
						<div class="timeline-end font-bold font-semibold tracking-wide text-pretty text-darkgreen-500 hover:underline">Future</div>
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-8 w-8 text-beige-500"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</li>
				</ul>
				</div>
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" class="btn btn-circle">❮</a>
                <a href="#slide3" class="btn btn-circle">❯</a>
            </div>
        </div>

                <div id="slide3" class="carousel-item relative w-full bg-darkbeige-500 rounded-2xl hover:shadow-2xl transition-all duration-300 mx-auto">
				
				<div class="mx-auto mt-8 max-w-6xl p-10 sm:mt-12 lg:mt-16 items-center">
					<h2 class="w-full justify-center text-3xl font-semibold text-pretty text-sage-500 text-center absolute top-15 left-1/2 -translate-x-1/2">My Skills</h2>
					<dl class="grid max-w-none grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-20 p-5">
						<div class="relative pl-16">
							<a
								href="https://www.python.org/"
								class="aria text-base/7 font-semibold text-darkgreen-500 hover:underline"
							>
								<div
									class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-darkgreen-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="15"
										height="15"
										viewBox="0 0 15 15"
									>
										<path
											fill="#DAD3BE"
											d="M3 12H1.5A1.5 1.5 0 0 1 0 10.5v-5A1.5 1.5 0 0 1 1.5 4H8V3H7V2H6v1H4V1.5A1.5 1.5 0 0 1 5.5 0h4A1.5 1.5 0 0 1 11 1.5v5a.5.5 0 0 1-.5.5h-6A1.5 1.5 0 0 0 3 8.5z"
										/>
										<path
											fill="#DAD3BE"
											d="M12 3v3.5A1.5 1.5 0 0 1 10.5 8h-6a.5.5 0 0 0-.5.5v5A1.5 1.5 0 0 0 5.5 15h4a1.5 1.5 0 0 0 1.5-1.5V12H9v1H8v-1H7v-1h6.5A1.5 1.5 0 0 0 15 9.5v-5A1.5 1.5 0 0 0 13.5 3z"
										/>
									</svg>
								</div>
								Python
							</a>
							<dd class="mt-2 text-base/7 text-sage-600">
								Experience building GUIs through Tkinter library in personal projects, working with
								Pandas for data manipulation, and solid understanding of OOP principles.
							</dd>
						</div>
						<div class="relative pl-16">
							<a
								href="https://java.com"
								class="aria text-base/7 font-semibold text-darkgreen-500 hover:underline"
							>
								<div
									class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-darkgreen-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path
											fill="#DAD3BE"
											d="m15.638 4.566l.056.032c-.758.4-2.924 1.69-2.924 3.332c0 .554.317 1.088.614 1.59c.262.442.509.858.509 1.238c0 .957-.933 1.7-1.46 2.042l-.1-.058c.199-.243.444-.65.444-1.084c0-.598-.307-1.076-.618-1.561c-.322-.501-.648-1.01-.648-1.67c0-2.292 3.115-3.522 4.127-3.861m-4.095 1.212c1.253-1.12 2.622-2.344 2.622-4.185c0-.833-.341-1.365-.51-1.578L13.6.046c.04.166.1.472.1.872c0 1.676-1.422 2.85-2.798 3.988C9.611 5.974 8.36 7.008 8.36 8.392c0 1.985 1.958 3.206 2.785 3.722l.063.04l.05-.03q-.067-.074-.142-.152c-.636-.677-1.602-1.704-1.602-3.275c0-1.103.974-1.974 2.03-2.919m-.452 9.908c1.764 0 2.998-.253 3.546-.408l.832.48c-.793.403-2.551.71-4.382.71c-2.153 0-4.507-.462-4.514-1.078c-.005-.34.765-.566 1.595-.712l.05.029s-.281.101-.278.333c.004.35 1.42.646 3.15.646m-3.529 2.171c0-.407.839-.6 1.223-.677l.05.03c-.066.049-.102.116-.102.173c0 .267.93.511 2.356.511c1.278 0 1.988-.157 2.41-.258l.99.573c-.045.032-1.02.645-3.402.645c-1.731 0-3.525-.432-3.525-.997m8.529-1.728c1.18-.673 2.361-1.469 2.428-2.747c.044-.839-.727-1.454-1.57-1.29l.045-.112v-.002c.212-.064.474-.116.767-.116c.943 0 1.666.565 1.758 1.356c.186 1.586-2.062 2.618-3.321 2.973zm1.975 2.988c.01 1.09-3.698 1.738-7.012 1.767c-2.861.025-7.474-.515-7.484-1.605c-.006-.753 2-1.274 3.09-1.424l.115.065s-1.625.377-1.62 1.062c.006.683 3.425 1.274 5.894 1.253c3.825-.034 6.414-.657 6.72-1.502l.054-.031c.112.082.24.217.243.415M6.43 21.337a26 26 0 0 0 4.279.325c6.208-.054 7.96-1.58 8.23-1.912l.047.028c-.064 1.208-3.347 2.212-7.396 2.247c-2.061.018-3.937-.22-5.285-.615zm2.602-9.283c-1.079.083-3.396.426-3.396 1.036c0 .462 2.124 1.113 5.452 1.113c2.994 0 4.884-.565 5.325-.78l-.643-.375c-.46.125-2.169.506-4.682.506c-1.48 0-4.03-.273-4.03-.69c0-.374 1.591-.662 2.048-.745l.029-.005z"
										/>
									</svg>
								</div>
								Java
							</a>
							<dd class="mt-2 text-base/7 text-sage-600">
								Developing solid understanding of object-oriented programming and software
								development fundamentals through academic projects and coursework.
							</dd>
						</div>
						<div class="relative pl-16">
							<a
								href="https://flutter.dev/"
								class="aria text-base/7 font-semibold text-darkgreen-500 hover:underline"
							>
								<div
									class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-darkgreen-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path
											fill="#DAD3BE"
											d="m13.504 2.001l-10 10l3.083 3.083l13.08-13.083zm-.005 9.198l-5.376 5.42L13.496 22h6.188l-5.387-5.4l5.389-5.4z"
										/>
									</svg>
								</div>
								Flutter/Dart
							</a>
							<dd class="mt-2 text-base/7 text-sage-600">
								Building mobile apps through personal projects, incorporating API calls and applying
								fundamental programming principles in cross-platform development.
							</dd>
						</div>
						<div class="relative pl-16">
							<a
								href="https://svelte.dev/"
								class="aria text-base/7 font-semibold text-darkgreen-500 hover:underline"
							>
								<div
									class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-darkgreen-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path
											fill="#DAD3BE"
											d="M19.8 3.77a6.25 6.25 0 0 0-8.63-1.913L6.11 5.081a6.25 6.25 0 0 0-1.973 8.532a6.25 6.25 0 0 0 8.693 8.53l5.06-3.224a6.25 6.25 0 0 0 1.974-8.532A6.25 6.25 0 0 0 19.8 3.77m-1.352 5.004A6.26 6.26 0 0 0 15.65 7.5a1 1 0 0 0-1.525-1.003L9.066 9.72a1 1 0 1 0 1.075 1.686l2.109-1.343a4.25 4.25 0 1 1 4.567 7.17l-5.06 3.223a4.25 4.25 0 0 1-6.203-5.23A6.25 6.25 0 0 0 8.35 16.5a1 1 0 0 0 1.525 1.003l5.06-3.224a1 1 0 0 0-1.074-1.687l-2.109 1.344a4.25 4.25 0 0 1-4.567-7.17l5.06-3.223a4.25 4.25 0 0 1 6.203 5.23"
										/>
									</svg>
								</div>
								SvelteKit
							</a>
							<dd class="mt-2 text-base/7 text-sage-600">
								Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis.
								Id hac maecenas ac donec pharetra eget.
							</dd>
						</div>
					</dl>
				</div>
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" class="btn btn-circle">❮</a>
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="Contact Me" class="bg-beige-500 py-24 sm:py-32 flex justify-center items-center">
	<div class="py-8 lg:py-16 px-4 w-full max-w-4xl bg-darkbeige-500 rounded-2xl shadow-2xl">
		<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-pretty text-sage-500">Contact Me</h2>
		<p class="mb-8 lg:mb-16 font-light text-center text-sage-600 sm:text-xl"></p>
		<form action="https://api.web3forms.com/submit" method="POST" class="space-y-8">
			<input type="hidden" name="access_key" value="d4a1becd-fb9f-4813-9140-1413468397be">
			<div>
				<label for="full_name" class="block mb-2 text-sm font-medium text-pretty text-darkgreen-500">Your Name</label>
				<input type="name" id="name" name="name" class="shadow-sm bg-beige-500 border border-sage-500 text-darkgreen-500 text-sm rounded-lg focus:ring-darkgreen-500 focus:border-darkgreen-500 block w-full p-2.5 placeholder-sage-600" placeholder="Add full name here" required>
			</div>
			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-pretty text-darkgreen-500">Your email</label>
				<input type="email" id="email" name="email" class="shadow-sm bg-beige-500 border border-sage-500 text-darkgreen-500 text-sm rounded-lg focus:ring-darkgreen-500 focus:border-darkgreen-500 block w-full p-2.5 placeholder-sage-600" placeholder="name@example.com" required>
			</div>
			<div>
				<label for="subject" class="block mb-2 text-sm font-medium text-pretty text-darkgreen-500">Subject</label>
				<input type="text" id="subject" name="subject" class="block p-3 w-full text-sm text-darkgreen-500 bg-beige-500 rounded-lg border border-sage-500 shadow-sm focus:ring-darkgreen-500 focus:border-darkgreen-500 placeholder-sage-600" placeholder="Let us know how we can help you" required>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block mb-2 text-sm font-medium text-pretty text-darkgreen-500">Your message</label>
				<textarea id="message" name="message" rows="6" class="block p-2.5 w-full text-sm text-darkgreen-500 bg-beige-500 rounded-lg shadow-sm border border-sage-500 focus:ring-darkgreen-500 focus:border-darkgreen-500 placeholder-sage-600" placeholder="Leave a comment..."></textarea>
			</div>
			<button type="submit" class="py-3 px-5 text-sm font-medium text-center text-beige-500 rounded-lg bg-darkgreen-500 sm:w-fit hover:bg-sage-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-sage-500 transition-colors duration-200">Send message</button>
		</form>
	</div>
</div>
	
<style>
	.bg-image-container {
		background-image: logo;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		min-height: 100vh;
		position: relative;
	}

	.bg-image-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}

	.bg-image-container > * {
		position: relative;
		z-index: 2;
	}

	.typing-animation {
		display: inline-block;
		position: relative;
	}

	.typing-animation .text {
		display: inline;
	}

	.cursor {
		display: inline-block;
		width: 4px;
		height: 1.2em;
		margin-left: 2px;
		background-color: blanchedalmond;
		animation: blink 0.8s infinite;
		vertical-align: text-bottom;
	}

	@keyframes blink {
		0% {
			background-color: transparent;
		}
		40% {
			background-color: rgba(78, 52, 18, 0.699);
		}
		100% {
			background-color: rgb(72, 52, 18);
		}
	}
</style>


<!-- <div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="flex min-h-screen justify-center rounded-2xl bg-darkbeige-500 px-6">
	
			<div class="mx-auto max-w-2xl p-15 lg:text-center">
				<h2
					class="p-10 text-5xl font-bold font-semibold tracking-wide text-pretty text-darkgreen-500 hover:underline"
				>
					About Me
				</h2>
				<hr class=" rounded-full border border-beige-500" />
				<div class="flex justify-center text-darkgreen-500 p-15">
					I'm a second-year Computer Science student at the University of KwaZulu-Natal, passionate about exploring the intersection of technology and problem-solving. As I progress through my undergraduate studies, I'm developing a strong foundation in programming, algorithms, and software development while discovering my areas of specialization within the field.
					
					Beyond academics, I'm an avid film enthusiast who enjoys analyzing storytelling techniques and cinematography. Music plays a significant role in my life; whether I'm discovering new artists or revisiting classic albums, it often serves as the soundtrack to my coding sessions. I also value the collaborative and strategic thinking that comes from gaming with friends, which has actually enhanced my approach to teamwork and problem-solving in programming projects.
					
					 I'm always eager to learn new technologies, contribute to meaningful projects, and connect with fellow developers and tech enthusiasts. Feel free to explore my work and reach out if you'd like to collaborate or discuss anything tech-related!
				</div>
        <hr class=" rounded-full border border-beige-500" />
				<h2 class="p-5 text-3xl font-semibold text-pretty text-sage-500">My Education</h2>

				<ul class="timeline timeline-vertical p-16">
					<li class="">
						<div class="timeline-start timeline-box bg-darkgreen-500 hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm p-6 text-beige-500">Finished High School</div>
						<div class="timeline-end font-bold font-semibold tracking-wide text-pretty text-darkgreen-500 hover:underline">2023</div>
						
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-8 w-8 text-darkgreen-500"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						
						<hr class="bg-darkgreen-500 h-3 border-0 rounded" />
					</li>
					<li class="">
						<hr class="bg-beige-500 h-3 border-0 rounded" />
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-8 w-8 text-beige-500"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="timeline-end timeline-box hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm p-6 bg-darkgreen-500 text-beige-500">Bsc Computer Science at UKZN</div>
						<div class="timeline-start font-bold font-semibold tracking-wide text-pretty text-darkgreen-500 hover:underline">Current</div>
						<hr class="bg-beige-500 h-3 border-0 rounded" />
					</li>
					<li class="">
						<hr class="bg-beige-500 h-3 border-0 rounded" />
						<div class="timeline-start timeline-box hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm p-6 bg-darkgreen-500 text-beige-500">Software Engineer</div>
						<div class="timeline-end font-bold font-semibold tracking-wide text-pretty text-darkgreen-500 hover:underline">Future</div>
						<div class="timeline-middle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-8 w-8 text-beige-500"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</li>
				</ul>

				<hr class=" rounded-full border border-beige-500" />

				<h2 class="p-5 text-3xl font-semibold text-pretty text-sage-500">My Skills</h2>
				<div class="mx-auto mt-8 max-w-6xl p-10 sm:mt-12 lg:mt-16">
					<dl class="grid max-w-none grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-20">
						<div class="relative pl-16">
							<a
								href="https://www.python.org/"
								class="aria text-base/7 font-semibold text-darkgreen-500 hover:underline"
							>
								<div
									class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-darkgreen-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="15"
										height="15"
										viewBox="0 0 15 15"
									>
										<path
											fill="#DAD3BE"
											d="M3 12H1.5A1.5 1.5 0 0 1 0 10.5v-5A1.5 1.5 0 0 1 1.5 4H8V3H7V2H6v1H4V1.5A1.5 1.5 0 0 1 5.5 0h4A1.5 1.5 0 0 1 11 1.5v5a.5.5 0 0 1-.5.5h-6A1.5 1.5 0 0 0 3 8.5z"
										/>
										<path
											fill="#DAD3BE"
											d="M12 3v3.5A1.5 1.5 0 0 1 10.5 8h-6a.5.5 0 0 0-.5.5v5A1.5 1.5 0 0 0 5.5 15h4a1.5 1.5 0 0 0 1.5-1.5V12H9v1H8v-1H7v-1h6.5A1.5 1.5 0 0 0 15 9.5v-5A1.5 1.5 0 0 0 13.5 3z"
										/>
									</svg>
								</div>
								Python
							</a>
							<dd class="mt-2 text-base/7 text-sage-600">
								Experience building GUIs through Tkinter library in personal projects, working with
								Pandas for data manipulation, and solid understanding of OOP principles.
							</dd>
						</div>
						<div class="relative pl-16">
							<a
								href="https://java.com"
								class="aria text-base/7 font-semibold text-darkgreen-500 hover:underline"
							>
								<div
									class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-darkgreen-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path
											fill="#DAD3BE"
											d="m15.638 4.566l.056.032c-.758.4-2.924 1.69-2.924 3.332c0 .554.317 1.088.614 1.59c.262.442.509.858.509 1.238c0 .957-.933 1.7-1.46 2.042l-.1-.058c.199-.243.444-.65.444-1.084c0-.598-.307-1.076-.618-1.561c-.322-.501-.648-1.01-.648-1.67c0-2.292 3.115-3.522 4.127-3.861m-4.095 1.212c1.253-1.12 2.622-2.344 2.622-4.185c0-.833-.341-1.365-.51-1.578L13.6.046c.04.166.1.472.1.872c0 1.676-1.422 2.85-2.798 3.988C9.611 5.974 8.36 7.008 8.36 8.392c0 1.985 1.958 3.206 2.785 3.722l.063.04l.05-.03q-.067-.074-.142-.152c-.636-.677-1.602-1.704-1.602-3.275c0-1.103.974-1.974 2.03-2.919m-.452 9.908c1.764 0 2.998-.253 3.546-.408l.832.48c-.793.403-2.551.71-4.382.71c-2.153 0-4.507-.462-4.514-1.078c-.005-.34.765-.566 1.595-.712l.05.029s-.281.101-.278.333c.004.35 1.42.646 3.15.646m-3.529 2.171c0-.407.839-.6 1.223-.677l.05.03c-.066.049-.102.116-.102.173c0 .267.93.511 2.356.511c1.278 0 1.988-.157 2.41-.258l.99.573c-.045.032-1.02.645-3.402.645c-1.731 0-3.525-.432-3.525-.997m8.529-1.728c1.18-.673 2.361-1.469 2.428-2.747c.044-.839-.727-1.454-1.57-1.29l.045-.112v-.002c.212-.064.474-.116.767-.116c.943 0 1.666.565 1.758 1.356c.186 1.586-2.062 2.618-3.321 2.973zm1.975 2.988c.01 1.09-3.698 1.738-7.012 1.767c-2.861.025-7.474-.515-7.484-1.605c-.006-.753 2-1.274 3.09-1.424l.115.065s-1.625.377-1.62 1.062c.006.683 3.425 1.274 5.894 1.253c3.825-.034 6.414-.657 6.72-1.502l.054-.031c.112.082.24.217.243.415M6.43 21.337a26 26 0 0 0 4.279.325c6.208-.054 7.96-1.58 8.23-1.912l.047.028c-.064 1.208-3.347 2.212-7.396 2.247c-2.061.018-3.937-.22-5.285-.615zm2.602-9.283c-1.079.083-3.396.426-3.396 1.036c0 .462 2.124 1.113 5.452 1.113c2.994 0 4.884-.565 5.325-.78l-.643-.375c-.46.125-2.169.506-4.682.506c-1.48 0-4.03-.273-4.03-.69c0-.374 1.591-.662 2.048-.745l.029-.005z"
										/>
									</svg>
								</div>
								Java
							</a>
							<dd class="mt-2 text-base/7 text-sage-600">
								Developing solid understanding of object-oriented programming and software
								development fundamentals through academic projects and coursework.
							</dd>
						</div>
						<div class="relative pl-16">
							<a
								href="https://flutter.dev/"
								class="aria text-base/7 font-semibold text-darkgreen-500 hover:underline"
							>
								<div
									class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-darkgreen-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path
											fill="#DAD3BE"
											d="m13.504 2.001l-10 10l3.083 3.083l13.08-13.083zm-.005 9.198l-5.376 5.42L13.496 22h6.188l-5.387-5.4l5.389-5.4z"
										/>
									</svg>
								</div>
								Flutter/Dart
							</a>
							<dd class="mt-2 text-base/7 text-sage-600">
								Building mobile apps through personal projects, incorporating API calls and applying
								fundamental programming principles in cross-platform development.
							</dd>
						</div>
						<div class="relative pl-16">
							<a
								href="https://svelte.dev/"
								class="aria text-base/7 font-semibold text-darkgreen-500 hover:underline"
							>
								<div
									class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-darkgreen-500"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path
											fill="#DAD3BE"
											d="M19.8 3.77a6.25 6.25 0 0 0-8.63-1.913L6.11 5.081a6.25 6.25 0 0 0-1.973 8.532a6.25 6.25 0 0 0 8.693 8.53l5.06-3.224a6.25 6.25 0 0 0 1.974-8.532A6.25 6.25 0 0 0 19.8 3.77m-1.352 5.004A6.26 6.26 0 0 0 15.65 7.5a1 1 0 0 0-1.525-1.003L9.066 9.72a1 1 0 1 0 1.075 1.686l2.109-1.343a4.25 4.25 0 1 1 4.567 7.17l-5.06 3.223a4.25 4.25 0 0 1-6.203-5.23A6.25 6.25 0 0 0 8.35 16.5a1 1 0 0 0 1.525 1.003l5.06-3.224a1 1 0 0 0-1.074-1.687l-2.109 1.344a4.25 4.25 0 0 1-4.567-7.17l5.06-3.223a4.25 4.25 0 0 1 6.203 5.23"
										/>
									</svg>
								</div>
								SvelteKit
							</a>
							<dd class="mt-2 text-base/7 text-sage-600">
								Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis.
								Id hac maecenas ac donec pharetra eget.
							</dd>
						</div>
					</dl>
				</div>

				<hr class="rounded-full border border-beige-500" />
			</div>
		</div>
	</div>-->