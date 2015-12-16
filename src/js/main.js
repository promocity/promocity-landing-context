/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.min.js


/*
 * Custom
 */
//= partials/app.js
//= partials/owl.carousel.min.js
//= partials/jquery.validate.min.js
//= partials/jquery.maskedinput.js



$(document).ready(function() {
  /* slider */
  $("#slider").owlCarousel({
    navigation: true,
    items : 1,
    lazyLoad : true,
    slideSpeed : 800,
    navigationText : false,
    autoPlay: 6000,
    pauseOnHover : true,
    stopOnHover : true
  });

  $("#banner-tel").mask("+7 (999) 999-9999");
  $("#cost-tel").mask("+7 (999) 999-9999");
  $("#main-form-tel").mask("+7 (999) 999-9999");
  $("#pop-up-tel").mask("+7 (999) 999-9999");


$("#header-call-request-btn").click(function(){
    $("#call-request-form").show();
    $(".forms__pop-up-overlay").show();
    return false;
  });

  $(".forms__pop-up-overlay").click(function(){
    $("#call-request-form").hide();
    $(".forms__pop-up-overlay").hide();
    $(".complete-window").hide();
    return false;
  });

  $(".forms-pop-up__close-btn").click(function(){
    $("#call-request-form").hide();
    $(".forms__pop-up-overlay").hide();
    $(".complete-window").hide();
    return false;
  });

  /* 27 = escape */
  $(document).keyup(function(event){
      if (event.keyCode == 27) {
        $("#call-request-form").hide();
        $(".forms__pop-up-overlay").hide();
        $(".complete-window").hide();
      }
  });

    $('#call-request-form').validate({
   rules: {
     name: {
      required: true,
      minlength: 4    
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 4 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

  $('#banner-form').validate({
   rules: {
     name: {
      required: true,
      minlength: 4    
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 4 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });


  $('#cost-form').validate({
   rules: {
     name: {
      required: true,
      minlength: 4    
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 4 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

  $('#main-form').validate({
   rules: {
     name: {
      required: true,
      minlength: 4    
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 4 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });



  function compeliteWindow() {
    $(".forms__pop-up-overlay").show();
    $("#call-request-form").hide();
    $(".complete-window").show();
  }















});