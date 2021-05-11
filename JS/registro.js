$(function() {

    $("form[name='registro']").validate({

      rules: {
        
        name: "required",
        surname: "required",
        email: {
          required: true,
          
          email: true
        },

        password: {
            required: true,
            minlength: 8
        },

        number: {
            required: true,
            minlength: 9,
            maxlenght: 12
        },
      },

      messages: {
        name: "Por favor escriba su nombre",
        surname: "Por favor escriba su apellido",
        email: "Por favor escriba un correo electronico valido",
        password: "La contraseña debe tener un minimo de 8 caracteres",
        number: "Por favor escriba un numero valido"
      },

      submitHandler: function(form) {
        form.submit();
      }
    });
  });