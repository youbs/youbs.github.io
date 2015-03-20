jQuery(document).ready(function($) {
  'use strict';

	/* profile */
	$("#profile .col500").animate({'margin-left':"0%"},600);
    $("#profile .col260").animate({'margin-right':"0%"},600);

	//page scroll up
	$("#up").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});

	//set #up position for pc screens
	position_up();

	$(window).resize(function() {
		position_up();
	});

	$('a[data-rel]').each(function() {
		$(this).attr('rel', $(this).attr('data-rel')).removeAttr('data-rel');
	});

	set_skill_percent();


	if(getQueryParam('thanks') == '') {
		$('.form-thanks').show();
	}

});//end document ready


function getQueryParam(str)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == str){
               	if(pair[1]) {
               		return pair[1];
               	}
               return '';
       		}
       }
       return(false);
}

/* set skill percent
=========================================== */
function set_skill_percent(){
    $('.skill-percent-line').each(function() {
        var width = $(this).data( "width" );
        $( this ).animate({width: width+'%'}, 1000 );

    });
}

/* scroll to section by id
=========================================== */
function goToByScroll(id){
    id = id.replace("link", "");
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}

/* set #up position
=========================================== */
function position_up(){
  if ($(window).width() < 1024) {
	$('#up').css({right:'20px', bottom:'20px'});
  } else {
	 $('#up').removeAttr('style');
  }
}

