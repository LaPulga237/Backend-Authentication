const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch('http://localhost:3000/v1/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  if (result.token) {
    alert('Login successful!');
    localStorage.setItem('token', result.token);
  } else {
    alert(result.message || 'Login failed');
  }
});