function salutation(){
    var salut = document.getElementById("salut");
    var salutw = document.getElementById("salutw");
    salut.value == "" ? salut.style.border="1px solid red" : salut.style.border="1px solid #7e3b00" ;
    salut.value == "" ? salutw.style.display="block" : salutw.style.display="none " ;
}
function lastnam(){
    var lname = document.getElementById("lname");
    var lnamew = document.getElementById("lnamew");
    lname.value == "" ? lname.style.border="1px solid red" : lname.style.border="1px solid #7e3b00" ; lname.value == "" ? lnamew.style.display="block" : lnamew.style.display="none";

}


function mnumcheck(){
    var mnumber = document.getElementById("mnumber");
    var mnumberw = document.getElementById("mnumberw");
    mnumber.value == "" ? mnumber.style.border="1px solid red" : mnumber.style.border="1px solid #7e3b00" ; 
    mnumber.value == "" ? mnumberw.style.display="block" : mnumberw.style.display="none";
}
function mnumcheckr(){
    var rmnumber = document.getElementById("rmnumber");
    var rnumberw = document.getElementById("rnumberw");
    rmnumber.value == "" ? rmnumber.style.border="1px solid red" : rmnumber.style.border="1px solid #7e3b00" ; 
    rmnumber.value == "" ? rnumberw.style.display="block" : rnumberw.style.display="none";
}
function checkmail(){
    var email = document.getElementById("email");
    var emailw = document.getElementById("emailw");
    email.value == "" ? email.style.border="1px solid red" : email.style.border="1px solid #7e3b00" ; email.value == "" ? emailw.style.display="block" : emailw.style.display="none";
}
function checkusername(){
    var username = document.getElementById("username");
    var usernamew = document.getElementById("usernamew");
    username.value == "" ? username.style.border="1px solid red" : username.style.border="1px solid #7e3b00" ;
    username.value == "" ? usernamew.style.display="block" : usernamew.style.display="none";
}


    function validnum(){
    var x = document.getElementById("mnumber").value;
    var y = document.getElementById("mnumber");
    var z = document.getElementById("mnumberw");
    var tick = document.getElementById("tick");
    var check_field = x == "" ? y.setAttribute("value" , "enter mobile number") : x;
    var count_num = check_field.length == 10 ? check_field : y.setAttribute("value" , "enter 10digit m number");
    count_num.charAt(0) == 6 || count_num.charAt(0) == 7 || count_num.charAt(0) == 8 || count_num.charAt(0) == 9 ? tick.style.display="block" : y.setAttribute("value" , "enter valid number");
}

function usernameg(){
    var x = document.getElementById("salut").value;
    var y = document.getElementById("lname").value;
    var z = document.getElementById("username");
    z.setAttribute("value",x+y); z.setAttribute("disabled","disabled");
}

function remobile(){
    var number = document.getElementById("mnumber").value;
    var rnumber = document.getElementById("rmnumber").value; 
    var rnumberb = document.getElementById("rmnumber");
    var rnumberw = document.getElementById("rnumberw");
    number == rnumber ? rnumberw.style.display= "none" : rnumberw.style.display="inline";
    number == rnumber ? rnumberb.style.border="1px solid #7e3b00" : rnumberb.style.border="1px solid red";
}

//check this it is submit button validation
function submitf(){
    var salut = document.getElementById("salut").value;
    var lname = document.getElementById("lname").value;
    var mnumber = document.getElementById("mnumber").value;
    var rmnumber = document.getElementById("rmnumber").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var submit = document.getElementById("submit");
    if( password , lname , mnumber , rmnumber , email , username , salut = "" ){
        submit.disabled = true;
    }
    else{
        submit.disabled = false;
        submit.style.opacity="1";
        submit.style.cursor="pointer";
    }
    /*
    salut,lname,mnumber,rmnumber,email,username,password = "" ? submit.disabled= true : submit.disabled= false ; 
    salut,lname,mnumber,rmnumber,email,username,password = "" ? submit.style.cursor="not-allowed" : submit.style.cursor="pointer";
    salut,lname,mnumber,rmnumber,email,username,password = "" ? submit.style.opacity="0.3" : submit.style.opacity="1";  */ 
}
function passtext(){
    var x = document.getElementById("password");
   
    if(x.type =="password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
}
function passwarning(){
     document.getElementById("passwordw").style.display="inline";
}
function passvalidd(){
    var a = document.getElementById("password").value;
    var b = document.getElementById("passwordc");
    var c = document.getElementById("passwords");
    var d = document.getElementById("passwordn");
    var h = document.getElementById("passwordw");
    
    var e = /A-Z/g;
    var f = /a-z/g;
    var g = /0-9/g;
  if(a.match(e)){
      b.style.display="none";
  }
    else{
        b.style.display="inline";
    }
  if(a.match(f)){
      c.style.display="none"
  } 
    else{
        c.style.display="inline"
    }
    if(a.match(g)){
      d.style.display="none";
  }
    else{
        d.style.display="inline";
    }
    if(a.match(e) && a.match(f) && a.match(g) ){
        h.style.display= "none";
    }
    else{
        h.style.display= "inline";
    }
}
function passwordclick(){
    var a = document.getElementById("passwordw");
    a.style.display="block";
}
function emailsugg(){
    var input = document.getElementById("email").value;
    var gmail = document.getElementById("gmail");
    var yahoo = document.getElementById("yahoo");
    var hotmail = document.getElementById("hotmail");
    var outlook = document.getElementById("outlook");
    var option = document.getElementById("poption");
    input.match('@') ? option.style.display="inline" : option.style.display="none";
    input.match(".com") ? option.style.display="none" : "";
    input.match('@') ? option.style.cursor="pointer" : "";
}   
function gmail(){
     var input = document.getElementById("email").value; 
     var inputbox = document.getElementById("email");
    inputbox.value = input+"gmail.com"; 
       var option = document.getElementById("poption");
    option.style.display="none";
}
function yahoo(){
     var input = document.getElementById("email").value; 
     var inputbox = document.getElementById("email");
     inputbox.value = input+"yahoomail.com";
     var option = document.getElementById("poption");
        option.style.display="none";
}
function hotmail(){
     var input = document.getElementById("email").value; 
     var inputbox = document.getElementById("email");
     inputbox.value = input+"hotmail.com"; 
     var option = document.getElementById("poption");
     option.style.display="none";
}
function outlook(){
     var input = document.getElementById("email").value; 
     var inputbox = document.getElementById("email");
     inputbox.value = input+"outlook.com"; 
     var option = document.getElementById("poption");
     option.style.display="none";
}








