<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Image Preloader</title>
  <meta name="description" content="Image Preloade">
  <meta name="author" content="Nishit Mehat">
  <script src="js/jquery-1.9.0.min.js" ></script>
  <script src="js/preloader.js" ></script>
  <script>
    $( document ).ready(function(){
		try{
			$('.preload').prepreLoader();
		}catch( e ){
			alert( e.message );
		}
	});
  </script>
</head>
<body>
<div id="main" >

	<div style="width:100%;">
    	<div style="width:300px; height:200px; float:left; position:relative;"> 
        	<img src="images/1264107698bi3up6.jpg"  class="preload" style="width:100%" />
        </div>
		<div style="width:300px; height:200px; float:left; position:relative;">
        	 <img src="images/12923298509657AP.jpg" style="width:100%" class="preload" />
        </div>
        <div style="width:300px; height:200px; float:left; position:relative;">
        	<img src="http://www.foamwork.net/images/fw4-6.jpg" style="width:100%" class="preload" />
        </div>    	
    </div>
    
</div>
</body>
</html>
