<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--morada.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 ¿Como configurar la calidad del Video en mi TV?

    p Para esto solo debes de dirigirte a ajustes o configuración de su aplicación de Plex que se encuentra abriendo el menú del lado izquierdo de la pantalla y yendo hasta abajo del mismo y allí encontraras la opción de ajustes o configuración, das clic en esta opción y luego nos dirigimos a la opción de video y allí encontrarás varias opciones, 2 de ellas son:

    ul.lista-ul--color.fa-ul2.ps-4
      li
        i.fas.fa-chevron-circle-right.color-vineta1
        p.mb-0 Calidad local 
      li
        i.fas.fa-chevron-circle-right.color-vineta1
        p.mb-0 Calidad remota 

    p las cuales debes de poner en original o automático dependiendo de tu dispositivo y con esto ya estaría lista la configuración del video de la aplicación Plex en tu dispositivo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema2/img1.webp', alt='Imágen decorativa')



</template>

<script>
export default {
  name: 'Tema2',
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
