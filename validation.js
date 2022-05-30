

// VALIDATION - REGISTER 

document.addEventListener("DOMContentLoaded", () => {

    $("#email").keyup(function(){
        if(validateEmail()){
            // if the email is validated
            // set input email border green
            $("#email").css("border","2px solid green");
            // and set label 
            $("#emailMsg").html("<p class='text-success'>Validated</p>");
        }else{
            // if the email is not validated
            // set border red
            $("#email").css("border","2px solid red");
            $("#emailMsg").html("<p class='text-danger'>Un-validated</p>");
            buttonState();
        }
    });

    $("#pass").keyup(function(){
        // check
        if(validatePassword()){
            // set input password border green
            $("#pass").css("border","2px solid green");
            //set passMsg 
            $("#passMsg").html("<p class='text-success'>Password validated</p>");
        }else{
                // set input password border red
            $("#pass").css("border","2px solid red");
            //set passMsg 
            $("#passMsg").html("<p class='text-danger'>Password not valid</p>");
        }
        buttonState();
    });

    $("#fullname").keyup(function(){
        // check
        if(validateFullname()){
            // set input fullname border green
            $("#fullname").css("border","2px solid green");
            //set passMsg 
            $("#fullnameMsg").html("<p class='text-success'>Full name validated</p>");
        }else{
                // set input fullname border red
            $("#fullname").css("border","2px solid red");
            //set passMsg 
            $("#fullnameMsg").html("<p class='text-danger'>Full name include numbers.</p>");
        }
        buttonState();
    });

    $("#username").keyup(function(){
        // check
        if(validateUsername()){
            // set input username border green
            $("#username").css("border","2px solid green");
            //set passMsg 
            $("#usernameMsg").html("<p class='text-success'>Full name validated</p>");
        }else{
                // set input username border red
            $("#username").css("border","2px solid red");
            //set passMsg 
            $("#usernameMsg").html("<p class='text-danger'>Full name include numbers.</p>");
        }
        buttonState();
    });

    function allvalid(){
        if(validateEmail() && validatePassword() && validateFullname() && validateUsername()){
            return true;
        }
        else{
            return false;
        }
    }

    function buttonState(){
		if(allvalid()){
			// if the both email and password are validate
			// then button should show visible
			$("#btn").show();
		}else{
			// if both email and pasword are not validated
			// button state should hidden
			$("#btn").hide();
		}
	}

    function validateEmail(){
		// get value of input email
		var email=$("#email").val();
		// use reular expression
		 var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
		 if(reg.test(email)){
		 	return true;
		 }else{
		 	return false;
		 }

	}

	function validatePassword(){
		//get input password value
		var pass=$("#pass").val();
        var reg = /[a-zA-Z]+/
        var reg2 = /[0-9]+/
        if(reg.test(pass) && reg2.test(pass) && pass.length > 6){
			return true;
		}else{
			return false;
		}
	}
    function validateFullname(){
		//get input value
		var fullname=$("#fullname").val();
		// check if fullname contains numbers
        var reg = /[0-9]/
		if(!reg.test(fullname) && fullname.length > 0){
			return true;
		}else{
			return false;
		}
	}
    function validateUsername(){
		//get input password value
		var username=$("#username").val();
		// check it s length
		if(username.length > 0){
			return true;
		}else{
			return false;
		}
	}

    function AddUser(){
        if(allvalid()){
            var userName = $("#username").val();
            var password= $("#pass").val();
            var fullName= $("#fullname").val();
            var email= $("#email").val();
            //   var date=$("#date").val();
            user__dict[userName]=[password, fullName, email];
    
            console.log(user__dict);
            alert("Registration executed successfully");
    
        }  
      }  
    


});