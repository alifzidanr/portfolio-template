<template>
  <div class="section-flex flex-col md:flex-row items-start justify-center">
  <div class="section-title">
      <h2>Contact</h2>
    </div>
    
    <iframe class="w-full h-64 md:h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.914053131913!2d106.87425237423392!3d-6.275030761425079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b6926e5d95%3A0x244ff9ea0c5cfa58!2sAlfamidi%20Kerja%20Bakti!5e0!3m2!1sen!2sid!4v1716094540271!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


<div class="mb-10"></div>

<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
<div class="bg-white rounded-lg shadow-lg p-6 mx-auto w-full">
  <div class="mb-4">
    <h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-2lg">Details</h2>
  </div>
  <div class="mb-4">
    <p class="text-gray-700">Feel free to reach out to me for any inquiries, collaborations, or just to say hello!</p>
  </div>
  <div class="flex items-center mb-4">
    <img src="@/assets/icons8-location-50.png" alt="Location Icon" class="h-6 w-6 mr-2">
    <p class="text-gray-700">Jl. Timbul No.136, Makasar, Jakarta Timur</p>
  </div>


  <div class="flex items-center mb-4">
      <img src="@/assets/icons8-gmail-48.png" alt="Email Icon" class="h-6 w-6 mr-2">
      <p id="emailText" class="text-gray-700">&nbsp;&#97;&#108;&#105;&#102;&#122;&#105;&#100;&#97;&#110;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</p>
      <div class="relative">
        <img v-if="!emailCopied" src="@/assets/copy.png" alt="Copy Icon" class="h-6 w-6 ml-2 cursor-pointer" @click="copyToClipboard('alifzidanr@gmail.com', 'emailCopied')" @mouseover="showTooltip('email')" @mouseleave="hideTooltip('email')">
        <img v-else src="@/assets/icons8-check-30.png" alt="Check Icon" class="h-6 w-6 ml-2">
        <div :class="{ 'absolute': true, 'z-10': true, 'invisible': !emailTooltip, 'inline-block': true, 'px-3': true, 'py-2': true, 'text-sm': true, 'font-medium': true, 'text-white': true, 'transition-opacity': true, 'duration-300': true, 'bg-gray-900': true, 'rounded-lg': true, 'shadow-sm': true, 'opacity-0': !emailTooltip, 'tooltip': true, 'dark:bg-gray-700': true}">
          {{ tooltipText }} <!-- Change text dynamically -->
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
    <div class="flex items-center mb-4">
      <img src="@/assets/icons8-whatsapp-48.png" alt="Phone Icon" class="h-6 w-6 mr-2">
      <p id="phoneText" class="text-gray-700">&#43;62&#32;896&#45;3714&#45;3069</p>
      <div class="relative">
        <img v-if="!phoneCopied" src="@/assets/copy.png" alt="Copy Icon" class="h-6 w-6 ml-2 cursor-pointer" @click="copyToClipboard('+6289637143069', 'phoneCopied')" @mouseover="showTooltip('phone')" @mouseleave="hideTooltip('phone')">
        <img v-else src="@/assets/icons8-check-30.png" alt="Check Icon" class="h-6 w-6 ml-2">
        <div :class="{ 'absolute': true, 'z-10': true, 'invisible': !phoneTooltip, 'inline-block': true, 'px-3': true, 'py-2': true, 'text-sm': true, 'font-medium': true, 'text-white': true, 'transition-opacity': true, 'duration-300': true, 'bg-gray-900': true, 'rounded-lg': true, 'shadow-sm': true, 'opacity-0': !phoneTooltip, 'tooltip': true, 'dark:bg-gray-700': true}">
          {{ tooltipText }} <!-- Change text dynamically -->
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>


  <div class="flex items-center mb-4">
    <a href="https://www.linkedin.com/in/alif-zidan-9836ab2a8" target="_blank" class="text-blue-600 hover:underline flex items-center">
      <img src="@/assets/icons8-linked-in-48.png" alt="LinkedIn Icon" class="h-6 w-6 mr-2">
      <span>LinkedIn (alifzidanr)</span>
    </a>
  </div>
  <div class="flex items-center mb-4">
    <a href="https://www.github.com/alifzidanr" target="_blank" class="text-blue-600 hover:underline flex items-center">
      <img src="@/assets/icons8-github-50.png" alt="GitHub Icon" class="h-6 w-6 mr-2">
      <span>GitHub (alifzidanr)</span>
    </a>
  </div>
  
