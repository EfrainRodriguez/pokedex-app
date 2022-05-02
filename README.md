# Pokedex App

Este proyecto consiste en una aplicación web creada para los amantes de la saga animada de Pokemon, la cual les permite visualizar una lista de Pokemons y los detalles asociados a cada uno de ellos tales como habilidades, tipos, stats, imágens, entre otras cosas.

La aplicación está basada en [React js](https://reactjs.org/), versión `18.1.0`, y usa tecnologias como [Material UI](https://mui.com/) y [Redux Toolkit](https://redux-toolkit.js.org/).

Una versión demo online ha sido desplegada en la plataforma de [Vercel](https://vercel.com/) puede ser accesada desde este [link](https://pokedex-app-drab.vercel.app/).

Algunos detalles sobre el desarrollo de aplicación son descritos a continuación:

## Funcionalidades :clipboard:

- Lista de Pokemons usando hero cards que presentan los datos más relevantes de cada Pokemon como nombre, imagen, tipos, peso y altura.
- La lista posee paginación para controlar la página que se desea visualizar y la cantiad de Pokemons por cada página.
- Posee un campo para filtrar Pokemons por el nombre o por el ID de un Pokemon específico.
- Cada hero card es clicable permitiendo que el usuario sleccione un Pokemon y pueda acceder a una modal con más detalles.
- La modal presenta 3 secciones dispuesta en Tabs: 1) la sección de informaciones sobre las principales caracteristicas del Pokemon (peso, altura, tipos, habitat, habilidades, género, etc); 2) la sección de cadena de evolución que presenta cada uno de los Pokemons dentro la cadena de evolución del Pokemon seleccionado, donde cada uno de dichos Pokemons presentados también son clicables permitiendo visualizar su información; 3) finalmente, la tercera sección presenta datos eatdisticos relacionados al Pokemon en la forma de barras de progreso circulares.
- Adicionalmente la aplicación posee modos de tema light y dark.

## Estructura del projecto :hammer:

Como fue mencionado antes, esta aplicación está contruida con [React js](https://reactjs.org/) versión `18.1.0`. Como framework de estilos fue usada la biblioteca de [Material UI](https://mui.com/), la cual posee una serie de componentes pre-estilizados que premitem rápidamente construir interfaces gráficas modernas e de alto performance. También ha sido usado [Redux Toolkit](https://redux-toolkit.js.org/) como herramienta de gerenciamiento de estado global de la aplicación para los componentes que eventualmente requieren compartir información y que de alguna manera se encuantran distantes en el arbol del DOM. Redux Toolkit es una versión optimizada de Redux muy sencilla de usar y que ahorra código de boilerplate.

Como parte del setup del projecto se han agregado las configuraciones de [Eslint](https://eslint.org/) y [Prettier](https://prettier.io/) para estandarización y formatación de código dentro del projecto. Las reglas definidas se encuantran en los archivos `.eslintrc.json` y `.prettierrc.json` en la raiz del proyecto.

La imagen abajo muestra la estrutura del projecto. Las páginas o containers son componentes de alto nivel que pueden accesar directamente al estado global de Redux de la aplicación y ejecutar las llamadas de red. Los componentes por su parte sólo manipulan su estado local directamente mas no tienen accesso directo al estado global. La información es pasada desde las paginas a los componentes via `props`.

Las páginas y components se alimentan de la configuración del tema visual usando Material UI. Todas las confgiguraciones referentes al tema se encuantran en la carpeta de `theme` en la raiz del proyecto.

La configuracion del estado global con Redux se encuantra en la carpeta `redux`, donde se crea la store y los respectivos slices de cada tipo de dato manejado dentro de la aplicación (por ejemplo, pokemons).

Las llamadas de red son realizadas a través de una instancia de cliente `axios`. Las llamadas de red a la API de Pokemon son hechas via cliente axios y las respuestas exitosas son almacenadas en el estado global ejecutando funciones `actions` de redux que actualizan el estado a través de los reducers.

![Arq](../pokedex-app/src/assets/images/arq.png)

## Instalación :arrow_down:

El repositorio del proyecto puede ser encontrado [aqui](https://github.com/EfrainRodriguez/pokedex-app). Puede bajar o clonar el proyecto usando el comando `clone` de Git:

```console
git clone https://github.com/EfrainRodriguez/pokedex-app.git
```

Para instalar el proyecto necesita haber instalado `Node js` y `npm` ou `yarn` en su computador. Si es necesário baje Node js desde [aqui](https://nodejs.org/en/).

Ejecute el acomando a continuación para instalar la solución:

```console
yarn
```

alternativamente:

```console
npm install
```
Despues de haber instalado la solución y sus dependencias use el comando a continuación para ejecutarla:

```console
yarn start
```

o

```console
npm start
```

La aplicación se abre por defecto de la url local: [http://localhost:3000](http://localhost:3000).

## Deployment :rocket:

Una versión demo ha sido desplegada usando o serviço de hosting gratuito de [Vercel](https://vercel.com/), la cual puede ser accesada desde este [link](https://pokedex-app-drab.vercel.app/).