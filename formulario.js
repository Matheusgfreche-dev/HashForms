const formulario = document.getElementById('formulario');

function isValidName(string) {
  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    if (
      !(
        (char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z') ||
        char === ' '
      )
    ) {
      return false;
    }
  }
  return true;
}
// console.log(isValidName("Millene"));

function isValidCpf(cpf) {
  // console.log(isNaN(cpf));
  return cpf.length === 11 && !isNaN(cpf);
}
// console.log(isValidCpf("asdasfasfas"));

function isValidPhone(phone) {
  return phone.length === 11 && !isNaN(phone);
}

function isValidCEP(cep) {
  return cep.length === 8 && !isNaN(cep);
}
function isValidState(state) {
  return (
    state.length === 2 &&
    state[0] >= 'A' &&
    state[0] <= 'Z' &&
    state[1] >= 'A' &&
    state[1] <= 'Z'
  );
}
// console.log(isValidState("SP"))
// console.log(isValidState("sp"))
// console.log(isValidState("SP4"))

function validarEGuardarFormulario(evento) {
  evento.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const cep = document.getElementById('cep').value.trim();
  const rua = document.getElementById('rua').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const complemento = document.getElementById('complemento').value.trim();
  const bairro = document.getElementById('bairro').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const estado = document.getElementById('estado').value.trim();

  if (
    !nome ||
    !cpf ||
    !telefone ||
    !cep ||
    !rua ||
    !numero ||
    !complemento ||
    !bairro ||
    !cidade ||
    !estado
  ) {
    alert('Por favor, preencha todos os campos');
    return;
  }
  if (!isValidName(nome)) {
    alert('O nome deve conter apenas letras e espaços');
    return;
  }

  if (!isValidCpf(cpf)) {
    alert('O CPF deve conter 11 dígitos numéricos');
    return;
  }

  if (!isValidPhone(telefone)) {
    alert('O Telefone deve conter 11 dígitos numéricos');
    return;
  }

  if (!isValidCEP(cep)) {
    alert('O CEP deve conter 8 dígitos numéricos');
    return;
  }

  if (!isValidState(estado)) {
    alert('O Estado deve ser uma sigla de letras maiúsculas');
    return;
  }

  const dadosFormulario = {
    nome,
    cpf,
    telefone,
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  };
  localStorage.setItem('dadosFormulario', JSON.stringify(dadosFormulario));
  formulario.reset();
  alert('Dados salvos com sucesso!');
}
formulario.addEventListener('submit', validarEGuardarFormulario);
