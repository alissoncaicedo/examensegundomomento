const bloque1 = document.querySelector('#bloque1')
const bloque2 = document.querySelector('#bloque2')
const bloque3 = document.querySelector('#bloque3')
const bloque4 = document.querySelector('#bloque4')
const bloque5 = document.querySelector('#bloque5')
const nombreUsuario = document.querySelector('#nombreUsuario')
const iniciars = document.querySelector('#iniciars')
const password = document.querySelector('#password')
const card = document.querySelector("#card")

const nombre = document.querySelector("#nombre")
const documento = document.querySelector("#documento")
const celular = document.querySelector("#celular")
const direccion = document.querySelector("#direccion")
const correo = document.querySelector("#correo")



const nombreco = document.querySelector("#nombreco")
const referenciaco = document.querySelector("#referenciaco")
const codigoco = document.querySelector("#codigoco")
const valorco = document.querySelector("#valorco")
const Cantidadco = document.querySelector("#Cantidadco")

iniciars.addEventListener("click", () => {
if (nombreUsuario.value === "" && password.value === "") {
        let bloque1 = document.querySelector("#bloque1");
        let bloque2 = document.querySelector("#bloque2");
        bloque1.classList.add("quitar")
        bloque1.classList.remove("visible")
        bloque2.classList.add("visible")
        bloque2.classList.remove("quitar")
}else {

}
}) 
 const cerrars = document.querySelector('#cerrars')

 cerrars.addEventListener("click", () => {
        let bloque1 = document.querySelector("#bloque1")
        let bloque2 = document.querySelector("#bloque2")
        bloque1.classList.remove("quitar")
        bloque1.classList.add("visible")
        bloque2.classList.remove("visible")
        bloque2.classList.add("quitar")
        formulario1.reset()
 })

 const btnclientes = document.querySelector('#btnclientes')

btnclientes.addEventListener("click", () =>{
        let bloque3 = document.querySelector("#bloque3")
        let bloque2 = document.querySelector("#bloque2")
        bloque3.classList.remove("quitar")
        bloque3.classList.add("visible")
        bloque2.classList.remove("visible")
        bloque2.classList.add("quitar")

        })

const btnAtras = document.querySelector('#btnAtras')

btnAtras.addEventListener("click", () => {
        let bloque3 = document.querySelector("#bloque3")
        let bloque2 = document.querySelector("#bloque2")
        bloque3.classList.remove("visible")
        bloque3.classList.add("quitar")
        bloque2.classList.remove("quitar")
        bloque2.classList.add("visible")

})

const btncelulares = document.querySelector('#btncelulares')

btncelulares.addEventListener("click", () => {
        let bloque4 = document.querySelector("#bloque4")
        let bloque2 = document.querySelector("#bloque2")

        bloque4.classList.remove("quitar")
        bloque4.classList.add("visible")
        bloque2.classList.remove("visible")
        bloque2.classList.add("quitar")
  
})
const btnAtras2 = document.querySelector('#btnAtras2')

btnAtras2.addEventListener("click", () => {
        let bloque4 = document.querySelector("#bloque4")
        let bloque2 = document.querySelector("#bloque2")
        bloque4.classList.remove("visible")
        bloque4.classList.add("quitar")
        bloque2.classList.remove("quitar")
        bloque2.classList.add("visible")

})


const btncomputadores = document.querySelector('#btncomputadores')

btncomputadores.addEventListener("click", () => {
        let bloque5 = document.querySelector("#bloque5")
        let bloque2 = document.querySelector("#bloque2")

        bloque5.classList.remove("quitar")
        bloque5.classList.add("visible")
        bloque2.classList.remove("visible")
        bloque2.classList.add("quitar")
  
})
const btnAtras3 = document.querySelector('#btnAtras3')

btnAtras3.addEventListener("click", () => {
        let bloque5 = document.querySelector("#bloque5")
        let bloque2 = document.querySelector("#bloque2")
        bloque5.classList.remove("visible")
        bloque5.classList.add("quitar")
        bloque2.classList.remove("quitar")
        bloque2.classList.add("visible")

})

