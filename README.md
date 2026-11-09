🍕 Pizzería Mamma Mía! - Hito 5 (React Router)

Este proyecto corresponde al desarrollo del Hito 5 de la aplicación web "Pizzería Mamma Mía!", construida con React y Vite. En este hito se ha transformado la aplicación en una Single Page Application (SPA) mediante la implementación del sistema de enrutamiento dinámico utilizando React Router DOM (v6).

🚀 Características e Implementaciones del Hito 5

Estructura SPA basada en Vistas:

Migración de las vistas principales (Home, Register, Login, Cart, Pizza) a la carpeta src/pages/.

Configuración de Enrutamiento (React Router v6):

Encapsulamiento del componente principal con <BrowserRouter> en main.jsx.

Definición del mapa de rutas centralizado con <Routes> y <Route> en App.jsx.

Navegación Dinámica sin Recarga:

Menú de navegación (Navbar) adaptado con componentes <Link> para permitir una experiencia fluida e instantánea.

El botón del carrito (🛒 Total: $xxx) redirige directamente a la vista de compras /cart.

Nuevas Páginas Integradas:

Profile (/profile): Muestra la información básica del usuario (email simulado) y opción de cierre de sesión.

NotFound (/404 o *): Vista personalizada para capturar rutas inexistentes con un botón de retorno al inicio.


💻 Tecnologías Utilizadas

React 18

React Router DOM v6

Vite

JavaScript (ES6+)

CSS3 / HTML5

