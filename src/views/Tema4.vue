<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--morada.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Plex en dispositivos móviles, cómo instalarlo y cómo funciona

    p Cómo puedes instalar y empezar a usar Plex en su versión para dispositivos móviles.

    h4 Plex se compone de dos partes: el servidor y el cliente.

    ul.lista-ul--color.fa-ul2.ps-3.mt-4
      li
        i.fas.fa-chevron-circle-right.color-vineta1
        p.mb-0 El servidor de Plex, llamado Plexlatam, es el que se encarga de analizar las películas, organizar el catálogo y enviarlo por streaming al resto de dispositivos.
      li
        i.fas.fa-chevron-circle-right.color-vineta1
        p.mb-0 El cliente de Plex, generalmente llamado simplemente Plex, por su parte se comunica con un servidor de Plexlatam para poder acceder al contenido de su librería desde cualquier lugar. La aplicación de Plex está disponible para multitud de sistemas como Windows, Mac, Android, iOS, PlayStation, Xbox, Android TV y varios tipos de Smart TV.


    h4 Cómo funciona Plex en dispositivos móviles.

    p Todo empieza igual que en cualquiera otra aplicación: buscándola su nombre en Google Play o App Store ("Plex"). Pulsa Instalar y espera a que termine de descargar e instalarse. Cuando esté listo, pulsa Abrir.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema4/img1.jpg', alt='Imágen decorativa')

    p El siguiente paso es iniciar sesión con tu cuenta de Plex.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema4/img2.png', alt='Imágen decorativa')

    p Plex para dispositivos móviles es una aplicación gratuita, pero está limitada a solo un minuto de vídeo. Si quieres eliminar esta limitación, tienes dos opciones. Por un lado está Plex Pass, que es una cuota mensual de unos 35.000 pesos aproximadamente al mes con funciones como sincronización en la nube o modo offline en el móvil. Si eso no te convence, también puedes hacer <b>un pago unico in-app</b> de 29.000 pesos aproximadamente para desbloquear la reproducción en dispositivos móviles. Si por ahora prefieres únicamente probar, pulsa Quedarme en modo de prueba.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema4/img3.jpg', alt='Imágen decorativa')

    p En ese momento ya tendrás acceso al <b>contenido disponible en tu servidor de Plex latam</b>, de modo que puedes empezar a ver tus películas y series en tu dispositivo móvil. Recuerda que hasta que te suscribas a Plex Pass o pagues los 4,33 euros para desbloquear la reproducción, solo podrás ver un minuto de vídeo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema4/img4.jpg', alt='Imágen decorativa')

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
