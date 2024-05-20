<template>
  <div class="section-flex flex-col md:flex-row items-start justify-center">
    <div class="section-title">
        <h2>About</h2>
      </div>
    <div class="container mx-auto flex flex-col md:flex-row items-center md:items-start"> <!-- Added items-center for mobile view -->
      <!-- Profile image with modified height -->
      <img src="@/assets/pp.png" alt="Profile Picture" class="profile-picture rounded-lg mr-8 md:mr-8 mb-4 md:mb-0"> <!-- Updated margin for responsive -->
      <div class="text-container bg-slate-900 p-4 rounded-lg flex-1">
        <p class="font-medium text-gray-300">
          Hey there! I'm a junior web developer on a journey from "Hello World" to more complex projects, fueled by a passion for creating digital experiences. Whether it's crafting designs with HTML and CSS or adding functionality with JavaScript, I'm all in. Excited to connect with fellow enthusiasts, let's share ideas and learn together. Your feedback is truly valued as I navigate the dynamic world of web development. Let's make something awesome together! 🌐💻🚀
        </p>
      </div>
    </div>

<div class="section-title mt-10">
    <h2>Interests</h2>
</div>



<div id="accordion-open" data-accordion="open">
  <h2 id="accordion-open-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
      <span class="flex items-center">
        <img src="@/assets/icons8-web-development-48.png" alt="Web Development Icon" style="width: 28px; height: 28px; margin-right: 10px;">
        Web Development
      </span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-1" class="hidden bg-gray-100 dark:bg-gray-800" aria-labelledby="accordion-open-heading-1">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p class="mb-2 text-gray-700 dark:text-gray-300">As my accordion stretches wide, it reflects my passion for web development, where I craft virtual spaces that are both functional and visually captivating. From designing responsive layouts to implementing dynamic content, each fold represents a layer of expertise dedicated to creating immersive online experiences.</p>
    </div>
  </div>
  <h2 id="accordion-open-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
      <span class="flex items-center">
        <img src="@/assets/icons8-mobile-app-64.png" alt="Mobile Phone Icon" style="width: 35px; height: 35px; margin-right: 8px; margin-left: -3px">
        Mobile App Development
      </span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-2" class="hidden bg-gray-100 dark:bg-gray-800" aria-labelledby="accordion-open-heading-2">
    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-700 dark:text-gray-300">With each squeeze of the bellows, my enthusiasm for mobile app development resonates. I thrive on the challenge of transforming ideas into sleek, user-friendly applications that resonate with modern users. Every fold of my accordion symbolizes the attention to detail and precision required to deliver seamless mobile experiences across various platforms and devices.</p>
    </div>
  </div>
  <h2 id="accordion-open-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
      <span class="flex items-center">
        <img src="@/assets/icons8-ux-48.png" alt="UX Icon" style="width: 30px; height: 30px; margin-right: 8px; margin-left: -2px;">
        User Interface/Experience
      </span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-3" class="hidden bg-gray-100 dark:bg-gray-800" aria-labelledby="accordion-open-heading-3">
    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-700 dark:text-gray-300">The intricate patterns adorning my accordion mirror my dedication to user interface and experience design. With a keen eye for aesthetics and usability, I meticulously craft interfaces that not only look stunning but also provide intuitive navigation and meaningful interactions. Each fold represents a commitment to elevating user satisfaction and engagement through thoughtful design.</p>
    </div>
  </div>
  <h2 id="accordion-open-heading-4">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-4" aria-expanded="false" aria-controls="accordion-open-body-4">
      <span class="flex items-center">
        <img src="@/assets/middleware.png" alt="Middleware Integration Icon" style="width: 30px; height: 30px; margin-right: 8px; margin-left: -2px">
        Middleware Integration
      </span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-4" class="hidden bg-gray-100 dark:bg-gray-800 rounded-tl-lg rounded-tr-lg" aria-labelledby="accordion-open-heading-4">
    <div class="p-5 border border-gray-200 dark:border-gray-700">
      <p class="mb-2 text-gray-700 dark:text-gray-300">As I extend and compress my accordion, it echoes my expertise in middleware integration, the unseen force behind seamless digital interactions. Like the unseen mechanisms within my instrument, I specialize in weaving together disparate systems and technologies, ensuring they harmonize effortlessly to deliver cohesive digital solutions. With each integration, I bridge gaps and streamline processes, allowing information to flow smoothly across interconnected platforms.</p>
    </div>
  </div>
</div>


  </div>
</template>


<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      isAccordionOpen: {
        'accordion-open-body-1': true,
      }
    }
  },
  methods: {
    toggleAccordion(accordionId) {
      this.$set(this.isAccordionOpen, accordionId, !this.isAccordionOpen[accordionId]);
    }
  }
};
</script>

<style scoped>
.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #dee2e6;
  font-family: "Poppins", sans-serif;
}
.section-title h2 {
  font-size: 14px;
  font-weight: 600;
  padding: 0;
  line-height: 1px;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000000;
  font-family: "Poppins", sans-serif;
}

.section-title h2::after {
  content: "";
  width: 120px;
  height: 1px;
  display: inline-block;
  background: #000000;
  margin: 4px 10px;
}

.profile-picture {
  margin-right: 0.5rem;
  margin-top: -10px;
  height: 160px;
}

.text-container {
  margin-left: 1rem; /* Ensure there's some left margin for the text container */
}

 /* Default styles for section container */
.section-flex {
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 40px; /* Adjust to fit well within your layout */
  background: transparent; /* Slightly transparent white background */
  border-radius: 5px;
}

.section-flex h1 {
  color: rgb(25, 163, 140); /* Match your primary color */
  font-family: 'Roboto', sans-serif; /* Ensure consistency with the main app font */
  margin-bottom: 20px;
}


/* Media queries for responsiveness */
@media (max-width: 768px) {
  .section-flex {
    margin-top: 20px;
    margin-left: 0px;
    margin-right: 0px;
  }

  .section-flex h1 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  .container {
    flex-direction: column; /* Stack items vertically */
  }

  .profile-picture {
    margin-right: 0px; 
    margin-left: 0px;
    margin-bottom: 1rem; /* Add bottom margin for spacing */
    width: auto; /* Ensure the width does not follow the text container */
    height: auto; /* Maintain aspect ratio */
    max-width: 50%; /* Ensure the image is responsive */
  }

  .text-container {
    margin-left: 0; /* Remove left margin for small screens */
  }
}



</style>
