$(document).ready(function() {
  //$("a[href*='" + location.pathname.substring(8, -1) + "']").addClass("active"); //SET RIBBON

  $("[name='show-password']").click(function() {
    if($(this).val() == "Show") $(this).val("Hide").prev().attr("type", "text");
    else $(this).val("Show").prev().attr("type", "password");
  });

  $(".accordion").each(function(index) {
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

  /*
  $('main a').mouseenter(function(){ //ANCHOR PREVIEW
    var con = $(this).text();
    var src = $(this).attr('href');
    $(this).append('<div class="preview"><p>' + con + '</p><img src="media/img/land.jpg"></img><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>')
  });
  $('main a').mouseleave(function(){
    $('div.preview').remove();
  });
  */

  $('.tabs').each(function(index) {
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
});
