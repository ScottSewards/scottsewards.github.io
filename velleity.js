window.onload = function() {
  //$("a[href*='" + location.pathname.substring(8, -1) + "']").addClass("active"); //SET RIBBON

  $("[name='show-password']").click(function() { //SHOW PASSWORD
    if($(this).val() == "Show") $(this).val("Hide").prev().attr("type", "text");
    else $(this).val("Show").prev().attr("type", "password");
  });

  $('.slideshow').each(function() { //SLIDESHOW
    setInterval(function() {
      var clone = $(this).find("> figure > figcaption").remove();
      //var source = $(this).find('img:first-child').attr('src');
      //var alt = $(this).find('img:first-child').attr('alt');
      //$(this).find("> figure").append("<img src='" + source + "' alt='" + alt + "'></img>").find('img:first-child').remove();
      //$(this).find("> figure").prepend(clone);
    }, 5000);
  });

  $(".accordion").each(function() {
    var accordion = $(this);
    $(this).find("> p").each(function(index) {
      $(this).addClass("accordion-" + index);
    });

    $(this).find("> div").each(function(index) {
      $(this).addClass("accordion-" + index);
    });

    $(accordion).find("> p").click(function() {
      var listItemClasses = $(this).attr('class');
      $(accordion).find('> p, > div').removeClass('active').each(function() {
        if($(this).hasClass(listItemClasses)) $(this).addClass('active');
      });
    });
  });

  $('.tabs').each(function() {
    var tabs = $(this);
    $(this).find('> ol, > ul').addClass('tab-options').find('> li').each(function(index) {
      $(this).addClass('tab-' + index);
    });

    $(tabs).find('> div').each(function(index) {
      $(this).addClass('tab-' + index);
    });

    $(tabs).find('> ol > li, > ul > li').click(function() {
      var listItemClasses = $(this).attr('class');
      $(tabs).find('> ol > li, > ul > li, > div').removeClass('active').each(function() {
        if($(this).hasClass(listItemClasses)) $(this).addClass('active');
      });
    });
  });
}

/*
$('main a').mouseenter(function(){ //ANCHOR PREVIEW
  var con = $(this).text();
  var src = $(this).attr('href');
  $(this).append('<div class="preview"><p>' + con + '</p><img src="media/img/land.jpg"></img><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>')
});
$('main a').mouseleave(function(){
  $('div.preview').remove();
});


//CACHE API
//INDEXED DB
//STORAGE MANAGE API


  $('nav li', 'button', 'a', 'audio', 'img', 'video').each(function() { //ACCESSIBILITY
    $(this).href('wai-aria', num)
    num += 1;
  });


  $(function(){
    var uni = "http://teaching.ehustudent.co.uk/add-my-comment/22918078";
    $('#getHere').get(uni, {/*JSLN},function(){
      alert(data +  status);
    });
  });

  var xhr = new XMLHttpRequest();

  $(function(){
    var formData = $('#login').serialize;
    $.post("test.php", "user=scott", proData).error(proError);
    //$.postJSON(url, formData{
    //  "first": "value",
    //  "second": "value"
    //}, proData).error(proError);
  });

  function proData(data, status){
    alert(status);
    $(this).append('<p>' + data.firstName + '</p>')
  }

  function proError(data){
    var msg = $(this).text("There was an error.");
  }


var node = {
  id: null,
  forename: "",
  middle: "",
  surname: "",
  maiden: "",
  sex: null,
  born: {

  },
  bornCity: null,
  died: {

  },
  diedCity: null,
  fatherFather: null, //GET FROM FATHER
  fatherMother: null,
  father: null,
  motherFather: null, //GET FROM MOTHER
  motherMother: null,
  mother: null,
  siblings: {

  }, //GET FROM FATHER, THEN MOTHER
  children: {

  }
}
*/
