const appFunctions = () => {
    return {
        verify: () => {
            let input = document.querySelectorAll('input');
            let error = document.querySelectorAll('.error');
            let labelError = document.querySelectorAll('label');
            let dayInputValue = document.querySelector('#dayInput');
            let monthInputValue = document.querySelector('#monthInput');
            let yearInputValue = document.querySelector('#yearInput');

            let storeLabelError = Array.from(labelError);
            let storeInputError = Array.from(input);
            let storeError = Array.from(error);

            document.querySelector('#submit').addEventListener('click', () => {
                Array.from(input).forEach((inputElement, index) => {
                    if (inputElement.value === '') {
                        storeError[index].style.display = 'flex';
                        storeError[index].innerHTML = 'This field is required!';
                        storeLabelError[index].classList.add('label-error');
                        storeInputError[index].style.border = '1px solid red';
                    } else {
                        storeError[index].style.display = 'none';
                        storeError[index].innerHTML = '';
                        storeLabelError[index].classList.remove('label-error');
                        storeInputError[index].style.border = '1px solid #DBDBDBFF';
                    }
                });

                const dayValue = parseInt(dayInputValue.value);
                const monthValue = parseInt(monthInputValue.value);
                const yearValue = parseInt(yearInputValue.value);

                if (dayValue > 31 || dayValue < 1) {
                    storeError[0].style.display = 'flex';
                    storeError[0].innerHTML = 'Must be a valid Day.';
                    storeLabelError[0].classList.add('label-error');
                    storeInputError[0].style.border = '1px solid red';
                } else {
                    storeError[0].style.display = 'none';
                    storeLabelError[0].classList.remove('label-error');
                    storeInputError[0].style.border = '1px solid initial';
                }

                if (monthValue > 12 || monthValue < 1) {
                    storeError[1].style.display = 'flex';
                    storeError[1].innerHTML = 'Must be a valid Month.';
                    storeLabelError[1].classList.add('label-error');
                    storeInputError[1].style.border = '1px solid red';
                } else {
                    storeError[1].style.display = 'none';
                    storeLabelError[1].classList.remove('label-error');
                    storeInputError[1].style.border = '1px solid initial';
                }

                if (yearValue > new Date().getFullYear() || yearValue < 1) {
                    storeError[2].style.display = 'flex';
                    storeError[2].innerHTML = 'Must be in the past.';
                    storeLabelError[2].classList.add('label-error');
                    storeInputError[2].style.border = '1px solid red';
                } else {
                    storeError[2].style.display = 'none';
                    storeLabelError[2].classList.remove('label-error');
                    storeInputError[2].style.border = '1px solid initial';
                }
            });
        },
        calculate: () => {
            let dayInputValue = document.querySelector('#dayInput');
            let monthInputValue = document.querySelector('#monthInput');
            let yearInputValue = document.querySelector('#yearInput');
            let years = document.querySelector('#years-number');
            let months = document.querySelector('#months-number');
            let days = document.querySelector('#days-number');
            let date = new Date();

            document.querySelector('#submit').addEventListener('click', () => {
                if (date.getMonth() < parseInt(monthInputValue.value) - 1) {
                    years.innerHTML = date.getFullYear() - parseInt(yearInputValue.value) - 1;
                } else {
                    years.innerHTML = date.getFullYear() - parseInt(yearInputValue.value);
                }
                months.innerHTML = parseInt(monthInputValue.value) - (date.getMonth() + 1);
                if (date.getDate() > parseInt(dayInputValue.value)) {
                    days.innerHTML = date.getDate() - parseInt(dayInputValue.value);
                } else {
                    days.innerHTML = parseInt(dayInputValue.value) - date.getDate();
                }
            });
        }
    }
}
export default appFunctions();