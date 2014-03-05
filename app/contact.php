<?php

// This file is called via an AJAX request from our client app.
// It"s sole purpose in life is to respond to a POST http request, and
// send and email based on the data received.

// Get the data POSTed to us.
// And convert it to a php array.
// Data = {
//   name: <string>,
//   email: <string>,
//   message: <string>
// }
$data = json_decode(file_get_contents("php://input"), true);

// Build the arguments for sending the message.
$to = "denise@ketogenictherapies.com";
$subj = "Keto contact form message from: " . $data["name"];
$message  = "Name: " . $data["name"] . "\n";
$message .= "Email: " . $data["email"] . "\n";
$message .= "Message: " . $data["message"] . "\n";

// Construct necessary headers.
$headers  = "From: <" . $data["email"] . ">\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Finally, send the email.
$res = mail( $to, $subj, $message, $headers );

// And respond with a JSON representation of success or failure.
if( $res === true ) {
  $return = array(
      "status" => 200,
      "message" => "Thanks for contacting us! We'll be in touch shortly."
    );
  echo json_encode($return);
} else {
  $return = array(
    "status" => 500,
    "message" => "We're sorry, but there was an issue on our end. Please try again."
  );
  echo json_encode($return);
}

?>