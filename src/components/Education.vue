<template>
    <div class="section-flex flex-col md:flex-row items-start justify-center">
    <div class="section-title">
        <h2>Education</h2>
      </div>


      <div class="max-w-sm overflow-hidden shadow-xl bg-gray-50 bg-opacity-50">
          <div class="col-md-6 px-4 py-6">
              <a href="https://nurulfikri.ac.id/" target="_blank">
                  <img src="@/assets/sttnf.png" class="img-fluid" alt="Bachelor's Degree in Informatics">
              </a>
          </div>

          <div class="col-md-6">
              <div class="p-4">
                  <p class="text-black"><em>Bachelor in Informatics</em></p>
                  <h5 class="text-black">2018 - 2023</h5>
                  <h6 class="text-black">Relevant Coursework :</h6>
                  <ul class="list-disc pl-4 text-black">
                      <li>Foundation Of Algorithms</li>
                      <li>Software Engineering</li>
                      <li>Cloud Computing</li>
                  </ul>
              </div>
          </div>
      </div>

      <div class="section-title mt-12">
        <h2>Certification</h2>
      </div>


      <div class="container mx-auto px-4">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
    <!-- Card 1 -->
    <a href="https://coursera.org/share/8d25a043c2ebdfd5e233d219d5d25728" target="_blank" class="bg-white shadow-md rounded-lg overflow-hidden flex items-center justify-center hover:shadow-xl transition duration-300 aspect-w-1 aspect-h-1">
      <img src="@/assets/figma_logo.png" alt="Figma Logo" class="w-full h-full object-contain">
    </a>
    
    <!-- Card 2 -->
    <a href="https://drive.google.com/file/d/1GUQOQQHjvOSP7U5TFSpgXLnOV-pWvp4l/view?usp=sharing" target="_blank" class="bg-white shadow-md rounded-lg overflow-hidden flex items-center justify-center hover:shadow-xl transition duration-300 aspect-w-1 aspect-h-1">
      <img src="@/assets/aws.png" alt="AWS Logo" class="w-full h-full object-contain">
    </a>
    
    <!-- Card 3 -->
    <a href="https://www.e-ujian.com/cert/qwZs3e.146379" target="_blank" class="bg-white shadow-md rounded-lg overflow-hidden flex items-center justify-center hover:shadow-xl transition duration-300 aspect-w-1 aspect-h-1">
      <img src="@/assets/brightenEnglish.jpg" alt="Brighten English" class="w-full h-full object-contain">
    </a>
  </div>
</div>





      




     
    </div>
  </template>
  
  <script>
  export default {
    name: 'EducationSection',
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

}
</style>

  