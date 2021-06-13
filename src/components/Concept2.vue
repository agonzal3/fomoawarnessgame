<template>
  <div id="position" :class="$mq">
    <h2>Por lo tanto, podríamos decir que la FoMO es ...</h2>
    <b-container class="bv-example-row">
            <b-row class="align-items-stretch">
                <b-col class="h-600"><b-button id='button0' @click='resultado(0)' variant="light">{{lista[0].text}}</b-button></b-col>
                <b-col class="h-600"><b-button id='button1' @click='resultado(1)' variant="light">{{lista[1].text}}</b-button></b-col>
                <div class="w-100 options"></div>
                <b-col class="h-600"><b-button id='button2' @click='resultado(2)' variant="light">{{lista[2].text}}</b-button></b-col>
                <b-col class="h-600"><b-button id='button3' @click='resultado(3)' variant="light">{{lista[3].text}}</b-button></b-col>
            </b-row>
        </b-container>
        <br>
        <div v-if="respuesta === 'correct'">
          <p>¡¡Muy bien!!</p>
        </div>
        <div v-if="respuesta === 'wrong'"><p>Inténtalo de nuevo, ahora quedan {{intentos}} de 4 opciones.</p></div>
  </div>
</template>

<script>
export default {
  name: 'Concept2',
  data(){
    return{
      lista:[
        {text:'El miedo a que los demás disfruten de buenas experiencias en las que no participas y quieres saber qué están haciendo.', responce:'correct'},
        {text:'El miedo a estar mucho tiempo prestando atención al móvil, sea hablando con los amigos, jugando a juegos, …', responce:'wrong'},
        {text:'La satisfacción de estar desconectado de las redes sociales y del móvil, sin pensar en que debe estar pasando.', responce:'wrong'},
        {text:'El momento en que te lo pasas bien con el móvil viendo lo que hacen tus amigos, famosos y conocidos, mientras estás estudiando.', responce:'wrong'}
      ],
      respuesta:'',
      intentos: 4
    }
  },
  methods:{
    resultado(number){
      //console.log('button'+number);
      this.respuesta = this.lista[number].responce;
      if(this.respuesta === 'wrong'){
        const button = document.getElementById('button'+number);
        this.intentos--;
        button.disabled = true;
      } else{
        document.getElementById('button'+number).style.background = '#66ddaa';
        setTimeout(() => this.$emit('enlarge-text'), 1000);
      }
    }
  },
  created(){
    this.lista.sort(() => Math.random() - 0.5);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.position{
  position:inherit;
  left: 50%;
  top: 45%;
  /* border: 3px solid green; */
  transform: translate(-50%, -50%);
  width: 60%;
  text-align: center;
}
.options{
  margin: 10px;
}

button {
  /* background-color: mediumaquamarine; */
  background-color: lemonchiffon;
  height: 100%;
  color: black;
}

button:disabled,
button[disabled]{
  background-color:lightcoral;
  color: black;
}
h2{
  margin: 20px;
}
</style>
