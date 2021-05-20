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

                switch(weather_description){
                    case weather_description = "nubes":
                        alert("Hay muchas nubes, procure salir abrigado/a y si lo desea, lleve un paraguas.");
                    break;

                    case weather_description = "claro":
                        alert("El dia esta despejado, si va a salir, lleve una botella con agua y ropa comoda.");
                    break;

                    case weather_description = "neblina":
                        alert("Cuidado con la neblina, mantengase a la defensiva si va a manejar.");
                    break;
                    
                    case weather_description = "humo":
                        alert("Mucho humo en el ambiente, evite salir al aire libre o realizar deporte, si lo hace use mascarilla.");
                    break;

                    case weather_description = "calina":
                        alert("Hay polvo en suspensión en el ambiente, evite salir, si lo hace, use mascarilla.");
                    break;

                    case weather_description = "polvo":
                        alert("Hay polvo en suspensión en el ambiente, evite salir, si lo hace, use mascarilla.");
                    break;

                    case weather_description = "niebla":
                        alert("Hay mucha niebla, si sale, hagalo abrigado y si lo desea, lleve un paraguas.");
                    break;

                    case weather_description = "arena":
                        alert("Hay tormenta de arena, evite salir a toda costa.");
                    break;

                    case weather_description = "ceniza":
                        alert("Estan cayendo cenizas en grandes cantidades, use mascarilla en todo momento y trate de alejarse de la zona.");
                    break;

                    case weather_description = "chubasco":
                        alert("Estan cayendo chubascos, salga con paraguas y bien abrigado/a.");
                    break;

                    case weather_description = "tornado":
                        alert("Hay alerta de tornado, favor de dirigirse al refugio mas cercano.");
                    break;

                    case weather_description = "nieve":
                        alert("Esta cayendo nieve, salga abrigado/a, con paraguas y si maneja, recuerde poner cadenas a las ruedas.");
                    break;

                    case weather_description = "lluvia":
                        alert("Esta lloviendo, si sale lleve paraguas y ropa abrigada.");
                    break;

                    case weather_description = "llovizna":
                        alert("Esta cayendo llovizna, si sale, hagalo con paraguas y ropa abrigada.");
                    break;
                }




            },
            error: function(e) {
                console.error(e)
            }
        })
    }

}