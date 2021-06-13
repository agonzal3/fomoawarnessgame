<template>
  <div id="position" :class="$mq">
    <div class="text" :class="$mq" ref=20>
      <vue-typer
          v-if="items[0].startTypers"
          :text="[formatText(items[0].text)]"
          :repeat="0"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="50"
          :type-delay="20"
          @completed='onComplete(0)'
      ></vue-typer>
    </div>
    <transition name="slide-fade">
        <div style="margin-top:30px;margin-bottom:30px;" v-if="items[0].show">
            <b-row>
                <b-col><b-button id="button00" @click="onClick([0, 0, items[0].buttons[0].res])">{{items[0].buttons[0].name}}</b-button></b-col>
                <b-col><b-button id="button01" @click="onClick([0, 1, items[0].buttons[1].res])">{{items[0].buttons[1].name}}</b-button></b-col>
            </b-row>
            <!-- <div v-else-if="item.finalbutton"></div> -->
        </div>
    </transition>

    <div class="text" :class="$mq" ref=20>
        <vue-typer
            v-if="items[1].startTypers"
            :text="[formatText(items[1].text)]"
            :repeat="0"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="50"
            :type-delay="20"
            @completed='onComplete(1)'
        ></vue-typer>
    </div>
    <transition name="slide-fade">
        <div style="margin-top:30px;margin-bottom:30px;" v-if="items[1].show">
            <b-row>
                <b-col><b-button id="button10" @click="onClick([1, 0, items[1].buttons[0].res])">{{items[1].buttons[0].name}}</b-button></b-col>
                <b-col><b-button id="button11" @click="onClick([1, 1, items[1].buttons[1].res])">{{items[1].buttons[1].name}}</b-button></b-col>
            </b-row>
            <!-- <div v-else-if="item.finalbutton"></div> -->
        </div>
    </transition>

    <div class="text" :class="$mq" ref=20>
        <vue-typer
            v-if="items[2].startTypers"
            :text="[formatText(items[2].text)]"
            :repeat="0"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="50"
            :type-delay="20"
            @completed='onComplete(2)'
        ></vue-typer>
    </div>
    <transition name="slide-fade">
        <div style="margin-top:50px;margin-bottom:50px;" v-if="items[2].show">
              <b-button @click="$emit('enlarge-text')">{{items[2].button}}</b-button>
            <!-- <div v-else-if="item.finalbutton"></div> -->
        </div>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'Reasontext',
    props: {},
    data(){
        return{
            count: 0,
            actualtext: '',
            items:[
                {text:'Las redes sociales son muy populares entre los jóvenes porque nosotros, los humanos, somos animales …',buttons:[{name:'sociales',res:true},{name:'individuales', res:false}],
                show: false, startTypers: false},
                {text:'y tenemos una necesidad innata', buttons:[{name:'de sentirnos parte de algo', res:true},{name:'seguir nuestro camino solos', res:false}],
                show: false, startTypers: false},
                {text:'para estar satisfechos físicamente y mentalmente.', startTypers: false, show: false, button: 'Siguiente prueba >'}],
        }
    },
    methods:{
      onClick(event){
        const [num, num2, resolution] = event;
        const button = document.getElementById('button'+num+num2);
        if(resolution){
          setTimeout(() => {this.items[num+1].startTypers = true;}, 300);
          const num3 = Math.abs(num2-1);
          setTimeout(() => {document.getElementById('button'+num+num3).parentNode.remove()}, 200);
          setTimeout(() => {
            const parentElement = document.getElementById('button'+num+num2).parentElement;
            parentElement.classList.add('col-sm-12');
          }, 300);
        } else{
          console.log(document.getElementById('button'+num+num2).parentElement);
          document.getElementById('button'+num+num2).style.background = 'lightcoral';
        }
        setTimeout(() => {button.disabled = true;}, 300);

        
      },
      onComplete(num) {

        console.log(this.items[num].show);
        setTimeout(() => this.items[num].show = true, 500);
        this.count++;        
      },
      formatText(text) {
        let maxChars = 0;
        if(this.$mq === 'laptop') {
          maxChars = 55;
        } else if(this.$mq === 'tablet'){
          maxChars = 50;
        }else if(this.$mq === 'mobil'){
          maxChars = 45;
        }
 
        let breaked = "";
        let currentCount = 0;
        text.split(" ").forEach((word) => {
          currentCount += word.length;
          currentCount += 1;
          if (currentCount >= maxChars) {
            currentCount = word.length;
            breaked = `${breaked}\n${word} `;
          } else {
            breaked = `${breaked}${word} `;
          }
        });
        // console.log(breaked);
        return breaked;
      }
    },
    mounted() {
      setTimeout(() => {
        this.items[0].startTypers = true;
      }, 150);
    },
    created(){
    }
}
</script>

<style scoped>

.text{
  margin: auto; 
  color: white; 
}

.text.laptop{
  max-width: 600px;
  font-size: 20px;
}

.text.tablet{
  width: 90%;
  font-size: 18px;
}

button {
  width: 90%;
}

.slide-fade-enter-active {
  transition: all .7s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

/* button:disabled,
button[disabled]{
  background-color:lightcoral;
  color: black;
} */

</style>