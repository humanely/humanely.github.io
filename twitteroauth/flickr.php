<?php	
	$apikey = "710167d9ace14e1438b5ad5ee6877b1a";

	$ch = curl_init();
	curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, false );
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
	curl_setopt( $ch, CURLOPT_URL, 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key='. $apikey .'&photo_id='.$_GET['flickr_id'].'&format=json&nojsoncallback=1' );
	$result = curl_exec( $ch );
	curl_close( $ch );	
	echo $result;
?>