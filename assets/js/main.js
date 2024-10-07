/*---------- show menu --------*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/*----- menu shown------*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*-------menu hidden --------*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

//------ remove menu mobile--------
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//------- header blur 
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)



// event listener for download button
document.getElementById("downloadButton").addEventListener("click", function() {

    var downloadLink = document.createElement("a");
    downloadLink.href = "assets/download/sigridus.pdf";
    downloadLink.download = "sigridus.pdf";
    downloadLink.click();
});

// -------- email js---------- 
const sendEmail = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   sendEmail.value = 'Sending...';

   const serviceID = 'service_ei5mu19';
   const templateID = 'template_d0j44kg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      sendEmail.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      sendEmail.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

/* -------- scrollrevel animation ----------*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true // animtaion repeats
})

sr.reveal('.home_data, .home_social, .contact_container')
sr.reveal('.home_data', {origin: 'bottom'})
sr.reveal('.about_data, .skills_data', {origin: 'left'})
sr.reveal('.about_image, .skills_content', {origin: 'right'})
sr.reveal('.about_image, .skills_content', {origin: 'right'})
sr.reveal('.services_card, .project_card', {interval: '100'})


