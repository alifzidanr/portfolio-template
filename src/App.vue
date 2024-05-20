<template>
  <div> 
    
  <div class="background-container">
    <img src="@/assets/devlab.jpg" alt="Background Image" class="absolute inset-0 w-full h-full object-cover z-0" />
    <div class="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h1 class="text-3xl mb-14 mt-5 sm:mt-20 lg:text-4xl lg:mb-10 lg:mt-20 font-semibold main-heading">Hello, I am-</h1>

      <h2 class="text-5xl mb-16 leading-none sm:text-3xl lg:text-7xl lg:mb-14 font-semibold sub-heading">Alif Zidan</h2>

      <div class="container font-semibold text-2xl lg:text-3xl text-center mobile-text mb-8" id="typewriter">

      </div>
      <button type="button" onclick="window.open('https://drive.google.com/file/d/1YfHb1vyeqyt2TsU3bOlTBoomb3OtOs-3/view?usp=sharing', '_blank')" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-10 mb-2">Resume</button>
    </div>
  </div>


    <!-- Navigation bar -->
    <nav :class="{ 'active': isNavOpen, 'navbar-solid': hasScrolled }" class="text-gill-sans font-bold fixed w-full z-50 transition-colors duration-300">
      <div class="container mx-auto flex items-center justify-between px-4 py-4">
        <!-- Burger menu button -->
        <div class="lg:hidden flex items-center navbar-burger-container">
            <button @click="toggleNav" class="navbar-burger flex items-center text-white p-3">
                <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>
        </div>
          <div class="container-flex">
            <div class="flex items-center custom-style">
              <div class="logo-container" @click="scrollToTop">
                <img src="@/assets/logoB.png" alt="Logo B">
              </div>
              <router-link to="/" @click="scrollToTop" class="text-xl font-bold router-link">Alif Zidan</router-link>
            </div>
          </div>

        <!-- Navigation links -->
        <div class="hidden sm:flex items-center justify-center flex-grow">
          <ul class="custom-ul">
            <li><a @click="scrollToTop" :class="{ 'active': activeSection === null }">Home</a></li>
            <li><a @click="scrollToSection('about')" :class="{ 'active': activeSection === 'about' }">About</a></li>
            <li><a @click="scrollToSection('education')" :class="{ 'active': activeSection === 'education' }">Education</a></li>
            <li><a @click="scrollToSection('experience')" :class="{ 'active': activeSection === 'experience' }">Experience</a></li>
            <li><a @click="scrollToSection('projects')" :class="{ 'active': activeSection === 'projects' }">Projects</a></li>
            <li><a @click="scrollToSection('skills')" :class="{ 'active': activeSection === 'skills' }">Skills</a></li>
            <li><a @click="scrollToSection('contact')" :class="{ 'active': activeSection === 'contact' }">Find Me!</a></li>
          </ul>
        </div>
      </div>
    </nav>
    
      <!-- Mobile Menu -->
      <div v-if="isNavOpen" class="navbar-menu relative z-50">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" @click="toggleNav"></div>
        <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
        <!-- Alif Zidan logo -->
      <div class="flex items-center mb-6">
        <router-link to="/" @click="scrollToTopAndCloseNav" class="logo-link">
          <img src="@/assets/logoA.png" alt="Alif Zidan Logo" class="logo-image" width="20" height="20" />
        </router-link>
      </div>



        <button @click="toggleNav" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 close-button absolute top-0 right-0">
          <span class="sr-only">Close menu</span>
          <!-- Heroicon name: outline/x -->
          <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>


    <!-- Navigation links -->
    <ul class="nav-menu-mobile">
      <li><a @click="scrollToSection('about')" :class="{ 'active': activeSection === 'about' }">About</a></li>
      <li><a @click="scrollToSection('education')" :class="{ 'active': activeSection === 'education' }">Education</a></li>
      <li><a @click="scrollToSection('experience')" :class="{ 'active': activeSection === 'experience' }">Experience</a></li>
      <li><a @click="scrollToSection('projects')" :class="{ 'active': activeSection === 'projects' }">Projects</a></li>
      <li><a @click="scrollToSection('skills')" :class="{ 'active': activeSection === 'skills' }">Skills</a></li>
      <li><a @click="scrollToSection('contact')" :class="{ 'active': activeSection === 'contact' }">Find Me!</a></li>
    </ul>
  </nav>
</div>

    <!-- Main Content -->
    <div class="main-content bg-main-content-bgcolor py-20 sm:py-0">
      <div class="container mx-auto px-4">
      
        <div id="about" ref="about" class="section"><About /></div>
        <div id="education" ref="education" class="section"><Education /></div>
        <div id="experience" ref="experience" class="section"><Experience /></div>
        <div id="projects" ref="projects" class="section"><Projects /></div>
        <div id="skills" ref="skills" class="section"><Skills /></div>
        <div id="contact" ref="contact" class="section"><Contact /></div>
      </div>
    </div>
  </div>

