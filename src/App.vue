<template>
  <div id="app">

    <div class="NewGameButton" @click="newGame()">
      New Game
    </div>
    <p>{{ score() }}</p>

    <div class="squareLine">
      <div @click="selectSquare('topLeft')"><square-shape :color="[topLeft ? 'blue' : '#d6d6d6']" ></square-shape></div>
      <div @click="selectSquare('topRight')"><square-shape :color="[topRight ? 'red' : '#d6d6d6']"></square-shape></div>
    </div>
    <div class="squareLine">
      <div @click="selectSquare('botLeft')"><square-shape :color="[botLeft ? 'green' : '#d6d6d6']"></square-shape></div>
      <div @click="selectSquare('botRight')"><square-shape :color="[botRight ? 'yellow' : '#d6d6d6']"></square-shape></div>
    </div>
    
  </div>
</template>

<script>
import SquareShape from './components/SquareShape.vue'

export default {
  name: 'App',
  data(){
    return{
      topLeft: false,
      topRight: false,
      botLeft: false,
      botRight: false,
      sequence: [],
      tmp: [],
      squareMapping: [
        'topLeft',
        'topRight',
        'botLeft',
        'botRight'
      ]
    }
  },
  computed: {

  },
  methods:{
    score(){
      const value = this.sequence.length - 1
      return (value < 0) ? `Score : 0` : `Score ${value}`
    },
    newGame(){
      this.sequence = []
      this.nextTurn()
      
    },
    allGrey(){
      this.topLeft = false
      this.topRight = false
      this.botLeft = false
      this.botRight = false
    },
    nextTurn(){
      this.addElementToSequence()
      this.allGrey()
      this.playSequence(this.tmp[0])
    },
    addElementToSequence(){
      this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4)])
      this.tmp = this.sequence.slice()
    },
    playSequence(selectedSquare){
      this[selectedSquare] = true
      setTimeout( () => {
        this.allGrey()
        this.tmp.shift()
        if (this.tmp[0]) {
          setTimeout(() => {
            this.playSequence(this.tmp[0])
          }, 400)
        }else{
          this.tmp = this.sequence.slice()
        }
      }, 400)
    },
    selectSquare(selectedSquare){
      console.log(selectedSquare)
      if (selectedSquare == this.tmp[0]) {
        this[selectedSquare] = true
        setTimeout(()=> {
          this.allGrey()
          this.tmp.shift()
          if (!(this.tmp[0])) {
            this.nextTurn()
          }
        }, 400)
      }else{
        alert("Perdu !")
      }
    }
  },
  components: {
    SquareShape
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.squareLine{
  display: flex;
  justify-content: center;
}
</style>
