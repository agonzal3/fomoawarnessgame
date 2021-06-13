<template>
    <div id="position" :class="$mq">
      <h2>¿Cuál es la media de uso del móvil entre los jóvenes (de 18 a 24 años) en España?</h2>

      <h5><b-badge style="margin-bottom: 20px;" :variant="counter>1 ? 'warning' : 'danger'">Tienes {{counter}} intentos</b-badge></h5>

      <!-- <input append="h"> -->
      <b-container fluid>
        <b-row>
          <b-col>
            <b-input-group size="lg" append="h" style="justify-content: center">
                    <vue-numeric-input
                      id="style1"
                      :class="$mq"
                      :min="0" 
                      :max="24" 
                      :value="hours" 
                      size="100px"
                      align="center"
                      controls-type="updown"
                      v-model="hours"></vue-numeric-input>
            </b-input-group>
          </b-col>
          <b-col>
            <b-input-group  size="lg" append="min" style="justify-content: center">
              <vue-numeric-input
                      id="style2"
                      :class="$mq"
                      :min="0" 
                      :max="50" 
                      :value="minutes" 
                      :step="10"
                      size="100px"
                      align="center"
                      controls-type="updown"
                      v-model="minutes"></vue-numeric-input>
            </b-input-group>
          </b-col>
        </b-row>
      </b-container>
      <div v-if="counter === 0 || (hours === realhoures && minutes === realminutes)">
        <b-modal size="lg" ref="my-modal" hide-footer hide-header :no-close-on-backdrop="true" centered>
          <div class="d-block text-center">
            <img style="width:450px; max-width:100%;" :src="image">
            <h4 :class="classe">{{responce}}</h4>
            <p>Según el informe <i>"Smartphones: el impacto de la adicción al móvil en los accidentes de tráfico"</i> que se realizó en septiembre de 2019, los jovenes entre 18 y 24 utilizan el móvil <b-badge variant="danger">6:48h al dia</b-badge>.</p>
            <b-button @click="$emit('enlarge-text')">Pasar prueba</b-button>
          </div>
        </b-modal>
      </div>
      <div v-else>
        <b-modal ref="my-modal" hide-footer centered>
          <div class="d-block text-center">
            <img style="width:450px; max-width:100%;" :src="image">
            <h4 :class="classe">{{responce}}</h4>
          </div>
        </b-modal>
      </div>

      <p></p>
      <b-button style="margin-top:30px;" @click="calculatetime" :disabled="counter === 0 || classe === 'correct'">Confirmar</b-button>
      <!-- <p :class="classe">{{responce}}</p> -->
    </div>
</template>

<script>
//import { createCanvas, loadImage } from "canvas";
import wrongAswer from "../assets/Concept3/wrong-aswer.jpg";
import correctAswer from "../assets/Concept3/obama.jpg";
import farwrongAswer from "../assets/Concept3/wrong-answer-try-again.jpg";
import closewrongAswer from "../assets/Concept3/you-are-this-close.jpg";

export default {
    name:'Concept3',
    data(){
        return {
            show: true,
            minutes: 0,
            hours:0,
            classe:"",
            realhoures:6,
            realminutes:50,
            responce:"",
            counter:3,
            image:""
        }
    },
    //props: ['listdata','counter'],
    methods:{ 
      calculatetime(){
        this.counter--;
        let diferenceh = this.realhoures-this.hours;
        let text1 = "";
        let text2 = "";
        if(this.hours === this.realhoures && this.minutes === this.realminutes){
          this.responce = "¡LO HAS ACERTADO!";
          this.classe = 'correct';
          this.image = correctAswer;
        }else if (this.counter>0){
          if(diferenceh === 0){
            text2="grande";
            this.image = closewrongAswer;
          }else if(Math.abs(diferenceh) <= 1){
            this.image = closewrongAswer;
            if(diferenceh>0) text2="grande";
            else text2="pequeño";
          } else {
            text1="lejos";
            this.image = farwrongAswer;
            if(diferenceh>0) text2="grande";
            else text2="pequeño";
            this.responce = "Estás "+text1+" de la respuesta, prueba un número más "+text2+'.';
          }
          this.classe = 'wrong';
          if(text1 !== "lejos") this.responce = "Prueba un número más "+text2+'.';
        } else {
          this.image = wrongAswer;
          this.responce = ""
        }
        this.$refs['my-modal'].show();
      }
    }
}
</script>


<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

#style1.tablet, #style1.laptop{
  font-size: 40px;
}
#style1.mobil{
  font-size: 30px;
}

#style2.tablet, #style2.laptop{
  font-size: 40px;
}
#style2.mobil{
  font-size: 30px;
}

.correct{
  color: green;
}
.wrong{
  color: red;
}

h4{
  margin-top: 10px;
}

</style>