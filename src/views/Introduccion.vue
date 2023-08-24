<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/intro/img1.png', alt='Imágen decorativa')

      .col-lg-7
        h1.text-center <b style= "color:#ffcc00;">LA PLATAFORMA QUE LO TIENE TODO</b>
        b PLEX es el servicio de streaming de peliculas y series que lo tiene todo. Con el mejor contenido seleccionado de todas las plataformas como, Netflix, Prime Video, Disney, HBO MAX, y estrenos de Cine.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
