<template>
  <div :style="backImage" class="image">
      <div class="home" :class="$mq">
        <img class="imagePrincipal" alt="Vue logo" src="../assets/HomeImg/FoMO.png">
        <h1>El lado oscuro de las redes sociales - <span style="font-size:28px;">FoMO</span>
          <!-- <br/> <span style="color:blue;">Presentation</span> -->
        </h1>
        <h3>¿Quieres saber cómo puedes salvar el futuro de la humanidad?  
          <!-- <span style="color:blue;"> Do you want to know how you can save the future?</span> -->
        </h3>
        <!-- <h4>Antes de jugar escoge un idoma 
          <br/> <span style="color:blue;"> Before play chose a language </span> 
        </h4> -->

        <b-button @click="onClick()">¡SI!</b-button>
        
        <b-modal size="lg" ref="my-modal" hide-footer hide-header :no-close-on-backdrop="true" centered>
          <div class="d-block text-center">
            <img style="max-width:100%; margin-bottom:20px;" :src="image">
            <h3>Antes de empezar a jugar, te pido que completes este <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6ZoZ_CBpYMcCkhM-4tKUJz_v55OR9JOMW6xfrMwra8IVO7w/viewform" target="_blank">
            CUESTIONARIO.</a></h3>
            <p>Una vez hayas terminado el cuestionario, dale al siguiente botón.</p>
            <b-button variant="light"><router-link id="link" to="/play" style="color:black;">Ahora si, ¿empezamos?</router-link></b-button>
          </div>
        </b-modal>
      
      </div>

    </div>
</template>

 <script>
 import gift from "../assets/HomeImg/notyet.jpg";

 export default {
   name: 'Home',
   data(){
     return{
       image: gift,
       backImage: {backgroundImage: "url(http://www.sumandohistorias.com/wp-content/uploads/2019/04/adiccionmovil1-1454x1002.jpg)"}
     }
   },
   methods:{
     onClick(){
       this.$refs['my-modal'].show();
     }
   }
   
}
 </script> 


<style scoped>
.home {
  position: absolute;
  left: 50%;
  top: 50%;
  /* border: 3px solid green; */
  transform: translate(-50%, -50%);
  /* height: 75%; */
  text-align: center;

  background-color: aliceblue;
  opacity: 0.95;
  border-radius: 10px;

}
.home.mobil {
  width: 90%;

}
.home.tablet {
  width: 70%;

}
.home.laptop {
  width: 50%;

}

.home h1 {
  margin: 20px;
  color:black;
}
.home h3 {
  margin: 30px;
}
.home button {
  margin: 25px;
}
#link {
  color: white;
  text-decoration: none;
}
.image{
  width: 100%;
  height: 100vh;
  /* background-attachment: fixed; */
  background-position: center;
  background-repeat: no-repeat;
  
}
.imagePrincipal{
  width: 300px;
}

</style>

