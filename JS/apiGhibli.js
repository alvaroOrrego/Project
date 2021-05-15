$(document).ready(function(){
    //$('#api1').click(initiate_ghibliapi);
    initiate_ghibliapi();
});

function crearCard(id, img, titulo, descripcion){
    var card = "<div class = 'card'>"+
    "<img id= '" + id + "'src='" + img + "'class = 'card-img-top' alt='" + titulo +"' ><div class ='card-body'>" +
    "<h5 class= 'card-title'>" + titulo + "</h5>" + 
    "<p class='card-text'>" + descripcion + "</p></div></div>"

    return card
}

function initiate_ghibliapi(){
        $.get({
            url: 'https://ghibliapi.herokuapp.com/films', //DIRECCIÓN SERVER
            success: function(listado) {  
            console.log(listado);
            
                var contenedor = $('#listado')
                    contenedor.empty();

            var imagen;

            $.each(listado, function (index, pelicula){
                
                if (pelicula.title == "Castle in the Sky"){
                    imagen = 'Imagenes/apiGhibli/castleinthesky.jpg';

                    } else if (pelicula.title == "Grave of the Fireflies"){
                        imagen = 'Imagenes/apiGhibli/graveofthefireflies.jpg';
                    
                    } else if (pelicula.title == "My Neighbor Totoro"){
                        imagen = 'Imagenes/apiGhibli/totoro.jpg';
                    
                    } else if (pelicula.title == "Kiki's Delivery Service"){
                        imagen = 'Imagenes/apiGhibli/kikidelivery.jpg';
                    
                    } else if (pelicula.title == "Only Yesterday"){
                        imagen = 'Imagenes/apiGhibli/onlyyesterday.jpg';
                    
                    } else if (pelicula.title == "Porco Rosso"){
                        imagen = 'Imagenes/apiGhibli/porcorosso.jpg';
                    
                    } else if (pelicula.title == "Pom Poko"){
                        imagen = 'Imagenes/apiGhibli/pompoko.jpg';

                    } else if (pelicula.title == "Whisper of the Heart"){
                        imagen = 'Imagenes/apiGhibli/whisperoftheheart.jpg';

                    } else if (pelicula.title == "Princess Mononoke"){
                        imagen = 'Imagenes/apiGhibli/mononoke.jpg';
                    
                    } else if (pelicula.title == "My Neighbors the Yamadas"){
                        imagen = 'Imagenes/apiGhibli/theyamadas.jpg';
                    
                    } else if (pelicula.title == "Spirited Away"){
                        imagen = 'Imagenes/apiGhibli/chihiro.jpg';
                    
                    } else if (pelicula.title == "The Cat Returns"){
                        imagen = 'Imagenes/apiGhibli/catreturns.jpg';

                    } else if (pelicula.title == "Howl's Moving Castle"){
                        imagen = 'Imagenes/apiGhibli/movingcastle.jpg';
                    
                    } else if (pelicula.title == "Tales from Earthsea"){
                        imagen = 'Imagenes/apiGhibli/talesfromearthsea.jpg';
                    
                    } else if (pelicula.title == "Ponyo"){
                        imagen = 'Imagenes/apiGhibli/ponyo.jpg';

                    } else if (pelicula.title == "Arrietty"){
                        imagen = 'Imagenes/apiGhibli/arrietty.jpg';
                
                    } else if (pelicula.title == "Arrietty"){
                        imagen = 'Imagenes/apiGhibli/arrietty.jpg';

                    } else if (pelicula.title == "From Up on Poppy Hill"){
                        imagen = 'Imagenes/apiGhibli/poppyhill.jpg';
                    
                    } else if (pelicula.title == "The Wind Rises"){
                        imagen = 'Imagenes/apiGhibli/thewindrises.jpg';
                    
                    } else if (pelicula.title == "The Tale of the Princess Kaguya"){
                        imagen = 'Imagenes/apiGhibli/princesskaguya.jpg';
                    
                    } else if (pelicula.title == "When Marnie Was There"){
                        imagen = 'Imagenes/apiGhibli/whenmarnie.jpg';
                    
                    } else if (pelicula.title == "The Red Turtle"){
                        imagen = 'Imagenes/apiGhibli/redturtle.jpg';

                }else{
                    imagen = 'Imagenes/apiGhibli/sin-imagen.jpg';
                }


                var movie = "<b>Director: </b>" + pelicula.director
                    movie += "<br/><b>Título original: </b>" + pelicula.original_title
                    movie += "<br/><b>Título romanizado: </b>" + pelicula.original_title_romanised
                    movie += "<br/><b>Descripción: </b>" + pelicula.description

                    contenedor.append(
                        crearCard(pelicula.id, imagen, pelicula.title, movie)              
                       );
                       
                })
            

            },
            error: function(e) {
                console.error(e)

            }
        
        });
    }
