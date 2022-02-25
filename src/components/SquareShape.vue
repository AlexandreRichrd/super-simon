<template>
  <div :style=" { 'background-color' : color } "/>
</template>

<script>
export default {
    props: [
        'color'
    ]
}
</script>

<style scoped>
    div{
      margin-right: 0.4rem;
      display: inline-block;
      height: 10rem;
      width: 10rem;
      box-shadow: 5px 5px 5px grey;
      cursor: pointer;
    }

   

</style>