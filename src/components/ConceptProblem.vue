<template>
    <div>
        <!-- <div class="container">
            <button v-if="!clicked" @click="surprise"><img draggable="false" role="img" class="emoji" alt="🎊" src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f38a.svg">  Surprise  <img draggable="false" role="img" class="emoji" alt="🎉" src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f389.svg"></button>
        </div> -->
        <button v-on:click="surprise"></button>
      </div>
</template>

<script>

 export default {
   name: 'Foto',
   data(){
     return{
       clicked: false
     }
   },
   method:{
      surprise(){
        /*
        const canvas = this.renderer2.createElement('canvas');
        this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
        const myConfetti = confetti.create(canvas, {
          resize: true // will fit all screen sizes
        });
        myConfetti();
        this.clicked = true;*/
        console.log('Hello');
      }
   }
 }
 </script>
