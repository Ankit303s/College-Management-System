document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });
        const data = await res.json();

        if (res.ok) {
            alert('Signup successful! Redirecting to login page...');
            window.location.href = 'login.html';
        } else {
            alert(data.message || 'User already exist');
        }
    } catch (err) {
        console.error(err);
        alert('An error occurred. Please try again.');
    }
});
