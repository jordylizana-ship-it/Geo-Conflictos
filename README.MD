# GeoConflictos - Mapa Interactivo de Conflictos Socioambientales

[![Estado](https://img.shields.io/badge/estado-activo-brightgreen)](https://geo-conflictos.toolforge.org/)
[![Licencia](https://img.shields.io/badge/licencia-MIT-blue)](LICENSE)

Una aplicación web interactiva para visualizar y analizar conflictos socioambientales, utilizando datos abiertos y colaborativos directamente desde Wikidata.

**Visita la aplicación en vivo:** **[https://geo-conflictos.toolforge.org/](https://geo-conflictos.toolforge.org/)**

[Imagen de la aplicación GeoConflictos]

---
## ## Acerca del Proyecto

GeoConflictos es una herramienta diseñada para proporcionar una visión geográfica y estadística de diversas tensiones territoriales y ambientales a nivel global. El objetivo es ofrecer una plataforma accesible para que investigadores, periodistas, estudiantes y el público en general puedan explorar, filtrar y comprender la distribución y el estado de estos conflictos.

La arquitectura del proyecto, con un backend en **Node.js/Express** sirviendo un frontend en **Vue.js 3**, asegura un rendimiento robusto y una experiencia de usuario fluida y completamente responsiva.

---
## ## Características Principales

* 🗺️ **Mapa Interactivo:** Visualización de conflictos con coordenadas en un mapa mundial, potenciado por Leaflet.js.
* 🔗 **Datos Abiertos y en Vivo:** La información se obtiene en tiempo real a través de consultas SPARQL a Wikidata, asegurando datos siempre actualizados.
* 📊 **Panel de Estadísticas Dinámico:** Resumen visual con el total de conflictos, desglose por estado (Activo, Latente, Resuelto) y distribución por sector.
* 📄 **Panel de Detalles por Conflicto:** Al seleccionar un conflicto, se despliega información detallada con descripción, región, fecha de inicio y enlaces directos a las fuentes de Wikimedia.
* 🔍 **Filtros Avanzados:** Un panel intuitivo que permite acotar la búsqueda por país, nombre, sector, estado y más.
* 📱 **Diseño Responsivo:** La interfaz se adapta perfectamente a cualquier tamaño de pantalla, desde computadores de escritorio hasta dispositivos móviles.
* 🎓 **Tutorial Interactivo:** Una guía de bienvenida que introduce a los nuevos usuarios a todas las funcionalidades de la plataforma.
* 🌐 **Soporte Multilingüe:** Interfaz completamente traducida a 7 idiomas.
* 🎨 **Tema Claro y Oscuro:** Permite al usuario cambiar entre un tema claro y uno oscuro para mayor comodidad visual.

---
## ## Construido Con

Este proyecto fue posible gracias a las siguientes tecnologías:

**Backend:**
* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)

**Frontend:**
* [Vue.js 3](https://vuejs.org/) (con Composition API)
* [Leaflet.js](https://leafletjs.com/)
* [Font Awesome](https://fontawesome.com/)
* [Wikidata SPARQL Query Service](https://query.wikidata.org/)
* HTML5 y CSS3

---
## ## Uso Local

Para ejecutar este proyecto en tu propia máquina, sigue estos pasos:

1.  **Prerrequisitos:** Asegúrate de tener [Node.js](https://nodejs.org/) instalado (incluye npm).

2.  **Clona el repositorio:**
    ```sh
    git clone [https://github.com/jordylizana-ship-it/Geo-Conflictos.git](https://github.com/jordylizana-ship-it/Geo-Conflictos.git)
    ```

3.  **Navega a la carpeta del proyecto:**
    ```sh
    cd Geo-Conflictos
    ```

4.  **Instala las dependencias:**
    ```sh
    npm install
    ```

5.  **Inicia el servidor:**
    ```sh
    npm start
    ```
    ¡Listo! La aplicación estará corriendo en `http://localhost:3000`.

---
## ## Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

---
## ## Contacto

Jordy Lizana - [jordylizana-ship-it](https://github.com/jordylizana-ship-it)