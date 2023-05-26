document.addEventListener('DOMContentLoaded', () => {


    document.querySelector('#submit').addEventListener('submit', e => {
        e.preventDefault();
        const input = document.querySelector('#email');
        const err = document.querySelector('#error');

        if (!/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/.test(input.value)) {
            input.classList.add('input-error')
            err.classList.add('error');
            err.innerHTML = 'Validate email required!';
        } else if (input.value === '') {
            alert('Please enter your email')
        } else {
            input.classList.remove('input-error')
            err.classList.remove('error');
            err.innerHTML = '';

            setTimeout(() => {
                document.querySelector('.card').style.display = 'none';
                document.querySelector('.card-success').style.display = 'block';
                document.querySelector('.msg-email').textContent = input.value;

                document.querySelector('.btn-success').addEventListener('click', () => {
                    document.querySelector('.card').style.display = 'block';
                    document.querySelector('.card-success').style.display = 'none';

                    console.log(input.value)
                    input.value = '';
                });
            }, 1000);


        }


    });
});
