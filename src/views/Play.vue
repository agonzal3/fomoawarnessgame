<template>
  <div class="play">
    <!-- <b-container fluid class="bv-example-row">
      <b-row> -->
    <div id="controles" class="controls" :class="$mq">
      <h2 id="subtitle" :class="$mq">Niveles</h2>
      <div class="square" :class="$mq">
          <div class="subsquare" :class="$mq">
            <transition name="component-fade2">
              <b-img class="subsquare-image" :class="$mq" v-if="pasos > 7" center :src="require('../assets/Steps/book1.png')" alt="Center image"></b-img>
            </transition>
          </div>
          <div class="subsquare" :class="$mq">
            <transition name="component-fade2">
              <b-img class="subsquare-image" :class="$mq" v-if="pasos > 14" center :src="require('../assets/Steps/detective.png')" alt="Center image"></b-img>
            </transition>
          </div>
          <div class="subsquare" :class="$mq">
            <transition name="component-fade2">
              <b-img class="subsquare-image" :class="$mq" v-if="pasos > 17" center :src="require('../assets/Steps/danger.png')" alt="Center image"></b-img>
            </transition>
          </div>
      </div>
    </div>
    <div id="contenido" :class="$mq">
      
      <!-- <Concept1 /> -->
      <!-- <Concept1 v-if="steps === 1" /> -->
      <transition name="component-fade" mode="out-in">
        <Textinteract v-if="pasos === 0" v-bind:text="text" v-bind:responcebutton="responcebutton" v-on:enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 1" v-bind:text="text1" v-bind:responcebutton="responcebutton1" v-on:enlarge-text="onEnlargeText"/>
        <Concept1 v-if="pasos === 2" v-on:enlarge-text="onEnlargeText"/>
        <Concept2 v-if="pasos === 3" v-on:enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 4" v-bind:text="text2" v-bind:responcebutton="responcebutton2" v-on:enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 5" v-bind:text="text3" v-bind:responcebutton="responcebutton3" v-on:enlarge-text="onEnlargeText"/>
        <Concept3 v-if="pasos === 6" v-on:enlarge-text="onEnlargeText"/>
        <Compensation v-if="pasos === 7" :number=0 @enlarge-text="onEnlargeText"/>
        <Reasontext v-if="pasos === 8" v-on:enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 9" v-bind:text="text4" v-bind:responcebutton="responcebutton4" v-on:enlarge-text="onEnlargeText"/>
        <Reason1 v-if="pasos === 10" v-on:enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 11" v-bind:text="text5" v-bind:responcebutton="responcebutton5" v-on:enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 12" v-bind:text="text6" v-bind:responcebutton="responcebutton6" v-on:enlarge-text="onEnlargeText"/>
        <Reason2 v-if="pasos === 13" v-on:enlarge-text="onEnlargeText"/>
        <Compensation v-if="pasos === 14" :number=1 @enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 15" v-bind:text="text7" v-bind:responcebutton="responcebutton7" v-on:enlarge-text="onEnlargeText"/>
        <Consequence v-if="pasos === 16" v-on:enlarge-text="onEnlargeText"/>
        <Compensation v-if="pasos === 17" :number=2 @enlarge-text="onEnlargeText"/>
        <Textinteract v-if="pasos === 18" v-bind:text="text8" v-bind:responcebutton="responcebutton8" v-on:enlarge-text="onEnlargeText"/>
      </transition>

    </div>
      <!-- </b-row>
      </b-container>   -->
  </div>
</template>

<script>
import Textinteract from "../components/Textinteraction";
import Concept1 from "../components/Concept1";
import Concept2 from "../components/Concept2";
import Concept3 from "../components/Concept3";
import Reason1 from "../components/Reasons1";
import Reason2 from "../components/Reasons2";
import Consequence from "../components/Consequences1";
import Reasontext from "../components/ReasonsText";
import Compensation from "../components/Compensation";