</div>



<div class="isolate bg-white">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
      <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    <div class="mx-auto max-w-2xl text-left">
      <h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Direct Message</h2>
      <p class="mt-2 text-md leading-8 text-gray-600">Reach out to me directly for collaboration opportunities or inquiries</p>
    </div>
    <form class="mx-auto mt-16 mt-2 sm:mt-4 max-w-3xl" @submit.prevent="submitForm">
      <div class="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label for="name" class="block text-sm font-semibold leading-6 text-gray-900">Name</label>
          <div class="mt-1">
            <input type="text" v-model="form.name" id="name" autocomplete="name" placeholder="Enter your name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="subject" class="block text-sm font-semibold leading-6 text-gray-900">Subject</label>
          <div class="mt-1">
            <input type="text" v-model="form.subject" id="subject" autocomplete="subject" placeholder="Enter the subject" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div class="mt-1">
            <input type="email" v-model="form.email" id="email" autocomplete="email" placeholder="Enter your email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
          <div class="mt-1">
            <textarea v-model="form.message" id="message" rows="4" placeholder="Enter your message" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required></textarea>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
      </div>
    </form>
  </div>

 <!-- Success Alert -->
 <div v-if="showSuccessAlert" class="alert-overlay">
      <div class="alert-box flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
          <path fill="#43A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
        </svg>

        <span class="sr-only">Info</span>
        <div class="ms-3 text-sm font-medium">
          Message sent successfully!
        </div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" @click="showSuccessAlert = false" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
      </div>
    </div>

     <!-- Error Alert -->
  <div v-if="showErrorAlert" class="alert-overlay">
    <div id="alert-3" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
          <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path>
      </svg>
      <span class="sr-only">Info</span>
      <div class="ms-3 text-sm font-medium">
        Failed to send message. Please try again.
      </div>
      <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" @click="showErrorAlert = false" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
      </button>
    </div>
  </div>

      
  </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ContactSection',
    data() {
    return {
      emailCopied: false,
      phoneCopied: false,
      emailTooltip: false,
      phoneTooltip: false,
      tooltipText: 'Copy',
      form: {
        name: '',
        subject: '',
        email: '',
        message: '',
      },
      showSuccessAlert: false,
      showErrorAlert: false,
    };
  },
  methods: {
    copyToClipboard(text, target) {
        const el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        this[target] = true; 
        this.tooltipText = 'Copied!'; 

        setTimeout(() => {
          this[target] = false; 
          if (target === 'emailCopied') {
            this.emailTooltip = false; // Hide the tooltip for email
          } else if (target === 'phoneCopied') {
            this.phoneTooltip = false; // Hide the tooltip for phone
          }
          this.tooltipText = 'Copy'; 
        }, 2000);
      },
    showTooltip(type) {
      if (type === 'email') {
        this.emailTooltip = true;
      } else if (type === 'phone') {
        this.phoneTooltip = true;
      }
    },
    hideTooltip(type) {
      if (type === 'email') {
        this.emailTooltip = false;
      } else if (type === 'phone') {
        this.phoneTooltip = false;
      }
    },
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:3000/send', this.form);
        console.log(response);
        if (response.status === 200) {
          // Email sent successfully
          this.showSuccessAlert = true; // Show success alert
          this.form = { name: '', subject: '', email: '', message: '' }; // Clear the form fields
        } else {
          // Failed to send email
          this.showErrorAlert = true; // Show error alert
        }
      } catch (error) {
        console.error('Error sending email:', error);
        this.showErrorAlert = true; // Show error alert
      }
    },
  },
};
</script>

  
  <style scoped>

.alert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999; 
  display: flex;
  align-items: center;
  justify-content: center;
}

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

}
</style>

  