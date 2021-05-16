$(document).ready(function(){

    anime()
    
});

function anime(){

    $.get({
        url: 'https://kitsu.io/api/edge/anime',

        success: function(datos){

        var contenedor = $('#listado')
        contenedor.empty();
         

        $.each(datos.data, function(i, anime){

            console.log(anime)

            //var imagen = 'http://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png'
            
            /*if (anime.attributes.coverImage = null)
                imagen = 'http://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png'
            else
                imagen = anime.attributes.coverImage.original*/
            
            var imagen = anime.attributes.posterImage.original
            var verMas = ' ...'
            var descripcion = anime.attributes.description.substr(0,403)+ verMas
            var titulo = anime.attributes.canonicalTitle
            var episodios = anime.attributes.episodeCount
            var clasificacion = anime.attributes.ageRatingGuide+'.'
            var termino = anime.attributes.endDate

            if (episodios == 1)
                episodios = "Movie"
            else
                episodios = anime.attributes.episodeCount


            contenedor.append("<div class='card'>"+
            "<img id='"+titulo+"' src='"+ imagen+" 'class='card-img-top' alt='"+titulo+"'><div class='card-body'>"+
                        "<h5 class='card-title'><b>Anime: </b>" + titulo +"</h5>"+
                        "<p class='card-text'><b>Episodios: </b>"+ episodios +"<br><b>Término: </b>"+ termino +"<br><b>Clasificación: </b>"+ clasificacion +"<br><b>Descripción: </b>"+ descripcion +" </p></div> </div>"
            
            );

        });
        
           
        },
        error:function(error){
            console.error(error);
        }
    });
}