export default {
    name: 'Play',
    data(){
        return {
          pasos: 0,
          view:'Concept1',
          show:false,
          count: 0,
          text: ['Hola, mi nombre es Alex y vengo del futuro. En el 2043 la sociedad se ha vuelto totalmente dependiente del móvil, antisocial, infeliz y no parece que la cosa vaya a mejorar. \n Estamos a un paso del declive de la civilización y tu eres el único que puedes cambiar el destino de la humanidad. Para que no cometas los mismos errores que nosotros y puedas tener una vida llena de aventuras, emociones, amigos y de satisfacción necesitamos tu ayuda para salvar a la humanidad \n Aquí es donde empieza el cambio.',
                '¡Te necesitamos para salvarnos! ¿Ahora o nunca?'],
          responcebutton:[{button1:"¿Yo, estás seguros de que no quieres a otra persona?", button2:"Vamos a ello"},
                          {button2:"¡Ahora!"}],
          text1:['Desde hace 10 años, se está investigando y escribiendo acerca de la FoMO (Fear of Missing Out). Hoy en día, en 2021, aún no se sabe si es un síntoma, una adicción tecnológica o solo un efecto secundario de la vida tecnológica.'],
          responcebutton1:[{button2:"Ponme en contexto."}],
          text2:['El móvil y las redes sociales, cada vez potencian más este sentimiento.'],
          responcebutton2:[{button2:'Pero, ¿qué tiene que ver esto con salvar la humanidad?'}],
          text3:['El mundo se ha vuelto un lugar más oscuro provocado por estas situaciones. Este problema lo vamos a ir desengranando paso a paso. \n Para saber en qué punto estamos te reto a acertar la siguiente pregunta en menos de tres intentos.'],
          responcebutton3:[{button2:'Acepto el reto.'}],
          text4:['Entramos en el juego de las redes sociales para satisfacer nuestras necesidades pero, ¿realmente se satisfacen?','Según investigaciones importantes, para estar satisfecho se tienen que cumplir 3 necesidades psicológicas: \n Competencia, Autonomía y Pertenencia \n ¿Sabrías asociar el significado de cada una de ellas?'],
          responcebutton4:[{button1:'Ummmmm, buena pregunta.'},{button2:'Vamos a descubrirlo'}],
          text5:['Ahora que sabemos qué se necesita para estar satisfecho también podemos deducir cuando no lo estamos, ¿verdad?','No estaremos satisfechos, hasta que no te sientas competente, autónomo y tengas el sentimiento de pertenencia.'],
          responcebutton5:[{button1:'No estoy seguro de seguirte.', button2:'¡Claro que sí!'}, {button2:'Ahora sí que lo entiendo.'}],
          text6:['Sabiendo esto, vamos a ver si a partir de situaciones reales puedes deducir si son causas o signos de FoMO. \n En los próximos 60 segundos tendrás que decidir si las siguientes afirmaciones/situaciones pueden ser posibles síntomas de la FoMO o no.'],
          responcebutton6:[{button2:"¡Adelante!"}],
          text7:['Ya tienes la idea y las causas. Ahora nos falta la última parte y la más importante, las consecuencias. A continuación saldrán noticias relacionadas con la FoMO y tendrás que escoger si son falsas o verdaderas en función de tu criterio. Después de cada apartado saldrá la respuesta. ¿Estás listo?',
          'Con la primera respuesta lo vas a entender enseguida.'],
          responcebutton7:[{button1:'No termino de entenderlo.',button2:'Por supuesto.'},{button2:'¡De acuerdo, adelante!'}],
          text8:['¡ENHORABUENA! \n Has descubierto uno de los problemas que ha desolado a esta sociedad y aunque no sea el único por algún lado hay que empezar.',
          'Ahora sabemos qué es, cómo se origina y cuáles son sus consecuencias. Pero para frenar la FoMO y así hacer que el mundo sea un lugar mejor. ¿Qué necesitamos?',
          'Quizás un poco exagerado, ¿no crees? \n ¿No sería mejor encontrar la manera de evitar o reducir los niveles de FoMO?'],
          responcebutton8:[{button1:'Siguiente'}, {button1:"Eliminar la tecnología", button2:"Encontrar la manera de como evitar o reducir la FoMO."}, {button2:"Supongo que sí"}]
        }
    },
    components: {
        Concept1,
        Concept2,
        Concept3,
        Reason1,
        Reason2,
        Consequence,
        Textinteract,
        Reasontext,
        Compensation
    },
    methods:{
        onEnlargeText() {
          this.pasos++;
          // this.view = this.xx[this.steps].name;
        },
        start() {
          document.getElementById("").hidden;
            this.$confetti.start({
                particles: [
                    {
                    type: 'rect',
                    dropRate: 40,
                    size: 15,
                    },
                    {
                    type: 'circle',
                    dropRate: 40,
                    size: 15,
                    },
                ],
                windSpeedMax: 3,
                particlesPerFrame: 4
            });

            setTimeout(() => this.$confetti.stop(), 400);
        },
    },
    computed:{
      
    },
    created(){
      this.xx = Object.values(this.$options.components)
      console.log(this.xx);
      // console.log(this.formatText(this.text, 0, 22));

    },
    updated(){
      console.log('update');
    }

}



</script>

<style scoped>

.controls{
  background-color: #2c3e50;
}

.controls.laptop{
  
  /* position: absolute; */
  float: left;
  height:100vh;
  width: 300px;
  min-height: 700px;
}
.controls.tablet, .controls.mobil {
  position: fixed;
  width: 100%;
  height: 150px;
  z-index: 50;
}
.square{
  margin: auto;
}
.square.laptop {
  background-color: #FAFAFA;
  margin-top: 20px;
  width: 200px;
  height: 80%;
}
.square.tablet, .square.mobil {
  width: 80%;
  min-width: 300px;
  height: 100px;
  display: flex;
}
.subsquare {
  border: 3px solid #555;
  margin: auto;
  
}

.subsquare.laptop{
  height: 33.4%;
  width: inherit;
}
.subsquare.tablet, .subsquare.mobil{
  background-color: #FAFAFA;
  height: 100%;
  width: 100px;
}
.subsquare-image {
  position: relative;
  /* Center verticaly */
  margin: 0;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.subsquare-image.laptop{
  width: 130px;
}

.subsquare-image.tablet, .subsquare-image.mobil {
  width: 80px;
}



#contenido{
  position: relative;
  background-color:#FAFAFA;
  float: left;
  padding: 10px;
  overflow: auto;
}

#contenido.laptop{
  width: calc(100% - 300px);
  min-height: 700px;
  height:100vh;
}

#contenido.tablet, #contenido.mobil{
  width: 100%;
  height: calc(100vh - 150px);
  margin-top: 150px;
}

#contenido.mobil:after, #contenido.tablet:after {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity 1s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.component-fade2-enter-active{
  transition: all 2s ease;
}

.component-fade2-enter{
  transform: translateZ(10px);
  opacity: 0;
}

#subtitle.laptop{
  text-align: center;

  margin-top: 30px;
  margin-bottom: 10px;
  color: #FAFAFA;
}
#subtitle.tablet, #subtitle.mobil{
  text-align: center;
  font-size: 25px;
  margin-bottom: 10px;
  color: #FAFAFA;
}

</style>