<button v-if="showScrollButton && !isScrollToTopClicked && activeSection !== 'about' && activeSection !== 'education'" @click="scrollToTop" class="scroll-to-top fixed bottom-4 right-4 bg-gray-800 text-white p-1 rounded-full shadow">
  <div class="rounded-full bg-gray-800 p-1">
    <svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  </div>
</button>





</template>


<script>
import { startTypewriterEffect } from './components/typewriter.js';
import About from './components/About.vue';
import Education from './components/Education.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
   
    About,
    Education,
    Experience,
    Projects,
    Skills,
    Contact
  },
  data() {
    return {
      activeSection: null,
      isNavOpen: false,
      isScrollToTopClicked: false,
      showScrollButton: false, 
      hasScrolled: false 
    };
  },
  methods: {
    scrollToSection(section) {
      const targetElement = document.getElementById(section);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 30; 
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        this.activeSection = section;
        this.isNavOpen = false;

        // Reset isScrollToTopClicked if the section is not 'about' or 'education'
        if (section !== 'about' && section !== 'education') {
          this.isScrollToTopClicked = false;
        }
      }
    },
    detectActiveSection() {
  const scrollPosition = window.scrollY;
  const sections = ['about', 'education', 'experience', 'projects', 'skills', 'contact'];
  let educationPassed = false;
  let showScrollButton = false;

  for (const section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const top = el.offsetTop - 30;
      const bottom = top + el.clientHeight;
      if (scrollPosition >= top && scrollPosition < bottom) {
        this.activeSection = section;
        if (section === 'education') {
          educationPassed = true;
        }
        if (section !== 'about' && section !== 'education') {
          showScrollButton = true;
        }
        break;
      }
    }
  }

  // Update showScrollButton based on educationPassed and current scroll position
  this.showScrollButton = showScrollButton || (educationPassed && scrollPosition >= 600);

  // Update hasScrolled based on scroll position
  this.hasScrolled = scrollPosition > window.innerHeight;
},

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      this.activeSection = null; // Nullify the active section
      setTimeout(() => {
        this.detectActiveSection(); // Detect the active section after scrolling to the top
      }, 200);
      this.isScrollToTopClicked = true; // Set the flag to indicate scroll to top button is clicked
    },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    scrollToTopAndCloseNav() {
      this.scrollToTop();
      this.isNavOpen = false;
    }
  },
  mounted() {
    this.detectActiveSection(); // Detect active section on mount
    window.addEventListener('scroll', this.detectActiveSection);

     // Add the following event listener for scrolling detection
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      // Set hasScrolled based on the scroll position
      this.hasScrolled = scrollPosition > 0; // Adjust the threshold as needed
    });

    // Burger menus
    document.addEventListener('DOMContentLoaded', () => {
      // open
      const burger = document.querySelectorAll('.navbar-burger');
      const menu = document.querySelectorAll('.navbar-menu');

      if (burger.length && menu.length) {
        for (let i = 0; i < burger.length; i++) {
          burger[i].addEventListener('click', () => {
            for (let j = 0; j < menu.length; j++) {
              // Check if the screen size is mobile (max-width: 767px)
              if (window.innerWidth <= 767) {
                menu[j].classList.toggle('hidden');
              }
            }
          });
        }
      }

      // close
      const close = document.querySelectorAll('.navbar-close');
      const backdrop = document.querySelectorAll('.navbar-backdrop');

      if (close.length) {
        for (let i = 0; i < close.length; i++) {
          close[i].addEventListener('click', () => {
            for (let j = 0; j < menu.length; j++) {
              // Check if the screen size is mobile (max-width: 767px)
              if (window.innerWidth <= 767) {
                menu[j].classList.toggle('hidden');
              }
            }
          });
        }
      }

      if (backdrop.length) {
        for (let i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener('click', () => {
            for (let j = 0; j < menu.length; j++) {
              // Check if the screen size is mobile (max-width: 767px)
              if (window.innerWidth <= 767) {
                menu[j].classList.toggle('hidden');
              }
            }
          });
        }
      }
    });

    startTypewriterEffect(
      ["Web-Mobile Dev", "Responsive Design", "Embrace Simplicity"],
      "typewriter",
      100
    );
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.detectActiveSection);
  },
  unmounted() {
    window.removeEventListener('scroll', this.detectActiveSection);
  }
};
</script>



<style>

</style>