const btnGuardar = document.querySelector("#btnGuardar") 

btnGuardar.addEventListener("click", () =>{

        let card = document.querySelector("#card")
        card.classList.remove("quitar")
        card.classList.add("visible")
        bloque3.classList.remove("visible")
        bloque3.classList.add("quitar")

        let nombreCard = document.querySelector("#nombreCard")
        let documentoCard = document.querySelector("#documentoCard")
        let celularCard = document.querySelector("#celularCard")
        let direccionCard = document.querySelector("#direccionCard")
        let correoCard = document.querySelector("#correoCard")
        let slcImagen = document.querySelector("#slcImagen")


        nombreCard.innerHTML = (nombre.value)
        documentoCard.innerHTML = (documento.value)
        celularCard.innerHTML = (celular.value)
        direccionCard.innerHTML = (direccion.value)
        correoCard.innerHTML = (correo.value)

        const file = slcImagen.files[0];
        
        if (file) {
        const reader = new FileReader();
        
        reader.addEventListener("load", function () {
                
                contenedorImagen.src = reader.result;
        }, false);
        
        reader.readAsDataURL(file);
        }

})     

const btnGuardar2 = document.querySelector("#btnGuardar2") 

btnGuardar2.addEventListener("click", () =>{
        
        const nombrece = document.querySelector("#nombrece")
        const referencia = document.querySelector("#referencia")
        const codigo = document.querySelector("#codigo")
        const valor = document.querySelector("#valor")
        const Cantidad = document.querySelector("#Cantidad")

        let card = document.querySelector("#card")
        card.classList.remove("quitar")
        card.classList.add("visible")
        bloque4.classList.remove("visible")
        bloque4.classList.add("quitar")

        let nombreCard = document.querySelector("#nombreCard")
        let referenciaCard = document.querySelector("#referenciaCard")
        let codigoCard = document.querySelector("#codigoCard")
        let valorCard = document.querySelector("#valorCard")
        let cantidadCard = document.querySelector("#cantidadCard")
        let slcImagen = document.querySelector("#slcImagen")


        nombreCard.innerHTML = (nombrece.value)
        referenciaCard.innerHTML = (referencia.value)
        codigoCard.innerHTML = (codigo.value)
        valorCard.innerHTML = (valor.value)
        cantidadCard.innerHTML = (Cantidad.value)

        const file = slcImagen.files[0];
        
        if (file) {
        const reader = new FileReader();
        
        reader.addEventListener("load", function () {
                
                contenedorImagen.src = reader.result;
        }, false);
        
        reader.readAsDataURL(file);
        }


})

const btnGuardar3 = document.querySelector("#btnGuardar3") 

btnGuardar3.addEventListener("click", () =>{

        let card = document.querySelector("#card")
        card.classList.remove("quitar")
        card.classList.add("visible")
        bloque5.classList.remove("visible")
        bloque5.classList.add("quitar")

        let nombreCard = document.querySelector("#nombreCard")
        let referenciaCard = document.querySelector("#referenciaCard")
        let codigoCard = document.querySelector("#codigoCard")
        let valorCard = document.querySelector("#valorCard")
        let cantidadCard = document.querySelector("#cantidadCard")
        let slcImagen = document.querySelector("#slcImagen")


        nombreCard.innerHTML = (nombreco.value)
        referenciaCard.innerHTML = (referenciaco.value)
        codigoCard.innerHTML = (codigoco.value)
        valorCard.innerHTML = (valorco.value)
        cantidadCard.innerHTML = (Cantidadco.value)

        const file = slcImagen.files[0];
        
        if (file) {
        const reader = new FileReader();
        
        reader.addEventListener("load", function () {
                
                contenedorImagen.src = reader.result;
        }, false);
        
        reader.readAsDataURL(file);
        }


})
