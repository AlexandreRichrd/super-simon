<template>
 <div class="neon-button"> <router-link to="/Game">Play</router-link></div>
</template>

<script>
export default {

}
</script>

<style>
    :root{
        --clr-neon: #ff14bd;
    }

    *,
    *::before,
    *::after{
        box-sizing: border-box;
    }

    .neon-button{
        color: var(--clr-neon);
        font-size: 5em;
        border: currentColor 0.4rem solid;
        padding: 0.1rem 5rem;
        border-radius: 0.5rem;
        font-family: NeonFont;
        cursor: pointer;

        text-shadow: 
            0 0 0.25rem hsla(0, 0%, 100%, 0.5),
            0 0 1.5rem currentColor;
        
        box-shadow: 
            inset 0 0 2rem var(--clr-neon),
            0 0 2rem var(--clr-neon);

        position: relative;
    }

    .neon-button::before{
        content: '';
        position: absolute;
        background: var(--clr-neon);
        top: 120%;
        left: 0;
        width: 100%;
        height: 100%;
        
        transform: perspective(3rem) rotateX(40deg) scale(1, 0.35);

        filter: blur(3rem);
    }

    @font-face {
    font-family: 'NeonFont';
    src: url('../../public/font/Regular.ttf');
    }
</style>