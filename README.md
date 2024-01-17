<p align="center">
  <img src="https://raw.githubusercontent.com/angular/angular/main/aio/src/assets/images/logos/angular/angular_renaissance.png" alt="angular-logo" width="300px" height="300px"/>
  <br>
</p>

# Librería Angular v17
Este repositorio contiene un ejemplo sencillo para crear un libreria y publicar en npm. Esto para usar en los proyectos que queramos.

### Dependecias
- Angular v17
- NodeJS >=18
- npm >=10

### Creación de proyecto sin estructura
Para instalar iniciar el proyecto se debe usar:
```bash
ng new name_project --no-create-application
```
Esto creará un proyecto angular sin estructura de directorios

### Creación de librería
Para crear la librería dentro del proyecto que creamos, debemos usar:
```bash
cd name_project
ng generate library ngx-mylibrary
```

### Creación de componente
Como sabemos, en la versión 17 de Angular ya no es necesario el uso de módulos. Ya los componentes se crean por defecto ```standalone```.
Para crear el componente simplemente hacemos:
```bash
ng g c input-test
```

Para este ejemplo se usó ```input-test``` como componente. Esto nos generará una estructura como esta:
```
└── 📁ngx-mylibrary
    └── README.md
    └── ng-package.json
    └── package.json
    └── 📁src
        └── 📁lib
            └── 📁input-test
                └── input-test.component.css
                └── input-test.component.html
                └── input-test.component.spec.ts
                └── input-test.component.ts
            └── ngx-mylibrary.component.spec.ts
            └── ngx-mylibrary.component.ts
            └── ngx-mylibrary.service.spec.ts
            └── ngx-mylibrary.service.ts
        └── public-api.ts
    └── tsconfig.lib.json
    └── tsconfig.lib.prod.json
    └── tsconfig.spec.json
```

Una vez creado el componente (tambien puede ser servicio) en el archivo ```public-api.ts``` se exportan de manera publica.

El cual quedará de la siguiente manera:
```javascript
/*
 * Public API Surface of ngx-mylibrary
 */

export * from './lib/ngx-mylibrary.service';
export * from './lib/ngx-mylibrary.component';
export * from './lib/input-test/input-test.component';
```

### Contruir librería
Para construir la librería usamos el siguiente comando en la raiz del proyecto:

```bash
npm build ngx-mylibrary
```

Esto generará un directorio llamado ```dist``` y en su interior el directorio con el nombre de la librería, para este caso es ```ngx-mylibrary```

### Empaquetar librería
Para empaquetar la librería usamos el siguiente comando, pero antes debemos ingresar a la ruta de la librería creada:
```bash
cd dist/ngx-mylibrary
npm pack
```

Esto generará un archivo con extensión ```.tgz```, para este caso se llama ```ngx-mylibrary-0.0.1.tgz```.

### Uso de librería en local
Para hacer uso de la librería en local. Vamos donde se encuentre nuestro ```.tgz``` y copiamos la ruta de acceso al archivo.

Una vez copiada la ruta de acceso. Vamos al proyecto donde deseamos usar la libraría y usamo el comando:
```bash
npm i ruta-acceso/ngx-mylibrary-0.0.1.tgz
```

Para ver que se instaló exitosamente, vamos al ```package.json``` del proyecto donde usamos la librería y deberia aparecer la siguiente linea en las dependecias:

```bash
"ngx-mylibrary": "file:../nombre-proyecto/dist/ngx-mylibrary/ngx-mylibrary-0.0.1.tgz",
```

### Publicar en NPM
Para publicar nuestra librería debemos crear una cuenta en [NPM](https://www.npmjs.com/).

Una vez creada la cuenta, debemos hacer:
```bash
npm login
```
Esto nos abrirá una ventana para loguearnos.

Una vez logueados, publicamos nuestra librería con el siguiente comando. Pero antes, debemos ingresar donde se encuentrá nuestro empaquetado:

```bash
cd dist/ngx-mylibrary
npm publish
```

Una vez terminado esto, veremos nuestra librería en el sitio de NPM y para hacer uso de esta la instalamos como cualquier otra librería:
```bash
npm i ngx-mylibrary
```