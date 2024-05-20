<template>
  <div class="section-flex flex-col md:flex-row items-start justify-center">
  <div class="section-title">
      <h2>Skills</h2>
    </div>



    <div class="row">
  <div class="col-lg-12" data-aos="fade-up">
    <div class="col-md-12 mt-4 mt-md-0 icon-box" data-aos="fade-up" data-aos-delay="100" style="background:#fff">
      <h4 class="text-left text-blue-900">Languages and Databases</h4>
      <div class="flex flex-wrap justify-center">
          <div class="p-2">
            <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" alt="vectorlogo.zone">
          </div>
          <div class="p-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="upload.wikimedia.org" class="h-14 w-24">
          </div>
          <div class="p-2">
            <img src="https://www.vectorlogo.zone/logos/php/php-horizontal.svg" alt="vectorlogo.zone" class="h-12 w-30">
          </div>
          <div class="p-2">
            <img src="https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg" alt="vectorlogo.zone" class="h-10 w-28">
          </div>
          <div class="p-2">
            <img src="https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg" alt="vectorlogo.zone" class="h-14 w-32">
          </div>
          <div class="p-2">
            <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-horizontal.svg" alt="vectorlogo.zone" class="h-8 w-38">
          </div>
        </div>
    </div>
    <div class="col-md-12 mt-4 mt-md-0 icon-box" data-aos="fade-up" data-aos-delay="100" style="background:#fff">
      <h4 class="text-left text-blue-900">Frameworks</h4>
      <div class="flex flex-wrap justify-center">
        <div class="p-2">
          <img src="https://www.vectorlogo.zone/logos/laravel/laravel-ar21.svg" alt="vectorlogo.zone">
        </div>
        <div class="p-2">
          <img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg" alt="vectorlogo.zone">
        </div>
        <div class="p-2">
          <img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg" alt="vectorlogo.zone">
        </div>
        <div class="p-2">
          <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg" alt="vectorlogo.zone" class="h-16 w-38">
        </div>
        <div class="p-2">
          <img src="https://www.vectorlogo.zone/logos/jquery/jquery-horizontal.svg" alt="vectorlogo.zone" class="h-10 w-36">
        </div>
      </div>

    </div>
    <div class="col-md-12 mt-4 mt-md-0 icon-box" data-aos="fade-up" data-aos-delay="100" style="background:#fff">
      <h4 class="text-left text-blue-900">Tools</h4>
      <div class="flex flex-wrap justify-center">
        <div class="p-2">
          <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" alt="vectorlogo.zone">
        </div>
        <div class="p-2">
          <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg" alt="vectorlogo.zone">
        </div>
        <div class="p-2">
          <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg" alt="vectorlogo.zone">
        </div>
        <div class="p-2">
          <img src="https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21.svg" alt="vectorlogo.zone">
        </div>
        <div class="p-2">
          <img src="https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg" alt="vectorlogo.zone">
        </div>
      </div>

    </div>
  </div>
</div>











  </div>
  </template>
  
  <script>
  export default {
    name: 'SkillSection',
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

  .card img {
      width: 33.33%; /* Display three images per row */
    }

}
</style>

  