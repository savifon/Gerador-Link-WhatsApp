function maskTel(num) {
    num = num.replace(/\D/g,"");
    num = num.replace(/^(\d{2})(\d)/g,"($1) $2");
    num = num.replace(/(\d)(\d{4})$/,"$1-$2");

    return num;
}

function unMkaskTel(num) {
    num = num.replace(/[^\w\\s]|_/g, "");

    return num;
}

function generateMask() {
    const btSubmit = document.getElementById("tel");
    
    btSubmit.onkeyup = function() {
        this.value = maskTel(this.value);
    }
    
    btSubmit.onblur = function() {
        if(this.value.length<14) {
            this.value = "";
        }
    }
}