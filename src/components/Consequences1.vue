<template>
    <div id="position" :style="$mq | mq({mobil: 'height:100%',
                                        laptop: 'height:80%',tablet: 'height:80%'})" :class="$mq">
        <flipper
            :width="$mq | mq({
                mobil: '80%',
                tablet: '75%',
                laptop: '100%'
            })"
            class="centerflip"
            :flipped="flipped">
            <div class="front" slot="front">
                <div>
                    <h2 style="color:orange;">¡Noticias de última hora!</h2>
                    <h3>{{items[frontcount].title}}</h3>
                    <img class="imagecard" :class="$mq" :src="items[frontcount].imagen">

                    <div>
                        <b-button @click="onClick(false)" style="margin-right:20px" variant="danger">Falso</b-button>
                                <!-- <b-col cols="6"><b-button to='/concept/1' variant="outline-primary">{{lista[counter].aswer2}}</b-button></b-col> -->
                        <b-button @click="onClick(true)" style="margin-left:20px" variant="success">Verdadero</b-button>
                    </div>
                </div>
            </div>
        
            <div class="back" slot="back">
                <div>
                    <h2 id="title">{{resolution}}</h2>
                    <h3>ES <span v-if="items[backcount].res === false">FALSO</span>
                        <span v-else>VERDADERO</span>
                    </h3>
                    <h4>{{items[backcount].solution.title}}</h4>
                    <p>{{items[backcount].solution.text}}</p>

                    <p>
                        <b-button  v-if="backcount < items.length-1" @click="nextnew" variant="warning">Siguiente noticia ></b-button>
                        <b-button v-else @click="$emit('enlarge-text')" variant="warning">Siguiente noticia ></b-button>
                    </p>
                
                    <p class="fuente" :class="$mq">
                        Fuente: <a :href="items[backcount].solution.link" target="_blank" v-if="items[backcount].solution.fuente">{{items[backcount].solution.fuente}}</a>
                    </p>
                </div>
            </div>
        </flipper>
    </div>
</template>

<script>
// import VueFlip from 'vue-flip';
import coche from "../assets/Consequences/coche1.jpg";
import decreasing from "../assets/Consequences/decreasing.png";
import distraction from "../assets/Consequences/distraction.jpg";
import freetime from "../assets/Consequences/freetime.jpg";
import stress from "../assets/Consequences/stress.jpg";
import friends from "../assets/Consequences/friends.jpg";

import Flipper from 'vue-flipper';


