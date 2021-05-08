
$(function() {

    $("form[name='contact']").validate({

      rules: {
        
        name: "required",
        email: {
          required: true,
          
          email: true
        },
        number: {
            required: true,
            minlength: 9,
            maxlenght: 12
        },
        mensaje:"required"
      },

      messages: {
        name: "Por favor escriba su nombre",
        email: "Por favor escriba un correo electronico valido",
        number: "Por favor escriba un numero valido",
        mensaje: "Escriba un mensaje"
      },

      submitHandler: function(form) {
        form.submit();
      }
    });
  });