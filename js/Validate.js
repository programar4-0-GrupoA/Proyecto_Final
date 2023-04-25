const form2 = document.getElementById('form2'); //  es el formulario que se va a validar.
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form2.addEventListener('submit', e => { // Agrega un evento de escucha al formulario form2, que se activa cuando se envía el formulario.
    e.preventDefault(); // Previenen la acción predeterminada del formulario, que en este caso es enviar los datos.

    validateInputs(); //  Llama a la función validateInputs, que es la función que se encarga de validar los campos del formulario.
});

const setError = (element, message) => { //se encarga de establecer un mensaje de error y aplicar una clase CSS a un campo de entrada específico.
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => { // se encarga de establecer un mensaje de éxito y aplicar una clase CSS a un campo de entrada específico.
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => { // valida si una dirección de correo electrónico es válida utilizando una expresión regular.
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => { // validar los campos del formulario.
    const usernameValue = username.value.trim(); // Obtiene el valor del campo username y elimina los espacios en blanco al principio y al final.
    const emailValue = email.value.trim();//igual a username pero con email
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') { // Verifica si usernameValue es una cadena vacía y llama a la función setError si es verdadero, de lo contrario llama a setSuccess.
        setError(username, 'Se requiere nombre de usuario');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Dirección de correo electrónico inválida');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'se requiere contraseña');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'La contraseña debe tener al menos 8 caracteres.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Por favor, confirme su contraseña');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Las contraseñas no coinciden");
    } else {
        setSuccess(password2);
    }

};

