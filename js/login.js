document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();

        if (res.ok) {
            alert('Login successful! Redirecting to homepage...');
            window.location.href = 'index.html';
        } else {
            alert(data.message || 'Login failed!');
        }
    } catch (err) {
        console.error(err);
        alert('An error occurred. Please try again.');
    }
});
