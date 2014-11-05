//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password") //password input box
var $pw_confirmation = $("#confirm_password") //confirm password input box
var $hint_pw = $password.next() //hint span next to password input box
var $hint_confirm = $pw_confirmation.next() //hint span next to confirm password input box
var $submit_button = $("#submit") //the submit button

//Hide hints (not necessary, I just hid them by default in the css)
//$("form span").hide();

function passwordIsValid () {
  if($password.val().length > 8) {
    return true;
  } else {
    return false;
  }
}

function passwordsMatch () {
  if($password.val() === $pw_confirmation.val()) {
    return true;
  } else {
    return false;
  }
}

function canSubmit() {
  if(passwordIsValid() && passwordsMatch()) {
    $submit_button.prop("disabled", false);
    return true;
  } else {
    $submit_button.prop("disabled", true);
    return false;
  };
}

function passwordConfirmationExists () {
  if($pw_confirmation.val().length > 0) {
    return true;
  } else {
    return false;
  }
}

function passwordEvent() {
  //Find out if password is valid
  if(passwordIsValid()) {
    //Hide hint if valid
    $hint_pw.hide();
  } else {
    //else show hint
    $hint_pw.show();
  }
  //if there is a confirmation password
  if(passwordConfirmationExists()) {
    //then compare the password and confirmation password again
    confirmPasswordEvent();
  }
}

function confirmPasswordEvent() {
//Find out if password and confirmation match
  if(passwordsMatch()) {
    //Hide hint if matched
    $hint_confirm.hide();
  } else {
    //else show hint
    $hint_confirm.show();
  }
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(canSubmit)

//When event happens on confirmation input
$pw_confirmation.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(canSubmit)

