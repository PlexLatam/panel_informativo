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

    .row.justify-content-center.align-items-center.mb-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--degrade")
        .row(titulo="¿EN CUANTO TIEMPO RECIBO MI ACCESO PLEX?")
          p.texto-blanco Tu cuenta para acceder a PLEX LATAM te será enviada en los 10 minutos siguientes después de realizar el pago de tu plan.
        
        .row.p-5(titulo="¿EN QUE DISPOSITIVOS PUEDO VER?")
          p.texto-blanco Podras disfrutar PLEX en :  Smart TV, Roku, PC Windows, Pc Mac, TV-Box, Apple tv, Chromecast, Xbox , Playstation, Amazon Fire tv.

        .row.p-5(titulo="¿EN CUANTOS DISPOSITIVOS A LA VEZ?")
          p.texto-blanco Puedes ver hasta en 4 dispositivos simultáneamente dependiendo del plan que hallas adquirido.

        .row.p-5(titulo="¿CUALES SON LOS MEDIOS DE PAGO?")
          p.texto-blanco Contamos con diferentes medios de pago tales como

          ul.lista-ul--color.fa-ul2
            li.ps-4
              i.fas.fa-chevron-circle-right.color-vineta1
              p.mb-0.texto-blanco <b>Cuenta de Ahorros Davivienda:</b> 488411015966
            li.ps-4
              i.fas.fa-chevron-circle-right.color-vineta1
              p.mb-0.texto-blanco  <b>Ahorros Bancolombia:</b> 86716567011
            li.ps-4
              i.fas.fa-chevron-circle-right.color-vineta1
              p.mb-0.texto-blanco  <b>Nequi o Daviplata:</b> 3222527461


        .row.p-5(titulo="¿SI ME REGISTRO POR MI CUENTA EN PLEX.COM TENDRE ACCESO Al CONTENIDO PREMIUM?")
          p.texto-blanco En PLEX, el contenido premium se encuentra en servidores privados que no están disponibles para el registro público. Para acceder a este contenido, ofrecemos nuestro servicio de PLEX LATAM, el cual te da acceso a todo el contenido de nuestra plataforma, incluyendo los estrenos de cine y contenido exclusivo de otras plataformas. Regístrate con nosotros y podrás disfrutar de todo nuestro contenido.

        .row.p-5(titulo="¿EL PAGO ES MENSUAL?")
          p.texto-blanco El Pago de este servicio es mensual, y tienes la opcion de cancelar cuando quieras ya que no hay contratos de permanencia.

        .row.p-5(titulo="¿CUANTA VELOCIDAD DE INTERNET NECESITO?")
          p.texto-blanco Para reproducir el contenido de este servidor perfectamente se recomienda una velocidad de 10 Mb en Adelante.







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
