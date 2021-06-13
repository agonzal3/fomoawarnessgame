<template>
    <div>
        <div :style="[actualPage !== 0 && $mq === 'laptop' ? {'margin-top':'70px'}:{}]" class='solution' :class="$mq">
            <div v-if="actualPage === 1">
                <h2 class='title' :class="$mq">¿Cómo evitar o reducir la FoMO?</h2>
                <h5 class='subtitle' :class="$mq">Estos 5 pasos pueden ayudar a superar la FoMO:</h5>
                <ol class='text' :class="$mq">
                    <li>Compartir contenido, publicar por voluntad y no por una necesidad.
                        <p>Pregúntate, ¿quiero publicar esta foto? ¿Por qué?</p></li>
                    <li>Publicar y pasar página.
                        <p>No estés pendiente ni tengas expectativas de los likes, comentarios o reacciones que pueden haber.</p>
                    </li>
                    <li>Saber cuando parar.
                        <p>En el momento que no disfrutes, cierra la aplicación (Instagram, Facebook, TikTok, ...) y haz otra cosa.</p>
                    </li>
                    <li>Usar las redes sociales en tiempos muertos.
                        <p>Por ejempo: en el tren, esperando a un amigo, los 10 minutos antes de cenar, ...</p>
                    </li>
                    <li>De vez en cuando, eliminar las aplicaciones.
                        <p>Desconéctate de las redes sociales y del móvil durante un día, dos, tres o incluso una semana.</p>
                    </li>
                </ol>
                <p class="reference">Referencia: <a href="https://socialspacemag.org/overcome-fomo-five-easy-steps-one-social-media-platform-at-a-time" target="_blank">Overcome FOMO: Five Easy Steps, One Social Media Platform at a Time</a> </p>
            </div>
            <div v-if="actualPage === 0">
                <h2 class='title' :class="$mq">¿Cómo evitar o reducir la FoMO?</h2>
                <h5 class='subtitle' :class="$mq">Opinión personal después de este trabajo:</h5>
                <ul class='text' :class="$mq">
                    <li>Desactivar las notificaciones <img src="../assets/icons/sound-off.png"> de Instagram, Facebook y TikTok</li>
                    <li>Limitar el tiempo de las Redes Sociales <img src="../assets/icons/actiondash-logo.png"></li>
                    <li>Ser consciente del tiempo que pasas con el móvil:
                        <p>Los móviles de <img src="../assets/icons/apple.png"> ya llevan un registro integrado, para los de <img src="../assets/icons/android.png"> hay muchas aplicaciones que registran toda tu actividad. 
                        Yo recomiendo: <a href="https://play.google.com/store/apps/details?id=com.actiondash.playstore" target="_blank">ActionDash</a>.</p>
                    </li>
                    <li>Tener aficiones o pasatiempos cuando estás en casa <span style="font-weight: bold;">que no tengan que ver con la tecnología.</span> 
                        <b-container>
                            <b-row>
                                <b-col sm="6" class="examples" :class="$mq">Leer libros, cómics, ...<img src="../assets/icons/libro.png"></b-col>
                                <b-col sm="6" class="examples" :class="$mq">Dibujar o pintar <img src="../assets/icons/painting.png"></b-col>
                                <b-col sm="6" class="examples" :class="$mq">Escribir un diario <img src="../assets/icons/diary.png"></b-col>
                                <b-col sm="6" class="examples" :class="$mq">Hacer deporte <img src="../assets/icons/yoga.png"></b-col>
                            </b-row>
                        </b-container>
                    </li>
                    <li>Participar en las tareas del hogar <img src="../assets/icons/cooking.png"></li>
                    <li>Apagar el móvil <img src="../assets/icons/turn-off.png"> un par de horas, a partir de las 9 de la noche o hasta un día entero.</li>
                </ul>
            </div>
            <div v-if="actualPage === 2">
                <h5>Si has llegado hasta aquí significa que has terminado el "juego".</h5>

                <p>Para terminar me gustaría robarte 10 minutos más respondiendo esta enquesta de evaluación.
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScK7yGG1r-8PNd3TMySSD_k_2MqmgLGicdbqb4oYEEm7QOqiQ/viewform" target="_blank">
                        <img style="height:36px;" src="../assets/googleforms.png">
                    </a>
                </p>

                <p>Si por otra parte quiere volver a jugar ... <br>
                <b-button class="home" @click="home">Volver al juego</b-button></p> 

                <p class="lastpar">Este juego es un Trabajo de Fin de Grado del departamento de Tecnologias Interactivas centradas en la Educación de la Universitat Pompeu Fabra. Agradezco enormemente su participación y espero que haya sido de su interés y agrado.</p>

            </div>
        </div>

        <img v-if="actualPage === 2" class="logoupf" src="../assets/icons/UPF.png">
        <b-container style="position: fixed;" fluid class="pages">
            <b-row>
                <b-col>
                    <b-button v-if="actualPage>0" @click="actualPage--">{{previous}}</b-button>
                </b-col>
                <b-col>
                    <b-button v-if="actualPage<2" @click="actualPage++">{{next}}</b-button>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

export default {
    name: 'Solution',
    data(){
        return{
            ConceptsArray: [1,2,3],
            previous:'< Anterior',
            next:'Siguiente >',
            actualPage:0,
        }
    },
    methods:{
        home(){
            this.$router.push('/')
        }
    }

}
</script>

<style scoped>
.solution{
    margin: auto;
    padding: 10px;
    min-height: 80vh;
}
.solution.laptop{
    width: 60%;
}
.solution.tablet{
    width: 90%;
}


div > p{
    margin-top:7%;
}
.title.tablet{
    font-size: 25px;
}
.subtitle.tablet{
    font-size: 15px;
}
.text.tablet{
    font-size: 15px;
}
.text.mobil{
    padding-bottom: 50px;
}

.text.tablet > li > img, .text.tablet > li > p > img{
    width: 30px;
    height: 30px;
}

.examples.tablet{
    font-size: 15px;
 }
 .examples.tablet > img{
    width: 50px;
    height: 50px;
 }

h5{
    margin-top: 15px;
}
li {
    margin: 5px;
}
 li > p {
     font-size: 14px;
 }

 li > img {
     height: 50px;
 }

 .examples{
     padding: 10px;
 }

 div > img {
     height: 55px;
 }

 .pages {
     text-align: center;
     position:absolute;
     bottom: 5%;
 }

 .reference{
     font-size: 14px;
     margin-top: 60px;
 }
 .logoupf{
     position: absolute;
     left: 45%;
     bottom: 8%;
    /* width: 50%; */
 }

 .home{
     width: 200px;
     margin-top: 40px;
     margin-left: calc(50% - 100px);
 }

 .lastpar{
     font-size: 15px;
     margin-top: 15vh;
 }
</style>