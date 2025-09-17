 // html skills
 
 const htmlBtn = document.getElementById('showHtmlSkillsBtn');
  const htmlSkillsList = document.getElementById('htmlSkillsList');

  htmlBtn.addEventListener('click', () => {
    htmlSkillsList.classList.toggle('show');
    // Change button text when toggled
    htmlBtn.textContent = htmlSkillsList.classList.contains('show')
      ? 'Close HTML Skills'
      : 'Open HTML Skills';
  });



  
 const cssBtn = document.getElementById('showCssSkillsBtn');
  const cssSkillsList = document.getElementById('cssSkillsList');

  cssBtn.addEventListener('click', () => {
    cssSkillsList.classList.toggle('show');
    cssBtn.textContent = cssSkillsList.classList.contains('show')
      ? 'Hide CSS Skills'
      : 'Show CSS Skills';
  });


 
  const javascriptBtn = document.getElementById('showJavascriptSkillsBtn');
  const javascriptSkillsList = document.getElementById('javascriptSkillsList');

  javascriptBtn.addEventListener('click', () => {
    javascriptSkillsList.classList.toggle('show');
    javascriptBtn.textContent = javascriptSkillsList.classList.contains('show')
      ? 'Hide JavaScript Skills'
      : 'Show JavaScript Skills';
  });



  const pythonBtn = document.getElementById('showPythonSkillsBtn');
  const pythonSkillsList = document.getElementById('pythonSkillsList');

  pythonBtn.addEventListener('click', () => {
    pythonSkillsList.classList.toggle('show');
    pythonBtn.textContent = pythonSkillsList.classList.contains('show')
      ? 'Hide Python Skills'
      : 'Show Python Skills';
  });



  const javaBtn = document.getElementById('showJavaSkillsBtn');
  const javaSkillsList = document.getElementById('javaSkillsList');

  javaBtn.addEventListener('click', () => {
    javaSkillsList.classList.toggle('show');
    javaBtn.textContent = javaSkillsList.classList.contains('show')
      ? 'Hide Java Skills'
      : 'Show Java Skills';
  });





  const projectsBtn = document.getElementById('showProjectsBtn');
  const projectsList = document.getElementById('projectsList');

  projectsBtn.addEventListener('click', () => {
    projectsList.classList.toggle('show');
    projectsBtn.textContent = projectsList.classList.contains('show')
      ? 'Hide PLP Academy Projects'
      : 'Show PLP Academy Projects';
  });




  const kuBtn = document.getElementById('showKuBtn');
  const kuInfo = document.getElementById('kuInfo');

  kuBtn.addEventListener('click', () => {
    kuInfo.classList.toggle('show');
    kuBtn.textContent = kuInfo.classList.contains('show')
      ? 'Hide Kenyatta University Info'
      : 'Show Kenyatta University Info';
  });








   const schoolBtn = document.getElementById('showSchoolBtn');
  const schoolInfo = document.getElementById('schoolInfo');

  schoolBtn.addEventListener('click', () => {
    schoolInfo.classList.toggle('show');
    schoolBtn.textContent = schoolInfo.classList.contains('show')
      ? 'Hide Chavakali High School Info'
      : 'Show Chavakali High School Info';
  });




   const btn = document.getElementById('showInterestBtn');
  const interestInfo = document.getElementById('interestInfo');

  btn.addEventListener('click', () => {
    interestInfo.classList.toggle('show');
    btn.textContent = interestInfo.classList.contains('show')
      ? 'Hide My Interests'
      : 'Show My Interests';
  });













  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });