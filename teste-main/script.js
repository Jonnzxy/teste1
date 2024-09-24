// script.js - Script para lidar com eventos e funcionalidades do site

// Adicionando evento de submit ao formulário
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    if (nome && email && senha) {
      console.log('Dados válidos!');
      // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    } else {
      console.log('Dados inválidos!');
    }
  });
  
  // Adicionando evento de hover ao footer
  document.getElementById('footer').addEventListener('mouseover', () => {
    document.getElementById('footer').style.bottom = '0';
  });
  
  document.getElementById('footer').addEventListener('mouseout', () => {
    document.getElementById('footer').style.bottom = '-50px';
  });