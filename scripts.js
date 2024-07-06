document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', () => {
        window.location.href = '/login';
    });

    const ctaBtns = document.querySelectorAll('.cta-btn');
    ctaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = '/contact';
        });
    });
});
