//mail_to
//setup email here
$(function(){
   $('#button-send').click(function (event) {
        $('#button-send').html('Отправка...');
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/sendemail.php',
            data: $('#contact_form').serialize(),
            success: function (html) {
                if (html.success == '1') {
                    $('#button-send').html('Отправленно');
                    $('#success').show();
                }
                else {
                    $('#button-send').html('Ошибка');
                    $('#error').show();
                }
            },
            error: function () {
                $('#button-send').html('Ошибка');
                $('#error').show();
            }
        });
    }); 
});


// Floating label headings for the contact form
$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});


