$(document).ready(function(){

  // "use strict";


 
  
  $("#menu_btn_mobile").click(function(e){
    e.preventDefault()
      initHamburger();

  })
  $(".search-skill-item").click(function(e){

  })

  $(".search-summary-text").click(function(e){

   let p= $(this).text()+"<br />";
   tinymce.activeEditor.execCommand('mceInsertContent', false, p);
    alert(p)
  })

  var hamb = $('.hamburger');
	var header = $('.header');
	var hambActive = false;
	var menuActive = false;
	var menuoverlayActive = false;


  
	function initHamburger()
	{
		if($('.hamburger_container').length)
		{
			var hamb = $('.hamburger_container');

			hamb.on('click', function(event)
			{
				event.stopPropagation();

				if(!menuActive)
				{
					openMenu();
					
					$(document).one('click', function cls(e)
					{
						if($(e.target).hasClass('menu_mm'))
						{
							$(document).one('click', cls);
						}
						else
						{
							closeMenu();
						}
					});
				}
				else
				{
					$('.menu_container').removeClass('active');
					$('.menu-overlay').removeClass('active');
					menuActive = false;
          menuoverlayActive= false;
				}
			});
		}
	}

	function openMenu()
	{
		var fs = $('.menu_container');
		fs.addClass('active');
		var fso = $('.menu-overlay');
		fso.addClass('active');
		hambActive = true;
		menuActive = true;
    menuoverlayActive= true;
	}

	function closeMenu()
	{
		var fs = $('.menu_container');
		fs.removeClass('active');
		var fso = $('.menu-overlay');
		fso.removeClass('active');
		hambActive = false;
		menuActive = false;
    menuoverlayActive= false;
	}
});

