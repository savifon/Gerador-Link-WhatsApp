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

        toggleInputs(divInputs, "inputsGenerateLink");
	}

    const btsCopyLink = document.getElementsByClassName("copyLink");

    for (var i = 0; i < btsCopyLink.length; i++) {
        btsCopyLink.item(i).onclick = function() {
            copyLink(link);
        };
    }

    document.getElementById("resetForm").onclick = function() {
        toggleInputs(divInputs, "inputsLinkGenerated");
    }
}

function formatMsgWhatsApp(m) {
    m = m.replaceAll(" ", "%20");
    m = m.replaceAll("\n", "%0A");

    return m;
}

function copyLink(strLink) {
    navigator.clipboard.writeText(strLink).then(function() {
        btCopyLink.textContent = "COPIADO!";

        setTimeout(function() {
            btCopyLink.innerHTML = `<i class="far fa-copy"></i> COPIAR LINK`;
         }, 3000);
    }, function(err) {
        console.error('Erro ao copiar link ', err);
    });
}

function toggleInputs(div, nameClass) {
    for (var i = 0; i < div.length; i++) {
        if (div.item(i).classList.contains(nameClass)) {
            div.item(i).style.display = "none";
        } else {
            div.item(i).style.display = "block";
        }
    }
}