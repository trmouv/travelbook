// Carousel
$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  groupCells: "100%",
  
});

$(document).ready(function(){
	
	$('ul.tabs li').click(function(event){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
      var selector = event.target.getAttribute('data-tab');
  // trigger resize on tab pane
    $( "#" + selector + " .main-carousel").flickity();
    $( "#" + selector + " .main-carousel").flickity('resize');

    
   });
})