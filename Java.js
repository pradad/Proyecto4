çdocument.getElementById("enviar").addEventListener("click",function(e){
    e.preventDefault()
    
    var general = document.getElementById("general").value
    var toma = document.getElementById("toma").innerText
    var vacunacion = document.getElementById("vacunacion").innerText
    var imagenes = document.getElementById("imagenes").innerText
    var especialista = document.getElementById("especialista").innerText
    console.log(general,toma,vacunacion,imagenes,especialista)

})


document.getElementById("enviar").addEventListener("click",function(e){
    e.preventDefault()
    
    
    var identidad = document.getElementById("identidad").value
    var nombre = document.getElementById("nombre").value
    var ciudad = document.getElementById("ciudad").value
    var edad = document.getElementById("edad").value
    var telefono = document.getElementById("telefono").value
    console.log(identidad,nombre,ciudad,edad,telefono)
    if(identidad=="" || nombre=="" || ciudad=="" || edad=="" || telefono==""){
        alert("Debe llenar todos los campos!")
    }else{
        localStorage.setItem(identidad,nombre,ciudad,edad,telefono)
        alert("Todo quedó guardado!")
    }
    
})

