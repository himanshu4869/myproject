
	

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function viewallBtn1() {
    window.open("product1.html");
}

function viewallBtn2() {
    window.open("product2.html");
}

function viewallBtn3() {
    window.open("product3.html");
}

function viewallBtn4() {
    window.open("product4.html");
}

function viewallBtn5() {
    window.open("product5.html");
}

function viewallBtn6() {
    window.open("product6.html");
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function page_A() {
    window.open("page1.html");
}

function page_B() {
    window.open("page2.html");
}

function page_C() {
    window.open("page3.html");
}

function page_D() {
    window.open("page4.html");
}

function page_E() {
    window.open("page5.html");
}

/////////////////////////////////////////////////////////
let closeForm = function() {
        let form = document.getElementById('contactForm1');
        let open = true;
    
        form.style.display = "block";
        if(open == true){
            form.style.display = "none";
            open = false;
        } 
    }
/////////////////////////////////////////////////////////

function sendwhatsapp(){
    
    var phonenumber = "+918851215356";
    var name = document.querySelector(".name").value;
    var phone = document.querySelector(".phone").value;
    var message = document.querySelector(".message").value;
    
    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Name :* "+name+"%0a"
    +"*Phone :* "+phone+"%0a"
    +"*Message :* "+message
    +"%0a%0a"
    +"Thanks for support 😀";

    window.open(url, '_blank').focus();
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function sendwhatsapp2(){
    
    var phonenumber = "+918851215356";
    var name = document.querySelector(".name2").value;
    var phone = document.querySelector(".phone2").value;
    var email = document.querySelector(".email2").value;
    var message = document.querySelector(".message2").value;
    
    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Name :* "+name+"%0a"
    +"*Phone :* "+phone+"%0a"
    +"*Email :* "+email+"%0a"
    +"*Message :* "+message
    +"%0a%0a"
    +"Thanks for support 😀";

    window.open(url, '_blank').focus();
}