export default {
    name:'Consequence',
    // components: {
    //     'vue-flip': VueFlip
    // },
    components: { Flipper },
    data(){
        return{
            frontcount:0,
            backcount:0,
            flipped: false,
            resolution: null,
            items:[
                {id:0, title:'El 15% de los accidentes mortales de coche son provocados por el móvil.', res:false,
                solution:{title:'Las distracciones provocadas por el uso del móvil causan 390 muertos al año (más del 20% del total de fallecidos en accidentes de tráfico).',
                        text:'Esto es una consecuencia de la FoMO, ya que en la mayoría de los acidentes los conductores no están usado el móvil como GPS, sinó que estan hablando, enviando algún mensaje o incluso en las redes sociales.',
                        fuente:'Smartphones: el impacto de la adicción al móvil en los accidentes de tráfico, en setiembre de 2019',
                        link:'https://revista.dgt.es/es/noticias/nacional/2019/09SEPTIEMBRE/0923-Distraciones-moviles-Linea-Directa.shtml'}, 
                imagen: coche
                },
                {id:1, title:'La gente cada vez tiende a estar más atenta a las conversaciones físicas con los amigos y las amigas y no se distrae con el móvil.', res:false,
                solution:{title:'Cada vez más gente ignora la presencia de sus amigos y amigas, familiares y compañeros, por estar con el móvil. Este fenomeno se dice "Phubbing behaviour".',
                        text:'En muchos casos este comportamento viene dado por estar pendiente de lo que otra gente está haciendo en las redes sociales. Una consecuencia directa de la FoMO.',
                        fuente:'Fear of Missing Out as a Predictor of Problematic Social Media Use and Phubbing Behavior among Flemish Adolescents',
                        link:'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6211134/'}, 
                imagen: friends
                },
                {id:2, title:'Es más probable que la gente que presenta altos niveles de FoMO, reduzca estos niveles con el tiempo.', res:false,
                solution:{title:'Los adolescentes que reportan altos niveles de FoMO son más probables que al cabo de un año augmenten sus niveles de FoMO.',
                        text:'Es un circulo vicioso, con el tiempo cada vez se incrementa más el nivel de FoMO y por tanto, el malestar y la dependencia de saber lo que están haciendo los demás.',
                        fuente:'Examining bi-directionality between Fear of Missing Out and problematic smartphone use. A two-wave panel study among adolescents',
                        link:'https://www.sciencedirect.com/science/article/abs/pii/S030646032030099X'}, 
                imagen: decreasing
                },
                {id:3, title:'Los adolescentes que presentan altos niveles de FoMO se estresan más por no ser populares y no sentirse parte de algo en las redes sociales.', res:true,
                solution:{title:'Los adolescentes se estresan al no recibir un comentario o un like de una publicación.',
                        text:'Quizá parezca absurdo o pienses que a todo el mundo le pasa, pero hay gente que al subir una foto está muy pendiente de los likes y comentarios y sino los recibe se estresa. Eso le pasa a la gente con niveles altos de FoMO.',
                        fuente:'“I don’t want to miss a thing”: Adolescents’ fear of missing out and its relationship to adolescents’ social needs, Facebook use, and Facebook related stress',
                        link:'https://www.sciencedirect.com/science/article/abs/pii/S0747563216304198'}, 
                imagen: stress
                },
                {id:4, title:'Los individuos que presentan altos niveles de FoMO, rinden peor en el trabajo y en las clases.', res:true,
                solution:{title:'El uso indebido del móvil puede causar mal rendimiento a clase y en el trabajo.',
                        text:'Los estudiantes y trabajadores que presentan altos signos de FoMO utilizan con más frecuecia las redes sociales, en medio de las clases o del trabajo y son incapaces de prestar toda la atención posible.',
                        fuente:'Fear of Missing Out (FoMO) and social media’s impact on daily-life and productivity at work: Do WhatsApp, Facebook, Instagram, and Snapchat Use Disorders mediate that association?',
                        link:'https://www.sciencedirect.com/science/article/abs/pii/S0306460320306171'}, 
                imagen: distraction
                },
                {id:5, title:'Las personas con alto nivel de FoMO són incapaces de aprovechar el tiempo libre de manera creativa.', res:true,
                solution:{title:'El móvil y las redes sociales, acaparan tu tiempo libre.',
                        text:'Por mala suerte, la gente ya no se aburre y cuando se siente aburrida, coge el móvil. La gente que presta altos niveles de FoMO, a menudo no tiene aficiones.',
                        fuente:'Epidemiology and the consequences of fear of missing out (FOMO). The role of general practitioners in early diagnosis, treatment and prevention of FOMO in teenagers and young adults',
                        link:'https://www.researchgate.net/publication/342929360_Epidemiology_and_the_consequences_of_fear_of_missing_out_FOMO_The_role_of_general_practitioners_in_early_diagnosis_treatment_and_prevention_of_FOMO_in_teenagers_and_young_adults'}, 
                imagen: freetime
                },
            ]
        }
    },
    methods:{
        onClick (bool) {
            console.log('onClick');
            this.flipped = !this.flipped;
            if(this.frontcount !== 0){
                this.backcount++;
            }
            if (bool === this.items[this.frontcount].res){
                this.resolution = 'CORRECTO';
                document.getElementById("title").style.color = "green";
            } else {
                this.resolution = 'INCORRECTO';
                document.getElementById("title").style.color = "red";

            }
        },
        nextnew(){
            // this.show = !this.show;
            // setTimeout(() => this.show = !this.show, 300);
            this.flipped = !this.flipped;
            this.frontcount++;
        }
    },
    created(){
        this.items.sort(() => Math.random() - 0.5);
    }
}
</script>

<style src="vue-flipper/dist/vue-flipper.css" />
<style scoped>
.centerflip{
    display: inline-block;
    margin: 0 auto;
}

.imagecard.laptop {
    max-width: 350px;
    max-height: 250px;
    margin-top: 10px;
    margin-bottom: 25px;
}

.imagecard.tablet{
    max-width: 200px;
    margin-top: 10px;
    margin-bottom: 25px;
}
.imagecard.mobil{
    width: 80%;
    margin-top: 10px;
    margin-bottom: 25px;
}

.front{
    width: 100%;
    height: 100%;
    border-radius: 20px;
    /* box-shadow: 0 3px 15px rgba(#000, 0.45); */
    border: solid 3px black;
    box-shadow: 10px 5px 5px black;
    
}
.front > div {
    padding: 10px;
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}


.back {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    /* box-shadow: 0 3px 15px rgba(#000, 0.45); */
    background-color: darkslategray;
    color: white;
    border: solid 3px black;
    overflow: auto;
}

.back:after {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    
}

.back > div {
    padding: 10px;

    width: 100%;
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    text-align: center;
}

.content.tablet{
    width: 80%;
}

.fuente.tablet{
    font-size: 11px;
}
.fuente.laptop{
    font-size: 15px;
}

.fuente.mobil{
    font-size: 10px;
}

</style>