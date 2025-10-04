GeoConflictos
Visión General
GeoConflictos es una aplicación web interactiva diseñada para visualizar conflictos socioambientales en múltiples países. Utilizando datos abiertos y colaborativos de la base de datos de Wikidata, esta herramienta ofrece una visión geográfica y estadística de diversas tensiones territoriales y ambientales a nivel global.

El objetivo principal es proporcionar una plataforma accesible y fácil de usar para que investigadores, periodistas, estudiantes y el público en general puedan explorar, filtrar y comprender la distribución y el estado de estos conflictos.

Características Actuales
  Mapa Interactivo: Visualización de conflictos con coordenadas geográficas en un mapa mundial (potenciado por Leaflet.js).

  Datos de Wikidata: La información se obtiene en tiempo real a través de consultas SPARQL a la base de datos de Wikidata, asegurando datos actualizados y abiertos.

  Panel de Estadísticas: Un resumen visual que muestra:
    -   El número total de conflictos visualizados.
    -   El desglose por estado (Activos, Latentes, Resueltos).
    -   Un gráfico de barras con la distribución por sector (Minería, Agua, Forestal, etc.).

  Panel de Detalles por Conflicto: Al hacer clic en un marcador del mapa, se despliega un panel con información detallada, incluyendo:
    -   Descripción del conflicto (enriquecida con datos de Wikipedia si están disponibles).
    -   Región, país, fecha de inicio y estado actual.
    -   Enlaces directos a las páginas de Wikidata.

El botón de Wikipedia solo se muestra si existe una página asociada al conflicto.

  Filtros Avanzados: Un panel de filtros intuitivo que permite a los usuarios acotar la búsqueda por:

País: Permite seleccionar uno o varios países, con una opción para "Seleccionar todos".
    -   Nombre del conflicto.
    -   Región: Las regiones se muestran con el prefijo del país para una fácil identificación (ej: "Chile - Atacama").
    -   Sector productivo involucrado.
    -   Estado actual (Activo, Latente, etc.).
    -   Fecha de inicio.

  Diseño Responsivo: La interfaz se adapta a diferentes tamaños de pantalla, desde computadores de escritorio hasta dispositivos móviles.

Tutorial Interactivo: Una guía de bienvenida para nuevos usuarios que explica las funcionalidades principales de la aplicación.

Tecnologías Utilizadas
  HTML5

  CSS3 (con Flexbox y Grid para el layout)

  JavaScript (ES6+)

Vue.js (v3): Como framework reactivo para la gestión del estado y la interfaz de usuario.

  Leaflet.js: Para el mapa interactivo.

  Wikidata SPARQL Query Service: Como fuente de datos.

  Font Awesome: Para la iconografía.

  Google Fonts: Para la tipografía.

Cómo Ejecutar
Este es un proyecto web estático y no requiere un servidor complejo.

Asegúrate de tener todos los archivos necesarios en la misma carpeta.

Abre el archivo index.html en cualquier navegador web moderno (como Chrome, Firefox, Edge, etc.).

La aplicación se conectará a internet para obtener los datos de Wikidata y se iniciará automáticamente.