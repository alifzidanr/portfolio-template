<template>
  <div class="section-flex flex-col md:flex-row items-start justify-center">
  <div class="section-title">
      <h2>Experience</h2>
    </div>


    <div class="container mx-auto">
    <div class="mt-8">
        <div class="bg-slate-900 rounded-lg p-6 mb-8" data-aos="fade-up">
            <h4 class="text-lg font-semibold text-left mb-2 text-gray-300"><a href="https://www.bsn.go.id//" class="text-green-500">Badan Standardisasi Nasional</a></h4>
            <h5 class="text-sm text-gray-200">September 2021 - February 2022</h5>
            <p class="text-sm text-slate-300 mt-2"><em>Intern Developer</em></p>
            <ul class="list-disc list-inside text-sm text-slate-300 mt-2">
                <li>Deployed BSN Employee Attendance Information System.</li>
                <li>CodeIgniter Framework 3- Interface development, debugging and system testing.</li>
                <li>Collaboration in the team as an internal programmer with the PUSDATIN work unit.</li>
            </ul>
        </div>
        <div class="bg-slate-900 rounded-lg p-6" data-aos="fade-up" data-aos-delay="100">
            <h4 class="text-lg font-semibold text-left mb-2 text-gray-300"><a href="https://nurulfikri.ac.id/" class="text-green-500">STT Terpadu Nurul Fikri</a></h4>
            <h5 class="text-sm text-gray-200">August 2022 - February 2023</h5>
            <p class="text-sm text-slate-300 mt-2"><em>Backend</em></p>
            <ul class="list-disc list-inside text-sm text-slate-300 mt-2">
                <li>Building a campus room reservation application based on requests from the STTNF facilities and infrastructure agency.</li>
                <li>Development uses the Laravel framework with a quickadminpanel template and several plugins.</li>
                <li>Research documentation uses the Rational Unified Process method.</li>
            </ul>
        </div>
    </div>
</div>











  </div>
  </template>
  
  <script>
  export default {
    name: 'ExperienceSection',
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

  