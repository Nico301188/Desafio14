
function onChangeName() {
  const fistName = document.getElementById("fistName")
  const name = fistName.value;
  const errorElement = document.getElementById("fistName-error")
  const reg = /^[A-Za-zÁÉÍÓÚáéíóúÑñ][a-záéíóúñ]{2,9}$/;
  if (!reg.test(name)) {
    errorElement.innerText = "3 a 10 caracteres sin espacios, primer letra puede ser mayuscula."
    if (!fistName.className.includes("inputerror")) {

      fistName.clasname = fistName.className.concat(" inputerror")
    }
  } else if (errorElement.innerText) {
    errorElement.innerText = ""
    fistName.className = fistName.className.replace("inputerror", "")
  }

}

function onChangeSurName(){
  
  const surName = document.getElementById("surName")
  const Name = surName.value;
  const errorSurName = document.getElementById("surname-error")
  const regSurName = /^[A-Za-záéíóúÁÉÍÓÚñÑ']{2,20}$/;
  if (!regSurName.test(Name)) {
    errorSurName.innerText = "2 a 20 caracteres sin espacios."
    if (!surName.className.includes("inputerror")) {
      
      surName.clasname = surName.className.concat(" inputerror")
    }
  } else if (errorSurName.innerText) {
    errorSurName.innerText = ""
    surName.className = surName.className.replace("inputerror", "")
  }
  
}

function onChangeDocument() {
  const docTipD = document.getElementById('docTipD');
  const docTipC = document.getElementById('docTipC');
  const numeroDocumento = document.getElementById('document');
  const documentoError = document.getElementById('document-error');
  let valor = numeroDocumento.value;
  
  // Limpiar mensaje de error
  documentoError.textContent = '';
  
  if (docTipD.checked) {
    // DNI seleccionado
    const regDni = /^(\d{7,8}|\d{1,2}(?:\.\d{3}){2}|\d{1,3}(?:\.\d{3}){1,2})$/;
    if (!regDni.test(valor)) {
      documentoError.textContent = 'Formato de DNI inválido.';
    }
  } else if (docTipC.checked) {
    // CUIL seleccionado
    const regCuit = /^(?:\d{2}-\d{8}-\d{1}|\d{11})$/;
    if (!regCuit.test(valor)) {
          documentoError.textContent = 'Formato de CUIL inválido.';
        }
      }
    }

    
    function onChangeAdres(){
      
      const address = document.getElementById("address")
  const Name = address.value;
  const errorAddress = document.getElementById("address-error")
  const regSurName = /^[\w\sáéíóúÁÉÍÓÚñÑüÜçÇãõÃÕàÀêÊôÔâÂëËäÄöÖîÎúÚìÌòÒ,.()\-'"\/°]{10,200}$/;
  if (!regSurName.test(Name)) {
    errorAddress.innerText = "10 a 200 caracteres."
    if (!surName.className.includes("inputerror")) {
      
      surName.clasname = surName.className.concat(" inputerror")
    }
  } else if (errorAddress.innerText) {
    errorAddress.innerText = ""
    surName.className = surName.className.replace("inputerror", "")
  }
  
}

document.getElementById('docTipD').addEventListener('change', function() {
  document.getElementById('document').value = '';
  document.getElementById('document-error').textContent = '';
});

document.getElementById('docTipC').addEventListener('change', function() {
  document.getElementById('document').value = '';
  document.getElementById('document-error').textContent = '';
});

// function submitForm(){
//   validarCadena();
//   debugger
//   document.getElementById('datos').submit();
// }

function onSubmitContact(e) {

  
  alert (`Formulario enviado correctamente`)

}