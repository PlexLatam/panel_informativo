<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--morada.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 ¿Como se Instala?

    .row.justify-content-center.align-items-center.mb-5
      b El proceso de instalación y posterior activación se puede realizar por medio de unos pasos muy sencillos que encontraras a continuación.


    .row.justify-content-center.align-items-center.mb-5
      PasosA.color-primario.mb-5(tipo="n")
        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h3 Descarga la aplicación de Plex en tu dispositivo.

            p En la tienda de aplicaciones de tu dispositivo (TV, Roku, consola de videojuegos, dispositivos móviles, etc.) busca y descarga nuestra aplicación “PLEX”.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img1.png', alt='Imágen decorativa')

        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img2.png', alt='Texto que describa la imagen')
              
          .col-md-7
            h3 Código de activación de la pantalla.

            p Una vez tengas descargada la aplicación en tu dispositivo te aparecerá en la pantalla un código de 4 dígitos el cual debes tener presente para los siguientes pasos.

            p Si el cogido no aparece en pantalla deberás darle clic al botón de iniciar sesión.

        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h3 ingresa tu cuenta personal.
            p el proceso continua ingresando en el siguiente link: <a href="https://www.plex.tv/" target="_blank"> <b style= "color:#ce00ff;">https://www.plex.tv/</b> </a> y luego:

            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-chevron-circle-right.color-vineta1
                p.mb-0 Debes dar clic en las 3 rayitas que se encuentran en la parte superior derecha de la pantalla.
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-chevron-circle-right.color-vineta1
                p.mb-0 Luego de esto debes dar clic en el boton que dice "sign in"
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-chevron-circle-right.color-vineta1
                p.mb-0 Por último debes de ingresar el correo que te suministramos en la casilla que dice email address y abajo de esta poner la clave.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img3.png', alt='Texto que describa la imagen')

        .row.justify-content-center.align-items-center
          .col-md-7.mb-4.mb-md-0
            h3 Activación de la pantalla.
            p El último paso es ingresar en este link <a href="https://www.plex.tv/link/" target="_blank"> <b style= "color:#ce00ff;">https://www.plex.tv/link/</b> </a> en donde debes ingresar el código de 4 dígitos que aparece en la pantalla de tu dispositivo.
        
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/img4.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      h4.text-center <b style= "color:#EBAE00;">Ahora puedes disfrutar de todo el contenido de PLEX LATAM la mejor aplicacion del mercado.</b>



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
