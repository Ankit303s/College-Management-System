document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
  
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', data.token);
      alert('Login successful');
      window.location.href = 'index.html';
    } else {
      alert('Login failed');
    }
  });
  