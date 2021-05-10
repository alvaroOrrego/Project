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
        password: "Clave invalida",
        number: "Por favor escriba un numero valido"
      },

      submitHandler: function(form) {
        form.submit();
      }
    });
  });