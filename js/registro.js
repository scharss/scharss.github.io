/*
Developer
https://scharss.github.io
*/

var config = {

};

firebase.initializeApp(config);

var email, password, passwordConfirm;

function exito() {
    alert('User account created successfully. ');
    location.assign('index.html');
}

function alFinalizar(error) {
    // console.log(error);

    if (error !== 'undefined') {
        // Error codes:
        // auth/invalid-email
        // auth/weak-password
        // auth/email-already-in-use
        switch (error.code) {
            case 'auth/email-already-in-use':
                alert('ERROR:The new user account cannot be created, because the e-mail is already in use!');
                break;
            case 'auth/invalid-email':
                alert('ERROR: The email provided is not a correct email.');
                break;
            default:
                alert('There was an error creating the user.\n\n' + error + '\n');
                break;
        }
    }
}


$(function() {
    // We program the click of the form buttons:
    $("#botonRegistro").click(function() {
        email = $("#email").val();
        password = $("#password").val();
        passwordConfirm = $("#password2").val();

        if (password != passwordConfirm) {
            alert("Error: Passwords are different!");
        } else
            firebase.auth().createUserWithEmailAndPassword(email, password).then(exito).catch(alFinalizar);
    });


    $("#botonCancelar").click(function() {
        location.assign('index.html');
    });

});