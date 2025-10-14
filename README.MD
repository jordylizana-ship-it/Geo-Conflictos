GeoConflictos - Mapa Interactivo de Conflictos Socioambientales
Una aplicación web interactiva para visualizar y analizar conflictos socioambientales en múltiples países, utilizando datos abiertos y colaborativos de Wikidata.

Visita la aplicación en vivo (ejemplo): [Enlace a la app desplegada]

Acerca del Proyecto
GeoConflictos es una herramienta diseñada para proporcionar una visión geográfica y estadística de diversas tensiones territoriales y ambientales a nivel global. El objetivo es ofrecer una plataforma accesible para que investigadores, periodistas, estudiantes y el público en general puedan explorar, filtrar y comprender la distribución y el estado de estos conflictos.

La arquitectura del proyecto, con un backend en Node.js/Express sirviendo un frontend en Vue.js 3, asegura un rendimiento robusto y una experiencia de usuario fluida y completamente responsiva.

Características Principales
🗺️ Mapa Interactivo: Visualización de conflictos con coordenadas geográficas precisas y aproximadas en un mapa mundial, potenciado por Leaflet.js.

🔗 Datos Abiertos y en Vivo: La información se obtiene en tiempo real a través de consultas SPARQL a Wikidata, asegurando datos actualizados.

📊 Panel de Estadísticas Dinámico: Un resumen visual que muestra el total de conflictos, el desglose por estado (Activo, Latente, Resuelto) y un gráfico de barras con la distribución por sector (Minería, Agua, etc.).

📄 Panel de Detalles por Conflicto: Al seleccionar un conflicto, se despliega un panel con su descripción, región, fecha de inicio y enlaces directos a Wikidata, Wikipedia y Wikimedia Commons.

🔍 Filtros Avanzados: Un panel intuitivo que permite acotar la búsqueda por múltiples países, nombre, región, sector, estado y fecha de inicio.

📱 Diseño Responsivo: La interfaz se adapta perfectamente a cualquier tamaño de pantalla, desde computadores de escritorio hasta dispositivos móviles.

🎓 Tutorial Interactivo: Una guía de bienvenida inteligente y responsiva que introduce a los nuevos usuarios a todas las funcionalidades de la plataforma.

🌐 Soporte Multilingüe: La interfaz está completamente traducida a 7 idiomas, con una selección inicial para el usuario.

🎨 Tema Claro y Oscuro: Permite al usuario cambiar entre un tema claro y uno oscuro para mayor comodidad visual.

Construido Con
Este proyecto fue posible gracias a las siguientes tecnologías:

Backend:

Node.js

Express.js

Frontend:

Vue.js 3 (con Composition API)

Leaflet.js (para el mapa interactivo)

Font Awesome

Wikidata SPARQL Query Service (como fuente de datos)

HTML5 y CSS3 (con variables para tematización)

Uso Local
Para ejecutar este proyecto en tu propia máquina, sigue estos pasos:

Prerrequisitos: Asegúrate de tener Node.js instalado (que incluye npm).

Clona el repositorio (ejemplo):

git clone [https://github.com/jordylizana-ship-it/Geo-Conflictos](https://github.com/jordylizana-ship-it/Geo-Conflictos)

Navega a la carpeta del proyecto:

cd geoconflictos

Instala las dependencias:

npm install

Inicia el servidor:

npm start

¡Listo! La aplicación estará corriendo en http://localhost:3000.

Licencia
Distribuido bajo la Licencia MIT. Ver LICENSE para más información.

Contacto
Tu Nombre - [enlace a tu perfil de GitHub o red social]