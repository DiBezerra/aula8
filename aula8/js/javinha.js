function verde() { 
    document.getElementById("corpo").style.backgroundColor = "#0f0";
}

function azul() {
    document.getElementById("corpo").style.backgroundColor = "#00f";
}

function amarelo() {
    document.getElementById("corpo").style.backgroundColor = "#ff0";
}

function nome() {
    const cxnome = document.getElementById("cxnome").value;
    const cxemail = document.getElementById("cxemail").value;

    if (cxnome === "" || cxemail === "") {
        alert("Digite um valor, campo em branco");
    } else {
        alert("Gravado com sucesso!");
    }
}
