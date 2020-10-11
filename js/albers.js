
//https://developers.google.com/web/fundamentals/web-components/shadowdom



function createQRCode(data) {
  var ethereumWallet = "0xA14Ae9BC94005A93934a027024EB7421215853Af";
  var element = document.createElement('img');
  element.src = "<img src='https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=" + ethereumWallet + "&choe=UTF-8&chld=L|0' alt='Ethereum Wallet Address QR Code'/>";
  return element;
}




/*
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
*/
