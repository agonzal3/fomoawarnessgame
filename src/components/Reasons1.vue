<template>
    <div id="position" :class="$mq">
        <h2>Arrastra los conceptos con sus definiciones pertinentes.</h2>
        <draggable class="flexbox" :list="items" group="people" @change="log">
            <div class='drag-el' v-for="item in items" :key="item.totle">{{item.name}}</div>
        </draggable>

        <div class='dragTotal' style="display: flex">
            <draggable :disabled="items2[0].correct" id=id0 class='drop-zone' :class="$mq" :list="lists[0]" group="people" @change="log" :empty-insert-threshhold="500">
                <div class="centerinput" v-for="element in lists[0]" :key="element.name">
                    {{ element.name }}
                </div>
            </draggable>
            Capacidad de participar y aportar en el mundo.
        </div>

        <div class='dragTotal' style="display: flex">
            <draggable :disabled="items2[1].correct" id=id1 class='drop-zone' :class="$mq" :list="lists[1]" group="people" @change="log" :empty-insert-threshhold="500">
                <div class="centerinput" v-for="element in lists[1]" :key="element.name">
                    {{ element.name }}
                </div>
            </draggable>
            Ser capaz de valerse por uno mismo, tener independencia personal.
        </div>
        
        <div class='dragTotal' style="display: flex">
            <draggable :disabled="items2[2].correct" id=id2 class='drop-zone' :class="$mq" :list="lists[2]" group="people" @change="log" :empty-insert-threshhold="500">
                <div class="centerinput" v-for="element in lists[2]" :key="element.name">
                    {{ element.name }}
                </div>
            </draggable>
            Sentimiento de formar parte de un colectivo.
        </div>
        
        <b-button @click="correct">Confirmar</b-button>

        <p v-if="responce === 'notcomplete'" style="color:red">¡Tienes que colocarlas todas!</p>
        <p v-if="responce === 'tryagain'" style="color:orange">¡Inténtalo de nuevo!</p>
        <p v-if="responce === 'correct'" style="color:green">¡Muy bien!</p>
    </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
    name:'Reason1',
    components: {
            draggable,
    },
    data(){
        return{
            intro: 'Las redes sociales son muy populares entre los jóvenes, porque nosotros los humanos somos animales …',
            responce: '',
            items:[
                {id:0, name: 'Competencia', def:'Capacidad de participar y aportar en el mundo.', list:1},
                {id:1, name: 'Autonomía', def:'Ser capaz de valerse por uno mismo, tener independencia personal.', list:1},
                {id:2, name: 'Pertenencia', def:'Sentimiento de formar parte de un colectivo.', list:1},
            ],
            items2:[
                {id:0, name: 'Competencia', def:'Capacidad de participar y aportar en el mundo.', correct: false},
                {id:1, name: 'Autonomía', def:'Ser capaz de valerse por uno mismo, tener independencia personal.', correct: false},
                {id:2, name: 'Pertenencia', def:'Sentimiento de formar parte de un colectivo.', correct: false},
            ],
            lists: [[],[],[]]
        }
    },
    mounted(){
        this.items.sort(() => Math.random() - 0.5);
    },
    methods:{
        drop(event){
            const card_id = event.dataTransfer.getData('card_id');

            const card = document.getElementById(card_id);
            
            card.style.dysplay = "block";

            event.target.appendChild(card);

        },
        dragStart(event){
            const target = event.target;

            event.dataTransfer.setData('card_id',target.id);

        },
        correct(){
            // console.log('hello');
            if(this.lists[0].length===0 ||this.lists[1].length===0||this.lists[2].length===0){
                this.responce = 'notcomplete';
            }else{
                this.responce = 'nothing';
                this.items2.forEach((value, index) => {
                    const idcode = 'id'+index;
                    const name = document.getElementById(idcode);
                    if(this.lists[index][0].id === value.id){
                        console.log('correct')
                        name.style.backgroundColor = '#44C850';
                        name.childNodes[0].style.backgroundColor = '#44C850';
                        value.correct = true;
                    }else{
                        console.log('wrong')
                        this.items.push(this.lists[index][0])
                        this.lists[index].pop();
                        this.responce = 'tryagain';
                    }
                });
                if(this.responce === 'nothing'){
                    this.responce = 'correct';
                    setTimeout(() => this.$emit('enlarge-text'), 1000);
                }

            }
            
            
        },
        log(evt) {
            console.log(evt);
        }

    }
}
</script>

<!-- BaseTimer.vue -->
<style scoped>
    .drop-zone {
        background-color: #eee;
        margin-right: 10px;
        height: 60px;
        min-width: 200px;
        color: black;
    }

    .drop-zone.mobil {
        min-width: 40%;
    }

    .drag-el {
        background-color: #eee;
        margin: 10px;
        padding: 5px;
        width: 33%;
    }
    .dragTotal {
      border-radius: 10px;
      background-color:dimgray;
      padding: 15px;
      margin-top: 15px;
      color: white;
    }

    .flexbox{
        border-radius: 10px;
        display: flex;
        /* margin:10px; */
        background-color: #FFA525;
        height: 60px;
    }
    button{
        margin-top: 30px;
    }

    .centerinput{
        position: relative;
        margin-top: calc(30px - 8px);
    }
</style>