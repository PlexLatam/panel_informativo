<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--morada.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.justify-content-center.align-items-center
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/intro/img1.png', alt='Imágen decorativa')

      .col-lg-7
        h1.text-center <b style= "color:#d58401;">LA PLATAFORMA QUE LO TIENE TODO</b>
        b PLEX es el servicio de streaming de peliculas y series que lo tiene todo. Reúne el mejor contenido seleccionado que puedes encontrar normalmente en plataformas como, Netflix, Prime Video, Disney, HBO MAX, y estrenos de Cine.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--degrade")
          .row(titulo="<b style= 'color: #ffffff;'>¿EN CUANTO TIEMPO RECIBO MI ACCESO PLEX?</b>")
            p.texto-blanco Tu cuenta para acceder a PLEX LATAM te será enviada minutos después de realizar el pago de tu plan.
          
          .row(titulo="<b style= 'color: #ffffff;'>¿EN QUE DISPOSITIVOS PUEDO VER?</b>")
            p.texto-blanco Podras disfrutar PLEX en :  Smart TV, Roku, PC Windows, Pc Mac, TV-Box, Apple tv, Chromecast, Xbox , Playstation, Amazon Fire tv.

          .row(titulo="<b style= 'color: #ffffff;'>¿EN CUANTOS DISPOSITIVOS A LA VEZ?</b>")
            p.texto-blanco Puedes ver en 2 o en 4 dispositivos simultáneamente dependiendo del plan que hallas adquirido.

          .row(titulo="<b style= 'color: #ffffff;'>¿CUALES SON LOS MEDIOS DE PAGO?</b>")
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


          .row(titulo="<b style= 'color: #ffffff;'>¿SI ME REGISTRO POR MI CUENTA EN PLEX.TV TENDRE ACCESO AL CONTENIDO PREMIUM?</b>")
            //p.texto-blanco En PLEX, el contenido premium se encuentra en servidores privados que no están disponibles para el registro público. Para acceder a este contenido, ofrecemos nuestro servicio de PLEX LATAM, el cual te da acceso a todo el contenido de nuestra plataforma. Regístrate con nosotros y podrás disfrutar de todo nuestro contenido.

            P.texto-blanco El contenido premium (Estrenos, Series y Películas) de PLEX se encuentra en servidores privados. Para acceder a este, te ofrecemos ofrecemos nuestro servicio de PLEX LATAM. Regístrate con nosotros y podrás disfrutar de todo nuestro contenido.
          

          .row(titulo="<b style= 'color: #ffffff;'>¿EL PAGO ES MENSUAL?</b>")
            p.texto-blanco El Pago de este servicio es mensual, y tienes la opcion de cancelarlo cuando quieras ya que no hay contratos de permanencia.

          .row(titulo="<b style= 'color: #ffffff;'>¿CUANTA VELOCIDAD DE INTERNET NECESITO?</b>")
            p.texto-blanco Para reproducir el contenido de este servidor perfectamente se recomienda una velocidad de 10 Mb en Adelante.


    h2.text-center para mas informacion contactate con nosotros: 
    p.text-center <b>Escríbenos a nuestro</b> <a href="https://wa.me/message/HYSMMEVEIBCYI1" target="_blank"> <b style= "color:#3bbf4d;">WhatsApp</b> </a> <b>o visita nuestro</b> <a href="https://instagram.com/plex_latam_oficial?utm_source=qr&igshid=MThlNWY1MzQwNA==" target="_blank"> <b style= "color:#fe008f;">Instagram</b> </a>



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
