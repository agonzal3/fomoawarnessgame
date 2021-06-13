<template>
    <div style="display: flex">
        <b-button :disabled="timePassed>timeLimit || counter>items.length-1" variant="danger" @click="syntomFoMO(true)" class="bigbutton" :class="$mq">Síntoma de la FoMO</b-button>
        <div class="center">
            <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                <g class="circle">
                    <circle class="elypse" cx="50" cy="25" r="20"/>
                    <text style="color:green" x="50%" y="50%" text-anchor="middle" fill="black" dy=".3em">{{formattedTimeLeft}}</text>
                    <path
                    :stroke-dasharray="circleDasharray"
                    :class="remainingPathColor"
                    class="path-remaining"
                    d="
                        M 50, 25
                        m -20, 0
                        a 5,5 0 1,0 40,0
                        a 5,5 0 1,0 -40,0
                    "></path>
                </g>
            </svg>
            <h3>{{counter}}/{{items.length}}</h3>
            <transition>
                <div v-if="counter<items.length">{{items[counter].text}}</div>
                <div v-else></div>
            </transition>
        </div>
        <b-button :disabled="timePassed>timeLimit || counter>items.length-1" variant="success" @click="syntomFoMO(false)" class="bigbutton" :class="$mq" style="align-items: flex-end">NO Síntoma de la FoMO</b-button>
        <b-modal size="lg" ref="my-modal" hide-header centered :no-close-on-backdrop="true">
            <h2 class="text-center" :class="$mq">Resultado</h2>
            <br> 
            <div class="d-block">
                <b-container>
                    <b-row>
                        <b-col>
                            <h4>Síntomas de FoMO</h4>
                            <ul>
                                <div v-for="item in items" :key="item.id">
                                    <li v-if="item.res === true">
                                        {{ item.text }}
                                        <span v-if="item.intercation === true"> <b-badge variant="success">Correcto</b-badge></span>
                                        <span v-else-if="item.intercation === false"> <b-badge variant="danger">Incorrecto</b-badge></span>
                                        <span v-else>, <b-badge variant="secondary">Not done</b-badge></span>
                                    </li>
                                </div>
                            </ul>
                        </b-col>
                        <b-col>
                            <h4>No síntomas de FoMO</h4>
                            <ul>
                                <div v-for="item in items" :key="item.id">
                                    <li v-if="item.res === false">
                                        {{ item.text }}
                                        <span v-if="item.intercation === true"> <b-badge variant="success">Correcto</b-badge></span>
                                        <span v-else-if="item.intercation === false"> <b-badge variant="danger">Incorrecto</b-badge></span>
                                        <span v-else>, <b-badge variant="secondary">Not done</b-badge></span>
                                    </li>
                                </div>
                            </ul>
                        </b-col>
                    </b-row>
                </b-container>
                <p class="text-center" :class="$mq">Aquí tenemos los ejemplos que han salido y su clasificación. <br> 
                Siguiendo la línea de antes, los posibles síntomas son consecuencias de la no satisfacción de las 3 necesidades psicológicas anteriores: Competencia, Autonomía y Pertenencia.</p>
            </div>
            <template #modal-footer>
                <div class="w-100">
                    <b-button
                        variant="primary"
                        class="float-right"
                        @click="$emit('enlarge-text')">
                        Siguiente >
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script>
const FULL_DASH_ARRAY = 125;
const WARNING_THRESHOLD = 30;
const ALERT_THRESHOLD = 15;
const TIME_DEFINED = 59;

