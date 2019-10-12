$(document).ready(function () {

    $volume = "20Л";

    $(".product__volume").bind("click", function () { 
        $(".product__volume").removeClass('product__volume--active');
        $(this).addClass('product__volume--active')
        $volume = $(this).text();
        $text = $(this).attr('data-test') + ' р.'
        $('.product__price').text($text);
    })

    $(".form__send").bind("click", function(e) {
        e.preventDefault();
        $name = $("#name").val();
        $phone = $("#phone").val();

        $date =  "name="+$name+"&phone="+$phone+"&volume"+$volume;
        
        $.ajax({
            type: "POST",
            url: "../ajax/volume.php",
            data: $date,
            success: function (data) {
                $value = JSON.parse(data)

                if ($value.indexOf('name') > -1){
                    $("#form__name").show();
                } else {
                    $("#form__name").hide();
                }

                if ($value.indexOf('phone') > -1){
                    $("#form__phone").show();
                } else {
                    $("#form__phone").hide();
                }

                if ($value.indexOf('ready') > -1){
                    alert('Готово')
                }

                console.log(data);
            }
        });
    })

    $(function(){
        $("#phone").mask("8(999) 999-9999");
      });

});