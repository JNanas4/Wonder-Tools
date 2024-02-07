const loginForm = document.querySelector('.login-form');

const users = [
  {
    email: 'user@example.com',
    password: 'password123',
    name: 'User'
  },
  {
    email: 'admin@example.com',
    password: 'admin123',
    name: 'Admin'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      alert('Login successful');
      loginForm.reset();
      window.location.href = 'index.html';

      // Store user data in local storage
      localStorage.setItem('user-name', user.name);
      localStorage.setItem('user-email', user.email);

      // Update user icon link to dashboard page
      const userIcon = document.querySelector('.user-icon');
      userIcon.addEventListener('click', () => {
        window.location.href = 'dashboard.html';
      });
    } else {
      alert('Invalid email or password');
    }

    // Redirect to index page
    window.location.href = 'index.html';
  });
});

// Check for user data in local storage on page load
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('user-name')) {
    // Update user icon link to dashboard page
    const userIcon = document.querySelector('.user-icon');
    userIcon.addEventListener('click', () => {
      window.location.href = 'dashboard.html';
    });
  } else {
    // Update user icon link to login page
    const userIcon = document.querySelector('.user-icon');
    userIcon.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }
});