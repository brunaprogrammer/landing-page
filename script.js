const form = document.getElementById('news');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = new FormData(form);
  const email = data.get('email');

  localStorage.setItem('email-news', email);
  alert('Email cadastrado na base com sucesso');
});