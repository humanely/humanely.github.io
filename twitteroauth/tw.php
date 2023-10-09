<?php
	require_once("twitteroauth.php"); //Path to twitteroauth library
	
	$consumerkey = "aBQ7mnwj3vNv6mHaTXMWjkPdi";
	$consumersecret = "fQZhh598xi4bwEihTM6dByH8fQvGardJzZrsEms3FxMcrz8Lgz";
	$accesstoken = "1161176276-T4F4LLukWArVsp9G4JSQiURbxhrGoNcsi4Lsz15";
	$accesstokensecret = "FzsxgDIMjuOOSJEhZqvU3dhkDZEeBuU0SCctAE2TdVKJ1";
	 
	function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
	  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
	  return $connection;
	}
	 
	$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
	 
	$tweets = $connection->get("https://api.twitter.com/1.1/statuses/show.json?id=".$_GET['tweet_id']);
	 
	echo json_encode($tweets);
?>
