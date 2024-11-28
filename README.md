> ESP

# Proyecto de App de Tareas para DGamerStudio

Esto es un poyecto de prueba. Se puede hacer uso de operaciones básicas con tareas, como añadir tareas a una lista, editar tareas existentes y eliminarlas. Es una app minimalista, la cual consiste de una lista de tareas como el componente principal, donde cada tarea muestra un título, una breve descripción y un indicador del estado: amarillo o verde.

Una tarea se añade con el botón Nueva Tarea que aparece abajo. Un pop-up aparecerá, en el cual se debe proporcionar un título requerido para crear la tarea, y una descripción opcional. Las tareas agregadas recientemente aparecerán al principio de la lista. Para editar una tarea, simplemente se clickea en la tarjeta de la tarea para actualizar. Aparecerá un pop-up, donde se puede editar tanto el título como la descripción, así como también cambiar el estado a Pendiente o Completado. El botón rojo elimina esta tarea.

Está hecha utilizando el framework [React.js](https://react.dev/) y la librería de componentes de UI [PrimeReact](https://primereact.org/). Todas las solicitudes a la API se hacen con Axios.

## Uso de la app
Hay dos formas de usar la app. La manera más sencilla es directamente desde https://tasks-app-sooty.vercel.app/.

Si se quiere iniciar la app de manera local, hay que seguir estos pasos:

### Prerequisitos
Asegurate de tener instalado:
- [Node.js](https://nodejs.org/) (versión recomendada: 16.20.2 por compatibilidad)
- [npm](https://www.npmjs.com/) (se instala con Node.js)

### Clonar el repositorio
```
git clone https://github.com/knappygd/tasks-app.git
cd tasks-app
```

### Instalar dependencias
```
npm install
```

### Iniciar
```
npm start
```

La app estara disponible en http://localhost:3000.

## Prototipo en Figma

Un sketch sencillo en Figma de la app con las diferentes pantallas/estados se puede explorar [aquí](https://www.figma.com/design/KDuZ0PhI6x0BJQod84Hjdd/TasksApp?node-id=0-1&t=YCz6TbumARHJBIu0-1).

> ENG

# Task Management App Project for DGamerStudio

This is a test-project. It has the ability to perform basic task managements, such as adding tasks to a list, editing existing tasks, and deleting them. It is a very minimal app, consisting of a task list as the main component, each task displaying a title, a short description and a status indicator: either yellow or green.

A task can be added with the Nueva Tarea button on the bottom. This will prompt a pop-up to set a task title, which is required for the task to be created, and an optional description. Newly added tasks will appear on top of the list. To edit a task, simply click on the card of the task to update. A pop-up will appear, where the title and description can be edited, as well as setting the status to either Pendiente or Completado. The red button deletes that task.

It is made using the [React.js](https://react.dev/) framework and the [PrimeReact](https://primereact.org/) UI component library. All requests are made using Axios to an API.

## Use of the app
There are two ways to use the app. The most straightforward is to directly access it at https://tasks-app-sooty.vercel.app/.

To run the app locally, follow these steps:

### Prerequisites
Make sure to have the following:
- [Node.js](https://nodejs.org/) (recommended version: 16.20.2 for compatibility)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Clone the repository
```
git clone https://github.com/knappygd/tasks-app.git
cd tasks-app
```

### Install dependencies
```
npm install
```

### Start the development server
```
npm start
```

The app will be available at http://localhost:3000.

## Figma prototype

A simple Figma project with sketches of the different screens/states of the app can be explored [here](https://www.figma.com/design/KDuZ0PhI6x0BJQod84Hjdd/TasksApp?node-id=0-1&t=YCz6TbumARHJBIu0-1).