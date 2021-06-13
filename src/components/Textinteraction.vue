<template>
    <div id="position" :class="$mq">
        <div class="text" :class="$mq" ref=20>
          <vue-typer
            v-if="startTypers"
            :text="[formatText(text[count])]"
            :repeat="0"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="50"
            :type-delay="30"
            :pre-erase-delay="2000"
            :erase-delay="100"
            erase-style="backspace"
            :erase-on-complete="false"
            caret-animation="blink"
            @completed='onComplete'
          ></vue-typer>
        </div>
        <transition name="slide-fade">
          <div style="margin-top:20px;margin-bottom:20px;" v-if="show">
              <div v-if="responcebutton[count].button2 && responcebutton[count].button1">
                <b-row class="twoRows">
                  <b-col><b-button class="twoButton" @click="onClick">{{responcebutton[count].button1}}</b-button></b-col>
                  <b-col><b-button class="twoButton" @click="resetClick">{{responcebutton[count].button2}}</b-button></b-col>
                </b-row>
              </div>
              <div v-else-if="responcebutton[count].button2">
                <b-button class="onButton" @click="resetClick">{{responcebutton[count].button2}}</b-button>
              </div>
              <div v-else>
                <b-button class="onButton" @click="onClick">{{responcebutton[count].button1}}</b-button>
              </div>
          </div>
        </transition>
      </div>
</template>

<script>
export default {
    name: 'Textinteract',
    props: {
        text: Array,
        responcebutton: Array,
    },
    data(){
        return{
            show:false,
            count: 0,
            startTypers: false,
            actualtext: '',
        }
    },
    methods:{
      resetClick(){
        if(this.responcebutton.length === 3){
          this.$router.push('/solution');
        } else{
          this.count = 0;
          this.show = false;
          this.$emit('enlarge-text');
        }
      },
      onClick(){
        this.show = !this.show;
        this.count++;
      },
      onComplete() {
        console.log('complete');
        setTimeout(() => this.show = !this.show, 500);
        // this.show = !this.show;
      },
      formatText(text) {
        let maxChars = 0;
        if(this.$mq === 'laptop') {
          maxChars = 55;
        } else if(this.$mq === 'tablet'){
          maxChars = 50;
        } else if(this.$mq === 'mobil'){
          maxChars = 45;
        }
        
        // let words = [];
        // console.log(text.text.split(" "));
        let breaked = "";
        let currentCount = 0;
        text.split(" ").forEach((word) => {
          currentCount += word.length;
          currentCount += 1;
          if (currentCount >= maxChars || word === '\n') {
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
        this.startTypers = true;
      }, 150);
      console.log('Textinteraction has been mounted!')
    },
    created(){
      console.log('Textinteraction has been created!')
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
  width: 100%;
  font-size: 17px;
}

.twoButton {
  width: 90%;
}
.onButton {
  width: 70%;
}

.twoRows{
  align-items: center;
  margin-right: 0px;
  margin-left: 0px;
}

.slide-fade-enter-active {
  transition: all .7s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

</style>