var prefix = 'x-';

class Slideshow extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', e => {
      this.nextSlide();
    });
  }

  connectedCallback() {

  }

  disconnectedCallback() {

  }

  static get observedAttributes() {
    return ['autoslide', 'disabled', 'timer'];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if(attr == 'timer') this.timer = newValue;
  }

  //VARIABLES
  timer = 3000;

  //PROPERTIES
  get autoslide() {
    return this.hasAttribute('autoslide');
  }

  set autoslide(value) {
    if(value) this.hasAttribute('autoslide', '');
    else this.removeAttribute('autoslide');
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(value) {
    if(value) this.setAttribute('disabled', '');
    else this.removeAttribute('disabled');
  }

  get timer() {
    return this.timer;
  }

  set timer(value) {
    alert("sdfsdfsd");
    this.timer = value;
  }

  //METHODS
  nextSlide() {
    alert(this.timer);
  }
}

customElements.define(prefix + 'slideshow', Slideshow);
customElements.whenDefined(prefix + 'slideshow').then(() => {
  console.log(prefix + 'slideshow defined.');
});

class Slide extends HTMLElement {

}

customElements.define(prefix + 'slide', Slide);

//class SlideshowControls


/*

var timeToSlide = 3000;

window.onload = function() {
  var slideshows = document.getElementsByClassName('slideshow');
  Array.prototype.forEach.call(slideshows, function(slideshow) {
    var slides = slideshow.children;
    setInterval(function() {
      slideshow.appendChild(slides[0]);
    }, timeToSlide);
  });
}

  /*
  var tabs = document.getElementsByClassName('tabs');
  Array.prototype.forEach.call(tabs, function(tab) {
    var slides = tab.children;
    setInterval(function() {
      slideshow.appendChild(slides[0]);
    }, 3000);
  });
  */

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

  $('main a').mouseenter(function(){ //ANCHOR PREVIEW
    var con = $(this).text();
    var src = $(this).attr('href');
    $(this).append('<div class="preview"><p>' + con + '</p><img src="media/img/land.jpg"></img><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>')
  });
  $('main a').mouseleave(function(){
    $('div.preview').remove();
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
