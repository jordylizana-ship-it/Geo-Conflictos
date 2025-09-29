# GeoConflictos Chile

## Visión General

**GeoConflictos Chile** es una aplicación web interactiva diseñada para visualizar conflictos socioambientales a lo largo de Chile. Utilizando datos abiertos y colaborativos de la base de datos de Wikidata, esta herramienta ofrece una visión geográfica y estadística de las diversas tensiones territoriales y ambientales del país.

El objetivo principal es proporcionar una plataforma accesible y fácil de usar para que investigadores, periodistas, estudiantes y el público en general puedan explorar, filtrar y comprender la distribución y el estado de estos conflictos.

## Características Actuales

-   **Mapa Interactivo:** Visualización de todos los conflictos con coordenadas geográficas en un mapa de Chile (potenciado por Leaflet.js).
-   **Datos de Wikidata:** La información se obtiene en tiempo real a través de consultas SPARQL a la base de datos de Wikidata, asegurando datos actualizados y abiertos.
-   **Panel de Estadísticas:** Un resumen visual que muestra:
    -   El número total de conflictos.
    -   El desglose por estado (Activos, Latentes, Resueltos).
    -   Un gráfico de barras con la distribución por sector (Minería, Agua, Forestal, etc.).
-   **Panel de Detalles por Conflicto:** Al hacer clic en un marcador del mapa, se despliega un panel con información detallada, incluyendo:
    -   Descripción del conflicto (enriquecida con datos de Wikipedia si están disponibles).
    -   Región, fecha de inicio y estado actual.
    -   Enlaces directos a las páginas de Wikidata y Wikipedia para una investigación más profunda.
-   **Filtros Avanzados:** Un panel de filtros intuitivo que permite a los usuarios acotar la búsqueda por:
    -   Nombre del conflicto.
    -   Región de Chile.
    -   Sector productivo involucrado.
    -   Estado actual (Activo, Latente, etc.).
    -   Fecha de inicio.
-   **Diseño Responsivo:** La interfaz se adapta a diferentes tamaños de pantalla, desde computadores de escritorio hasta dispositivos móviles.

## Tecnologías Utilizadas

-   **HTML5**
-   **CSS3** (con Flexbox y Grid para el layout)
-   **JavaScript (ES6+)**
-   **Leaflet.js:** Para el mapa interactivo.
-   **Wikidata SPARQL Query Service:** Como fuente de datos.
-   **Font Awesome:** Para la iconografía.
-   **Google Fonts:** Para la tipografía.

## Cómo Ejecutar

Este es un proyecto web estático y no requiere un servidor complejo.

1.  Asegúrate de tener todos los archivos en la misma carpeta.
2.  Abre el archivo `index.html` en cualquier navegador web moderno (como Chrome, Firefox, Edge, etc.).
3.  La aplicación se conectará a internet para obtener los datos de Wikidata y se iniciará automáticamente.