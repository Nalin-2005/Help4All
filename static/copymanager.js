$('#emailcb').hover(function () {       /* To animate the Description of the copy button (EMAIL)  */
        $('#email').slideDown("slow");
    }, function () {
        $('#email').slideUp("slow");
    }
);  

$('#phonecb').hover(function(){         /* To animate the Description of the copy button (PHONE)  */
        $('#phone').slideDown("slow");
    }, function(){
        $('#phone').slideUp("slow")
    }
);

function copyEmail(){                   /* Function to copy Email Address */
    node = document.getElementById("emailaddress");

    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
    }
    
    document.execCommand("copy");
    alert("Copied the email address");
}

function copyPhone(){                   /* Function to copy Phone NUmber */
    node = document.getElementById("phonenumber");

    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
    }
    
    document.execCommand("copy");
    alert("Copied the phone number");

}