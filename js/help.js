
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBLwANiwjF4qU2bXeb1mc6jeDkn-HVm-KA",
    authDomain: "lastmeal-8526f.firebaseapp.com",
    databaseURL: "https://lastmeal-8526f-default-rtdb.firebaseio.com",
    projectId: "lastmeal-8526f",
    storageBucket: "lastmeal-8526f.appspot.com",
    messagingSenderId: "155424529573",
    appId: "1:155424529573:web:2d68211dc51148c544014c"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // reference messages collection
var messagesRef = firebase.database().ref('messages');

// form submission
document.getElementById('form').addEventListener('submit', submitForm);


//submit form
function submitForm(e) {
    e.preventDefault();
 

// get values
var name = getInputVal('name');
var email = getInputVal('email');
var message = getInputVal('message');

saveMessage(name, email, message);
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

// save mesage to firebase
function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}


