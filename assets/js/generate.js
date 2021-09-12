window.onload = function() {
    generateMask();

    let link;

    const inputCopyLink = document.getElementById("linkGenerated");
    const btCopyLink = document.getElementById("btCopyLink");
    const divInputs = document.getElementsByClassName("inputGroup");
    const hrefLinkGenerated = document.getElementById("hrefLinkGenerated");

	document.getElementById("form").onsubmit = function(e) {
		e.preventDefault();

        const tel = unMkaskTel(this.tel.value);
        const msg = formatMsgWhatsApp(this.msg.value);

        link = "https://wa.me/55"+tel+"?text="+msg;

        inputCopyLink.value = link;
        hrefLinkGenerated.href = link;

        for (var i = 0; i < divInputs.length; i++) {
            if (divInputs.item(i).classList.contains("inputsGenerateLink")) {
                divInputs.item(i).style.display = "none";
            } else if (divInputs.item(i).classList.contains("inputsLinkGenerated")) {
                divInputs.item(i).style.display = "block";
            }
        }
	}

    const btsCopyLink = document.getElementsByClassName("copyLink");

    for (var i = 0; i < btsCopyLink.length; i++) {
        btsCopyLink.item(i).onclick = function() {
            copyLink(link);
        };
    }

    document.getElementById("resetForm").onclick = function() {
        for (var i = 0; i < divInputs.length; i++) {
            if (divInputs.item(i).classList.contains("inputsGenerateLink")) {
                divInputs.item(i).style.display = "block";
            } else if (divInputs.item(i).classList.contains("inputsLinkGenerated")) {
                divInputs.item(i).style.display = "none";
            }
        }
    }
}

function formatMsgWhatsApp(m) {
    m = m.replaceAll(" ", "%20");
    m = m.replaceAll("\n", "%0A");

    return m;
}

function copyLink(l) {
    navigator.clipboard.writeText(l).then(function() {
        btCopyLink.textContent = "COPIADO!";

        setTimeout(function(){
            btCopyLink.innerHTML = `<i class="far fa-copy"></i> COPIAR LINK`;
         }, 3000);
    }, function(err) {
        console.error('Erro ao copiar link ', err);
    });
}