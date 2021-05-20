$(document).ready(function(){


});



function crearCard(id, img, titulo, descripcion) {
    var card = "<div class='card weather'>"+
    "<img id='" + id + "' src='" + img + "' class='card-img-top weather-icon' alt='" + titulo + "'><div class='card-body'>"+
    "<h5 class='card-title weather-descrip'>" + titulo + "</h5>" + 
    "<p class='card-text weather-temp'>" + descripcion + "</p></div></div>"

    return card
}


if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(showcityname, handle_errors);

    function handle_errors(error){
        switch(error.code)
        {
            case error.PERMISSION_DENIED: alert("El usuario no compartió datos de geolocalización");
            break;
    
            case error.POSITION_UNAVAILABLE: alert("No se pudo detectar la posición actual");
            break;
    
            case error.TIMEOUT: alert("Tiempo agotado");
            break;
    
            default: alert("Error desconocido");
            break;
        }
    }

    function showcityname(position){
        
        
        var lat = position.coords.latitude;
        var longit = position.coords.longitude;
        var apiKey = "d7c355052b7d44931bc119c55293aa6c";


        $.get({
            url: 'http://api.openweathermap.org/data/2.5/weather?&lang=sp&units=metric&lat=' + lat + '&lon=' + longit + '&appid=' + apiKey,
            success: function(data){
                console.log(data)
                var contenedor = $('#tiempo')
                contenedor.empty();

                var city_name = data["name"];
                var country_name = data["sys"]["country"];
                var weather_description = data["weather"][0]["description"];
                var weather_icon = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+".png' ";
                var temp = data["main"]["temp"];
                

                $.each(data.weather, function(){

                    var description = "<b>Temperatura: </b>"+ temp + "°C"
                    description += "<br/><b>Comuna: </b>" + city_name + " " + country_name
                    contenedor.append(
                        crearCard(data.id, weather_icon, weather_description, description)
                    );
                })
            },
            error: function(e) {
                console.error(e)
            }
        })
    }

}
