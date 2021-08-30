 const TRANSLATEFORMTOP = "translateY(0px)";
 const TRANSLATEFORMBOT = "translateY(800px)";
 const WINDOW = window;
 const COMPLETEPROGRESS = "rgba(29, 191, 115, 0.25)";
 let control = document.querySelector("#file-1");
 //  const SLIDERS$('.login__slider , .reg__slider');
 //  let sliders = document.querySelectorAll('.form-all__slider')
 let sliders = document.querySelector('.form-all__slider')
 let progressStep = document.querySelectorAll('.work-progress-inner__step');
 let progressBarActive = document.querySelector('.work-progress-inner__active');
 let progressStepActive = document.querySelector('._active-step');
 let progressCounter = 0;
 let progressComplete = false;
 let loginSlider = document.querySelector('.login__slider');
 let regSlider = document.querySelector('.reg__slider');
 let login = document.querySelector(".btn-login");
 let reg = document.querySelector(".btn-registration");
 let formAll = document.querySelector("#form1");
 let formShow = document.querySelector(".form-show");
 let formShowTitle = document.querySelector(".form-show__title");
 let formShowIco = document.querySelector(".form-show__ico");
 let formOutter = document.querySelector(".form-outter");

 function click(el, f) {
     if (el) {
         el.addEventListener('click', f)
     }
 }

 function resize(el, f) {
     if (el) {
         el.addEventListener('resize', f)
     }
 };
 resize(WINDOW, function () {
     if (WINDOW.outerWidth > 1024) {

         formOutter.classList.remove('_outter-active');

     } else {

         if (formShowTitle.innerHTML === "Скрыть") {
             formOutter.classList.add('_outter-active');
         }
     }

 })

 //WINDOW.addEventListener('resize', );


 function change(el, f) {
     if (el) {
         el.addEventListener('change', function fileAdd(event) {
             // Когда происходит изменение элементовletравления, значит появились новые файлы
             var i = 0,
                 files = control.files,
                 len = files.length;
             let counter = 0;


             for (; i < len; i++) {
                 counter = 1 - (counter + 1);
                 files[i].name;
                 files[i].type;
                 files[i].size;
                 //  console.log(String(files[i].name));
             }
             //addClass('gallery-create-inner__upload-name-file')

             let ListUploads = document.querySelector('.gallery-create-inner__upload-list');
             let itemUploads = document.createElement("li");
             let spanUploads = document.createElement("span");
             let spanFinish = document.createElement("span");
             spanUploads.innerHTML = files[counter].name;
             itemUploads.appendChild(spanUploads);
             itemUploads.appendChild(spanFinish);
             ListUploads.appendChild(itemUploads);
             spanFinish.classList.add('gallery-create-inner__upload-done');
             spanUploads.classList.add('gallery-create-inner__upload-name-file');
             itemUploads.classList.add('gallery-create-inner__upload-item');
         })
     }
 };
 change(control);

 $(sliders).slick({
     //  appendDots: '.appendDots',
     arrows: false,
     dots: true,
     infinite: true,
     speed: 500,
     autoplay: true,
     fade: true,
     cssEase: 'linear',
     adaptiveHeight: true
 });


 //  sliders.forEach((slider) => {

 //  })

 click(formShow, function () {
     formShowIco.classList.toggle('_icon-active'),
         formOutter.classList.toggle('_outter-active');
     if (formShowTitle.innerHTML === "Войти") {
         formShowTitle.innerHTML = "Скрыть";
         formAll.style.transform = TRANSLATEFORMTOP;
     } else {
         formShowTitle.innerHTML = "Войти";
         formAll.style.transform = TRANSLATEFORMBOT;
     }
 });

 click(formOutter, function () {
     formShowTitle.innerHTML = "Войти";
     formAll.style.transform = TRANSLATEFORMBOT;
     formShowIco.classList.remove('_icon-active');
     formOutter.classList.remove('_outter-active');
 });



 //  $('.login__slider')

 //  $('.reg__slider').slick({
 //      //  appendDots: '.appendDots',
 //      arrows: false,
 //      dots: true,
 //      infinite: true,
 //      speed: 500,
 //      autoplay: true,
 //      fade: true,
 //      cssEase: 'linear'
 //  });






 //  control.addEventListener('change', );

 progressStep.forEach(
     (e) => {
         progressCounter = progressCounter + 20;
         if (e.classList.contains('_active-step')) {
             progressBarActive.style.width = progressCounter - 20 + "%";
             progressComplete = true;

         }
     }

 );
 if (progressComplete === true) {
     // 8px solid rgba($green, 0.25)
     progressStepActive.style.borderColor = COMPLETEPROGRESS;
 };