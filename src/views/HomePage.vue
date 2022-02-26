<template>
  <div id="HomePage">
      <div class="neonText pulsate">
          <h1>The Super Simon</h1>
      </div>
      <div style="height: 20rem" />
      <div class="neonbutton">
        <neon-button></neon-button>
      </div>
      
  </div>

</template>

<script>
import NeonButton from '../components/NeonButton.vue'
export default {
  components: {
    NeonButton
  }
}
</script>

<style>
@font-face {
  font-family: 'NeonFont';
  src: url('../../public/font/Regular.ttf');
}

#HomePage{
  background-color: var(--main-bg-color);
  height: 100%;
  margin: 0;
  padding-top: 2rem;
}

h1{
  font-size: 7em;
  font-family: NeonFont;
}

.neonText {
  display: flex;
  justify-content: center;
  color: #fff;
  text-shadow:
    0 0 5px #fff,
    0 0 8px #fff,
    0 0 21px #fff,
    0 0 42px #ff14bd,
    0 0 82px #ff14bd,
    0 0 92px #ff14bd,
    0 0 102px #ff14bd,
    0 0 151px #ff14bd;
}

.neonbutton{
  display: flex;
  justify-content: center;
}

.pulsate {
     animation: pulsate 1.5s infinite alternate;     
}

@keyframes pulsate {
    
  100% {

      text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #ff14bd,
      0 0 80px #ff14bd,
      0 0 90px #ff14bd,
      0 0 100px #ff14bd,
      0 0 150px #ff14bd;
  
  }
  
  0% {

    text-shadow:
    0 0 2px #fff,
    0 0 4px #fff,
    0 0 6px #fff,
    0 0 10px #ff14bd,
    0 0 45px #ff14bd,
    0 0 55px #ff14bd,
    0 0 70px #ff14bd,
    0 0 80px #ff14bd;
  }
}

</style>