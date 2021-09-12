window.onload = function() {
    generateMask();

    const inputCopyLink = document.getElementById("linkGenerated");
    const divsInputs = document.getElementsByClassName("inputGroup");

	document.getElementById("form").onsubmit = function(e) {
		e.preventDefault();

        const tel = unMkaskTel(this.tel.value);
        const msg = formatMsgWhatsApp(this.msg.value);

        const link = "https://wa.me/55"+tel+"?text="+msg;

        inputCopyLink.value = link;

        toggleInputs(divsInputs);
	}

    const btsCopyLink = document.getElementsByClassName("copyLink");

    for (var i = 0; i < btsCopyLink.length; i++) {
        btsCopyLink.item(i).onclick = function() {
            copyLink();
        };
    }

    document.getElementById("resetForm").onclick = function() {
        toggleInputs(divsInputs);
    }
}

function formatMsgWhatsApp(msg) {
    msg = msg.replaceAll(" ", "%20");
    msg = msg.replaceAll("\n", "%0A");

    return msg;
}

function copyLink() {
}

function toggleInputs(divs) {
    for (var i = 0; i < divs.length; i++) {
        const div = divs.item(i);
        if (div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
    console.log(div.style.display);
}