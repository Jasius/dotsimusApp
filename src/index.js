import "./styles.css";
import investigationsImg from './images/investigations.png'
import trackingImg from './images/trackCommand.png'
import rulesImg from './images/rulesCmd.png'
import slashCmdsImg from './images/slashCmd.png'

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.querySelector("html").classList.add("dark");
} else {
  document.querySelector("html").classList.remove("dark");
}

document.addEventListener('DOMContentLoaded', function () {
  const navMenu = Array.prototype.slice.call(document.querySelectorAll('.navmenu'), 0);
  if (navMenu.length > 0) {
    navMenu.forEach(function (element) {
      element.addEventListener('click', function () {
        const primaryNav = document.getElementById('mainNav');
        primaryNav.classList.toggle('hidden');
      });
    });
  }
})

// localStorage.theme = "light";
// localStorage.theme = "dark";
// localStorage.removeItem("theme");

document.getElementById("app").innerHTML = `
<header>

        <div class="py-4 px-2 lg:mx-4 xl:mx-12 ">
            <div class="">
                <nav class="flex items-center justify-between flex-wrap  ">
                    <div class="flex items-center flex-no-shrink text-white mr-6 ">
                        <div class="text-sm lg:flex-grow mt-2 text-black title-font text-base">Dotsimus</div>
                    </div>
                    <div class="block lg:hidden">
                        <button
                            class="navmenu flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                            <svg class="fill-current h-6 w-6 text-gray-700" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div id="mainNav" class="w-full flex-grow lg:flex items-center lg:w-auto hidden  ">
                        <div class="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
                            <a href="http://invite.dotsimus.com" target="_blank" class="block lg:inline-block text-md font-bold  text-gray-900 hover:text-gray-700 mx-2 focus:text-gray-700 mx-2  p-1 rounded-lg">
                                Discord server
                            </a>
                            <a href="http://invite.dotsimus.com" target="_blank" class="block lg:inline-block text-md font-bold  text-gray-900 hover:text-gray-700 mx-2 focus:text-gray-700  p-1 rounded-lg">
                                Add to Discord
                            </a>
                            <a href="http://invite.dotsimus.com" target="_blank" class="block lg:inline-block text-md font-bold  text-gray-900 hover:text-gray-700 mx-2 focus:text-gray-700  p-1 rounded-lg">
                                Submit a review
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
  
</header>
<section class="bg-gradient-to-b from-gray-300">
    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium	 text-black font-sans">
                Cherish safety of your community with Dotsimus!
            </h1>
            <p class="leading-relaxed mb-8 font-normal">
            Dotsimus is a machine learning powered chat moderation bot, its primary goal is to help monitor, protect the server while its secondary goal is to enhance user experience.
            </p>
            <div class="flex justify-center">
                <button class="w-full sm:w-auto inline-flex items-center justify-center bg-black hover:bg-gray-700 font-medium leading-none text-white rounded-lg shadow-sm py-3 px-5 mr-5 ease-in-out duration-200">
                    Add to Discord
                </button>
                <a href="#premiumJumplink">
                <button class="w-full sm:w-auto inline-flex items-center justify-center font-medium bg-white text-black bg-opacity-20 hover:bg-gray-200 rounded-lg shadow-sm py-3 px-5 ease-in-out duration-200">
                    Get Premium
                </button>
                </a>
            </div>
        </div>
    </div>
</section>
<section class="text-black">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Automated moderation.
            </h1>
            <p class="mb-8 leading-relaxed">Machine learning powered moderation brings misbehaving, toxic users to moderators attention quicker than you can say hop.</p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" alt="hero" src=${investigationsImg}>
        </div>
    </div>
</section>
<section class="text-black">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 ">
            <img class="object-cover object-center rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" alt="hero" src=${trackingImg}>
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Track topics, names or keywords,stay in the loop of things!
            </h1>
            <p class="mb-8 leading-relaxed">Keywords tracking will make sure that you know whenever you're mentioned and missed! It can also be used to track topics that you find interesting.</p>
        </div>
    </div>
</section>

<section class="text-black">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Point users to rules easily!
            </h1>
            <p class="mb-8 leading-relaxed">Dotsimus allows you to guide new users through rules without hitting them with a wall of text.</p>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" alt="hero" src=${rulesImg}>
        </div>
    </div>
</section>

<section class="text-black">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img class="object-cover object-center rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" alt="hero" src=${slashCmdsImg}>
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">One of the very first public bots to support slash commands.
            </h1>
            <p class="mb-8 leading-relaxed">What more there is to say? Slash commands makes our lives a lot easier.</p>
        </div>
    </div>
</section>

<section>
    <div class="container max-w-full mx-auto py-24 px-6">
        <a id="premiumJumplink">
        <h1 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">
            Pricing
        </h1>
        </a>
        <p class="text-center text-lg text-gray-700 mt-2 px-6">
            Just like with Pokemons, you get to choose who to bring into a battle!
        </p>
        <div class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

        <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div class="relative block flex flex-col md:flex-row items-center">
                <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
                    <div class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                        <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                            <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                                Dotsimus
                            </h1>
                            <h2 class="text-sm text-gray-500 text-center pb-6">FREE</h2>
                            Dotsimus brings a unique set of feature to improve engagement and enhance user experience.
                        </div>

                        <div class="flex flex-wrap mt-3 px-6">
                            <ul>
                                <li class="flex items-center">
                                    <div class="rounded-full p-2 fill-current text-red-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Automated moderation</span>
                                </li>
                                <li class="flex items-center">
                                    <div class="rounded-full p-2 fill-current text-red-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Extended support</span>
                                </li>
                                <li class="flex items-center">
                                    <div class=" rounded-full p-2 fill-current text-green-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Rules feature</span>
                                </li>
                                <li class="flex items-center">
                                    <div class=" rounded-full p-2 fill-current text-green-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Keywords tracking</span>
                                </li>
                                <li class="flex items-center">
                                    <div class=" rounded-full p-2 fill-current text-green-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Utility commands</span>
                                </li>
                            </ul>
                        </div>
                        <div class="block flex items-center p-8  uppercase">
                            <button class="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700 ease-in-out duration-200">
                                Select
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
                    <div class="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
                        Recommended
                    </div>
                    <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                        <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                            Premium
                        </h1>
                        <h2 class="text-sm text-gray-500 text-center pb-6"><span class="text-3xl">€1</span> /mo</h2>

                        Dotsimus Premium offers everything needed to grow and nurture your community up to 45k<sup>1</sup> members.
                    </div>
                    <div class="flex pl-12 justify-start sm:justify-start mt-3">
                        <ul>

                            <li class="flex items-center">
                                <div class="rounded-full p-2 fill-current text-green-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span class="text-gray-700 text-lg ml-3">Automated moderation<sup>1</sup></span>
                            </li>
                            <li class="flex items-center">
                                <div class=" rounded-full p-2 fill-current text-green-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span class="text-gray-700 text-lg ml-3">Rules feature</span>
                            </li>
                            <li class="flex items-center">
                                <div class=" rounded-full p-2 fill-current text-green-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span class="text-gray-700 text-lg ml-3">Keywords tracking</span>
                            </li>
                            <li class="flex items-center">
                                <div class=" rounded-full p-2 fill-current text-green-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span class="text-gray-700 text-lg ml-3">Extended support</span>
                            </li>
                            <li class="flex items-center">
                                <div class=" rounded-full p-2 fill-current text-green-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span class="text-gray-700 text-lg ml-3">Utility commands</span>
                            </li>
                        </ul>
                    </div>

                    <div class="block flex items-center p-8  uppercase">
                        <button class="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700 ease-in-out duration-200">
                            Select
                        </button>
                    </div>
                </div>
                <div class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                    <div class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                        <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                            <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                                Premium+
                            </h1>
                            <h2 class="text-sm text-gray-500 text-center pb-6">€3 /mo</h2>
                            Dotsimus Premium+ offers all the previous perks plus support for servers with more than 45k members.
                        </div>
                        <div class="flex flex-wrap mt-3 px-6">
                            <ul>
                                <li class="flex items-center">
                                    <div class="rounded-full p-2 fill-current text-green-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Automated moderation</span>
                                </li>
                                <li class="flex items-center">
                                    <div class=" rounded-full p-2 fill-current text-green-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Rules feature</span>
                                </li>
                                <li class="flex items-center">
                                    <div class=" rounded-full p-2 fill-current text-green-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Keywords tracking</span>
                                </li>
                                <li class="flex items-center">
                                    <div class=" rounded-full p-2 fill-current text-green-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Extended support</span>
                                </li>
                                <li class="flex items-center">
                                    <div class=" rounded-full p-2 fill-current text-green-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span class="text-gray-700 text-lg ml-3">Utility commands</span>
                                </li>
                            </ul>
                        </div>
                        <div class="block flex items-center p-8  uppercase">
                            <button class="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700 ease-in-out duration-200">
                                Select
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;