export default {
    name:'Reason2',
    data(){
        return{
            timeLimit: TIME_DEFINED,
            timePassed: 0,
            timerInterval: null,
            counter:0,
            timestop:0,
            show: true,
            componentKey: 0,

            items:[
                {id:0, text: 'No tener aficiones.', res:true, intercation: null},
                {id:1, text: 'Tener los amigos lejos.', res:true, interaction: null},
                {id:2, text: 'Autoestima dependiente de las amistades', res:true, intercation: null},
                {id:3, text: 'Aburrimiento', res:true, intercation:null},
                {id:4, text: 'Notificaciones activadas', res:true, intercation:null},
                {id:5, text: 'No tener responsabilidades ni quehaceres.', res:true, intercation:null},
                {id:6, text: 'Ansiedad', res:true, intercation:null},
                {id:7, text: 'Ser extrovertido', res:false, intercation:null},
                {id:8, text: 'Padres controladores', res:false, intercation:null},
                {id:9, text: 'Publicar contenido con frecuencia.', res:false, intercation:null},
                {id:10, text: 'Ayudar a las tareas domésticas.', res:false, intercation:null},
                {id:11, text: 'Jugar a juegos del móvil.', res:false, intercation:null},
            ]
        }
    },
    computed: {
        // Update the dasharray value as time passes, starting with 283
        circleDasharray() {
            return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 125`;
        },
        timeFraction() {
            const rawTimeFraction = this.timeLeft / this.timeLimit
            if(this.timeLeft>0){
                return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction)
            } else{
                return 0;
            }
        },
        colorCodes() {
            return {
                info: {
                color: "green"
                },
                warning: {
                color: "orange",
                threshold: WARNING_THRESHOLD
                },
                alert: {
                color: "red",
                threshold: ALERT_THRESHOLD
                }
            }
        },
        remainingPathColor() {
            const { alert, warning, info } = this.colorCodes;
            if (this.timeLeft <= alert.threshold) {
                return alert.color;
            } else if (this.timeLeft <= warning.threshold) {
                return warning.color;
            } else {
                return info.color;
            }
        },
        timeLeft() {
            let returnn;
            if(this.counter<this.items.length && this.timePassed<=TIME_DEFINED){
                this.timestop = this.timePassed;
                returnn = this.timeLimit - this.timePassed;
            } else {
                if(this.show===true){
                    this.$refs['my-modal'].show();
                } else {
                    this.$refs['my-modal'].hide();
                }
                
                returnn = this.timeLimit - this.timestop;
            }
            return returnn;
        },
        formattedTimeLeft() {
            const timeLeftt = this.timeLeft
            // The largest round integer less than or equal to the result of time divided being by 60.
            const minutes = Math.floor(timeLeftt / 60)
            // Seconds are the remainder of the time divided by 60 (modulus operator)
            let seconds = timeLeftt % 60
            // If the value of seconds is less than 10, then display seconds with a leading zero
            if (seconds < 10) {
                seconds = `0${seconds}`
            }
            // The output in MM:SS format
            if(seconds > 0){
                return `${minutes}:${seconds}`
            } else{
                this.$refs['my-modal'].show();
                return '0:00'
            }
        },
    },
    methods:{
        startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        },
        syntomFoMO(bool) {
            if(this.items[this.counter].res === bool){
                this.items[this.counter].intercation = true;
            }else{
                this.items[this.counter].intercation = false;
            }
            this.counter++;
        }
    },
    mounted() {
        this.startTimer();
    },
    created(){
        this.items.sort(() => Math.random() - 0.5);
    }
}
</script>

<!-- BaseTimer.vue -->
<style scoped>

.bigbutton{
    position: relative;
    margin:-8px;
}
.bigbutton.laptop{
    width: 30%;
    height:99.3vh;
    font-size: 30px;
}
.bigbutton.tablet{
    width: 20%;
    height:calc(99.3vh - 150px);
    font-size: 20px;
}
.bigbutton.mobil{
    width: 30%;
    height:calc(99.3vh - 150px);
    font-size: 20px;
}
.center{
    margin:8px;
    width: 63%;
    height: auto;
    /* Center horontaly */
    position: relative;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    /* Center Vertically */
    /* top: 50%; */
    /* -ms-transform: translateY(-50%);
    transform: translateY(50%); */
}
.center div{
    /* Style of the box */
    border: solid 2px black;
    padding: 5px;
    width: 60%;
    min-width: 150px;

    /* Vertical position */
    position: relative;
    margin: 0 auto;
    text-align: center;

    /* Horizontal Position */
    top: 10%;
    -ms-transform: translateY(-50%);
    transform: translateY(50%);

}
.circle{
    fill: none;
    stroke: none;
}

.elypse{
    stroke-width: 4px;
    stroke:grey;
}

.path-remaining {
    /* Just as thick as the original ring */
    stroke-width: 4px;
    /* Rounds the line endings to create a seamless circle */
    stroke-linecap: round;
    /* Makes sure the animation starts at the top of the circle */
    transform: rotate(90deg) scaleY(-1);
    transform-origin: center;
    /* One second aligns with the speed of the countdown timer */
    transition: 1s linear all;
    /* Allows the ring to change color when the color value updates */
    stroke: currentColor;
}

.green{
    color:rgb(65, 184, 131); 
}
.orange{
    color:orange;
}

.red{
    color:red;
}

p.text-center.mobil{
    font-size: 17px;
}
h2.text-center.mobil{
    font-size: 22px;
}
</style>