
/********************************************************************************************************
 *																										*
 										Created BY : Nishit Mehta
										Date : 15 - May - 2013
										contact : nvmaheta.mca@gmail.com
 *																										*
 *******************************************************************************************************/	

/*
	This is my first jquery plugin :)
	
	load images with nice fadein effect.
	it calcualte actual time to load image once iamge is load loader is removed and iamge display with fadeIn effect.
	
	-> How to use plugin
	   assign same classname to all images and use below code. 	
	   $(".className").preLoader();
*/

(function ( $ ) {
	
	var preLoaderOptions = {
		  "onComplete" : function(){},
		  "image"      : "images/preloader.gif"
	 }	

	var preLoader = {
		counterOverlayOBJ : '',
		counterOverlayOBJ : '',
		titleOverlayOBJ   : '',
		backOverlayOBJ    : '',
		titleHolderOverlayOBJ : '',
		preLoaderCounter : -1,
		preLoaderPer  : '',
		preLoaderText :  '',	
		'init' : function( elementOBJ ){
			  preLoader.createPreloader(elementOBJ);
			  var loadImage = new Image();
			  loadImage.src = $(elementOBJ).attr('src');
			  loadImage.onload = function(){
			 	preLoader.overlayDestory(elementOBJ)
			  }
		},
		'createPreloader' : function(elementOBJ){
			
			preLoader.createDiv = $('<div class="preloaderImg"></div>').css({
				margin:'auto',
				position:'absolute',
				top:'50%',
				left:'50%',
				zindex:'11111'
			}).appendTo($(elementOBJ).parent());
			
			preLoader.imageTag = $('<img />').attr('src',preLoaderOptions.image).appendTo(preLoader.createDiv);
			
		},
		'overlayDestory' : function(elementOBJ){
			
			$(elementOBJ).parent().find('.preloaderImg').fadeOut('slow',function(){
					$(this).remove();
					$(elementOBJ).fadeIn('slow');
					preLoaderOptions.onComplete();
			});			
		}
	} 

		$.fn.prepreLoader = function( options ) {
		if(options) {
			 $.extend(preLoaderOptions, options );
		}
		
		this.each(function() {
			$(this).hide();
			preLoader.init(this);
		});
	};
}( jQuery ));











