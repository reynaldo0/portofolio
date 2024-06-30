// MENAMPILKAN MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// JIKA DI KLIK AKAN MENAMPILKAN
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// CLOSE
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE 
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// AUTO TYPE STARTS

// AUTO TYPE ENDS 

// ACCORDION SKILLS
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

// QUALIFICATION TABS
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContents =>{
            tabContents.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

// QUALIFICATION SCALE
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.qualification_button');
    const contents = document.querySelectorAll('.qualification_content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            buttons.forEach(btn => btn.classList.remove('qualification_active'));
            contents.forEach(content => {
                content.classList.remove('qualification_active');
                content.style.display = 'none';
            });

            // Add active class to the clicked button
            button.classList.add('qualification_active');

            // Show and animate the corresponding content
            const target = document.querySelector(button.getAttribute('data-target'));
            target.style.display = 'block';
            setTimeout(() => {
                target.classList.add('qualification_active');
            }, 50); // Adding a small delay to trigger the transition
        });
    });
});

// SCROLL SECTION ACTIVE 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// CHANGE BACKGROUND HEADER 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// SCROLL SHOW UP 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// MODE GELAP 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// SEND MESSAGE TO EMAIL STARTS 
function emailSend(){
    var userName = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var pesan = document.getElementById('pesan').value;

    var massageInput = "Nama = " + userName +
    "<br/> Email = " + email +
    "<br/> Pesan = " + pesan;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "userportofolio@gmail.com",
        Password : "A30F3E344AD1B8E25C8FFE12B9E95E9EB736",
        To : 'reynaldooyusellino@gmail.com',
        From : "reynaldooyusellino@gmail.com",
        Subject : "This is the subject",
        Body : massageInput
    }).then(
      message => {
        if(message=='OK'){
            Swal.fire({
                position: "center",
                icon: "success",
                iconColor:'	#579ce0',
                title: "TERIMA KASIH!",
                text: "Pesan berhasil di kirim ke Email.",
                showConfirmButton: false,
                timer: 3500
              });
        }
      }
    );
}
// SEND MESSAGE TO EMAIL ENDS

// ALERT IF LINK DEACTIVE
document.getElementById("demo-deactive").addEventListener("click", function(event) {
    event.preventDefault();
    Swal.fire({
      icon: "error",
      title: "Mohon Maaf...",
      text: "Website belum bisa di akses",
      confirmButtonColor: "#3085d6",
    });
  });

document.getElementById('down-cv').addEventListener('click', function(event) {
    event.preventDefault();
    const downloadUrl = this.getAttribute('href');
    
    Swal.fire({
      title: "Apakah Anda Yakin?",
      text: "Download Curriculum Vitae?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Download",
      cancelButtonText: "Batalkan",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = downloadUrl;
      }
    });
  });

// Fungsi untuk menampilkan SweetAlert dan mengunduh file jika dikonfirmasi
function showDownloadConfirmation(event, downloadUrl) {
    event.preventDefault();

    Swal.fire({
      title: "Apakah Anda Yakin?",
      text: "Game Ini Hanya Untuk Desktop, Jangan Lupa Extract Filenya. Enjoy!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Download",
      cancelButtonText: "Batalkan"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = downloadUrl;
      }
    });
  }

  // Tambahkan event listener pada tombol download untuk setiap game
  document.getElementById('download-file-gameattack').addEventListener('click', function(event) {
    showDownloadConfirmation(event, this.getAttribute('href'));
  });

  document.getElementById('download-file-carsgame').addEventListener('click', function(event) {
    showDownloadConfirmation(event, this.getAttribute('href'));
  });

  document.getElementById('download-file-pingpong').addEventListener('click', function(event) {
    showDownloadConfirmation(event, this.getAttribute('href'));
  });

// AOS 
AOS.init();