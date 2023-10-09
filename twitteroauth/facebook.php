<?php
	$apikey = "355941421245732|Cepick6v3WgmthFEy1QIb2cb0DQ";

	$ch = curl_init();
	curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, false );
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
	curl_setopt( $ch, CURLOPT_URL, 'https://graph.facebook.com/v2.2/'.$_GET['facebook_id'].'?fields=message,from&access_token='. $apikey );
	$result = curl_exec( $ch );
	curl_close( $ch );	
	echo $result;
?>

