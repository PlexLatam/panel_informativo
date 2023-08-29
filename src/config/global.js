export default {
  global: {
    componenteFormativo: 'PLEX LATAM',
    descripcionCurso:
      'Seguramente en más de una ocasión hayas oído hablar de Plex como una herramienta a la que la gente se refiere como la solución definitiva para ver cualquier contenido multimedia. Por eso hoy vamos a explicarte qué es Plex y cómo funciona',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '¿Como se Instala?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '¿Como configurar la calidad del Video en mi TV?',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '¿Como solicitar series y peliculas en el canal de Telegram?',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '¿Como hacer si quiero ver Plex en mi celular?',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [],
  },

  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
