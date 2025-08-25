# 💻 Aplicación de Login y Registro

Aplicación web simple para registrar e iniciar sesión, construida con tecnologías front-end estándar. Este proyecto sirve como una demostración de un flujo de autenticación básico utilizando solo HTML, CSS y JavaScript, con el almacenamiento de datos en el navegador a través de **Local Storage**.

---

### ✨ Características

-   **Registro de Usuarios:** Permite a nuevos usuarios crear una cuenta con un nombre de usuario y una contraseña.
-   **Inicio de Sesión:** Permite a los usuarios existentes acceder a su cuenta.
-   **Validación de Formularios:** Verifica que las contraseñas coincidan durante el registro y que los campos no estén vacíos en el inicio de sesión.
-   **Interfaz Dinámica:** Alterna entre las vistas de "Registro" e "Inicio de Sesión" en la misma página, sin necesidad de recargarla.
-   **Diseño Moderno:** Interfaz de usuario minimalista y oscura con efectos visuales y animaciones CSS.

---

### 🛠️ Tecnologías Utilizadas

-   **HTML5:** Estructura de la página web.
-   **CSS3:** Estilos, diseño y animaciones.
-   **JavaScript (ES6+):** Lógica del formulario, validación y gestión de datos con **Local Storage**.

---

### 🚀 Cómo Usar

1.  **Clonar el repositorio:** `git clone https://github.com/SnayderCJ/inicio_De_Seccion.git`
2.  **Abrir el archivo:** Navega a la carpeta del proyecto y abre el archivo `index.html` en tu navegador web.
3.  **Interactuar con el formulario:**
    -   Para **registrarte**, llena los campos en el formulario de registro y haz clic en "Registrar".
    -   Para **iniciar sesión**, haz clic en "Inicia sesión aquí", ingresa las credenciales que acabas de registrar y haz clic en "Ingresar".

---

### 📁 Estructura del Proyecto

``` bash
├── index.html
├── Css/
│   └── styles.css
└── JavaScript/
    └── main.js
```

### ⚠️ Importante

-   Esta aplicación **no** se conecta a una base de datos real. Almacena las credenciales en el **Local Storage** del navegador, por lo que los datos persisten hasta que se borran del caché o se usan en otro navegador.
-   **No es seguro** para uso en producción, ya que las contraseñas se guardan en texto plano. Su propósito es puramente educativo para demostrar un flujo de autenticación simple.