# API proyecto SENA

### Prerrequisitos Antes de empezar, asegúrate de tener instalado lo siguiente:

- Node.js
- npm
### ⚙️ Instalación

Sigue estos pasos para levantar la API en tu entorno local:

1.  **Clonar el repositorio:**
 ```bash
    git clone 
```

2.  **Instalar dependencias:**
```bash
    npm install
```

3.  **Configurar variables de entorno:**
La aplicación utiliza **variables de entorno** para su configuración. Debes crear un archivo llamado **`.env`** en la raíz del proyecto. Puedes basarte en el archivo **`.env.example`** para saber qué variables son necesarias.
nota: tienes que remplazar la url en el apartado <username> y <password> para saber cual es el username y password tendras que escribirme por wsp

```bash
    PORT=3000
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.4ajs1qg.mongodb.net/SENAdb
```
4.  **Correr la api:**
En el archivo package.json en la raiz del proyecto encontraras los scripts de ejecucion "linea 6 a 9 en el archivo package.json".
```bash
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "node --watch index.js"
    },
```
para correr el script "dev" debes abrir la terminal "powershell" o "cmd" y escribir el siguiente comando:
```bash
    npm run dev
```

### Carpetas y archivos mas importantes
Archivo index.js: es el archivo mas importante aqui va la logica de la api
Carpeta routes: esta carpeta se encarga del todos los endpoints# API proyecto SENA

### Prerrequisitos Antes de empezar, asegúrate de tener instalado lo siguiente:

- Node.js
- npm
### ⚙️ Instalación

Sigue estos pasos para levantar la API en tu entorno local:

1.  **Clonar el repositorio:**
 ```bash
    git clone 
```

2.  **Instalar dependencias:**
```bash
    npm install
```

3.  **Configurar variables de entorno:**
La aplicación utiliza **variables de entorno** para su configuración. Debes crear un archivo llamado **`.env`** en la raíz del proyecto. Puedes basarte en el archivo **`.env.example`** para saber qué variables son necesarias.
nota: tienes que remplazar la url en el apartado <username> y <password> para saber cual es el username y password tendras que escribirme por wsp

```bash
    PORT=3000
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.4ajs1qg.mongodb.net/SENAdb
```
4.  **Correr la api:**
En el archivo package.json en la raiz del proyecto encontraras los scripts de ejecucion "linea 6 a 9 en el archivo package.json".
```bash
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "node --watch index.js"
    },
```
para correr el script "dev" debes abrir la terminal "powershell" o "cmd" y escribir el siguiente comando:
```bash
    npm run dev
```   

5. **Testear la api:**
Para testear la api se suguiere realizarlo con postman.

### Archivos y carpetas importantes 