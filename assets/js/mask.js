function maskTel(tel) {
    tel = tel.replace(/\D/g,"");
    tel = tel.replace(/^(\d{2})(\d)/g,"($1) $2");
    tel = tel.replace(/(\d)(\d{4})$/,"$1-$2");

    return tel;
}

function unMkaskTel(tel) {
    return tel.replace(/[^\w\\s]|_/g, "");
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