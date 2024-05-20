<template>
  <div class="section-flex flex-col md:flex-row items-start justify-center">
    <div class="section-title">
      <h2>Projects</h2>
    </div>

    <div class="container mx-auto py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="max-w-md rounded overflow-hidden shadow-lg transition ease-out duration-300 transform hover:scale-105" @click="openModal('ticTacToe')" style="cursor: pointer;">
          <img src="@/assets/tic-tac-toe.jpg" alt="Tic Tac Toe" class="w-full">
        </div>
        <div class="max-w-md rounded overflow-hidden shadow-lg ease-out duration-300 transform hover:scale-105" @click="openModal('simpleWeather')" style="cursor: pointer;">
          <img src="@/assets/simpleweather.jpg" alt="Simple Weather" class="w-full">
        </div>
        <div class="max-w-md rounded overflow-hidden shadow-lg transition ease-out duration-300 transform hover:scale-105" @click="openModal('customBlog')" style="cursor: pointer;">
          <img src="@/assets/blogg.jpeg" alt="Blogg" class="w-full">
        </div>
        <div class="max-w-md rounded overflow-hidden shadow-lg transition ease-out duration-300 transform hover:scale-105" @click="openModal('reservationSystem')" style="cursor: pointer;">
          <img src="@/assets/classroom.jpg" alt="Classroom" class="w-full">
        </div>
      </div>
    </div>

    <!-- Modal for Tic Tac Toe -->
    <Modal :showModal="isTicTacToeModalOpen" @close="closeModal('ticTacToe')" :title="'Simple Game of Tic Tac Toe'">
      <div class="container mx-auto">
        <div class="row">
          <div class="col-lg-12 portfolio-info">
            <ul>
              <li><strong>Tech Stack</strong> : Vue, HTML, CSS</li>
              <li><strong>Github URL</strong> : <a href="https://github.com/alifzidanr/vitetest-tic_tac_toe" target="_blank" class="text-blue-500">Project Link</a></li>
            </ul>
            <div class="mt-4"></div>
            <p>
              The classic Tic Tac Toe with two modes available, player vs player and player vs the undefeated AI. Try it
              <a href="https://tictactoe-alifzidanr.web.app/" target="_blank" class="text-blue-500">here</a>
            </p>
          </div>
        </div>
      </div>
    </Modal>

    <!-- Modal for Simple Weather App -->
    <Modal :showModal="isSimpleWeatherModalOpen" @close="closeModal('simpleWeather')" :title="'Simple Weather App'">
      <div class="container mx-auto">
        <div class="row">
          <div class="col-lg-12 portfolio-info">
            <ul>
              <li><strong>Tech Stack</strong>: Flutter, cupertino, geolocator, geocoding</li>
              <li><strong>Github URL</strong>: <a href="https://github.com/alifzidanr/simpleweather.git" target="_blank" class="text-blue-500">Project Link</a></li>
            </ul>
            <div class="mt-4"></div>
            <p>
              Simple mobile-based weather app with autocomplete search and geolocation.
            </p>
          </div>
        </div>
      </div>
    </Modal>

    <!-- Modal for Customizable Blog -->
    <Modal :showModal="isCustomBlogModalOpen" @close="closeModal('customBlog')" :title="'Customizable Blog'">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 portfolio-info">
            <ul>
              <li><strong>Tech Stack</strong>: HTML, Tailwind CSS, PHP, Blade, JavaScript </li>
              <li><strong>Github URL</strong>: <a href="https://github.com/alifzidanr/custom-blog" target="_blank" class="text-blue-500">Project Link</a></li>
            </ul>
            <div class="mt-4"></div>
            <p>
              A customizable blog template with carousel, simple search index, and pagination
            </p>
          </div>
        </div>
      </div>
    </Modal>

    <Modal :showModal="isReservationSystemModalOpen" @close="closeModal('reservationSystem')" :title="'Room Reservation App'">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 portfolio-info">
        <ul>
          <li><strong>Tech Stack</strong>: Laravel, HTML, CSS, Bootstrap, jQuery</li>
          <li><strong>Github URL</strong>: <a href="https://github.com/alifzidanr/sttnf-pinjam" target="_blank" class="text-blue-500">Project Link</a></li>
        </ul>
        <div class="mt-4"></div>
        <p>
          Campus room reservation application based on a request from the STTNF facilities and infrastructure agency. The work utilizes the Laravel framework with the QuickAdminPanel template and several plugins, while research documentation adopts the Rational Unified Process method.</p>
      </div>
    </div>
  </div>
</Modal>










  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'ProjectSection',

  components: {
    Modal
  },
  data() {
    return {
      isTicTacToeModalOpen: false,
      isSimpleWeatherModalOpen: false,
      isCustomBlogModalOpen: false,
      isReservationSystemModalOpen: false // Add modal state for STTNF Room Reservation System
      // Add other modal states if needed
    };
  },
  methods: {
    openModal(modalName) {
      if (modalName === 'ticTacToe') {
        this.isTicTacToeModalOpen = true;
      } else if (modalName === 'simpleWeather') {
        this.isSimpleWeatherModalOpen = true;
      } else if (modalName === 'customBlog') {
        this.isCustomBlogModalOpen = true;
      } else if (modalName === 'reservationSystem') {
        this.isReservationSystemModalOpen = true; // Open modal for STTNF Room Reservation System
      }
      // Add other conditions for other modals if needed
    },
    closeModal(modalName) {
      if (modalName === 'ticTacToe') {
        this.isTicTacToeModalOpen = false;
      } else if (modalName === 'simpleWeather') {
        this.isSimpleWeatherModalOpen = false;
      } else if (modalName === 'customBlog') {
        this.isCustomBlogModalOpen = false;
      } else if (modalName === 'reservationSystem') {
        this.isReservationSystemModalOpen = false; // Close modal for STTNF Room Reservation System
      }
      // Add other conditions for other modals if needed
    }
  }
}
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
