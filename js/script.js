document.getElementById("enviar").addEventListener("click", validaformulario)

function validaformulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
    alert("Pronto! Você receberá novidades por email.")
  }else{
    alert("Prencha todos os campos para continuar.")
  }
}
