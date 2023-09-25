<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--morada.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 ¿Como solicitar series y peliculas en el canal de Telegram?

    .row.justify-content-center.align-items-center.mb-5
      .col-5.col-lg-3
        figure.mb-4
          img(src='@/assets/curso/temas/tema3/img2.png', alt='Imágen decorativa')

      .col-lg-9
        p En nuestro grupo de Telegram, te ofrecemos la oportunidad de solicitar películas y series de manera extremadamente sencilla. Además de eso, encontrarás información actualizada sobre todas las series, películas y otros contenidos que se incorporan diariamente a nuestra plataforma. Así que, únete a nosotros para disfrutar de un flujo constante de entretenimiento y mantenerse al tanto de las últimas novedades en el mundo del cine y la televisión. ¡Estamos aquí para brindarte una experiencia de entretenimiento completa!

        h4 Ingresa con el siguiente link a nuestro <a href="https://t.me/+akakd966aoUzODQ5" target="_blank"> <b style= "color:#029ae5;">GRUPO EN TELEGRAM</b> </a>





</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
