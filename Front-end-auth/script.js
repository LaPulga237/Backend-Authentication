const registerForm = document.getElementById('registerForm');



registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch('http://localhost:3000/v1/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message || 'Registered!');
});




