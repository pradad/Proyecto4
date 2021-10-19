document.getElementById("seek").addEventListener("click", function () {
    var inputId = document.getElementById("ident").value
    var dataConsultada = localStorage.getItem(inputId)
    
    console.log(dataConsultada)
    if (dataConsultada == null) {
        alert("There is not information about")
    } else {var pElement = document.getElementById("enviar")}})