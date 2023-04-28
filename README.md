# Bartender Dashboard Frontend

Este proyecto es la parte frontend de la aplicación Bartender Dashboard, que ayuda a los bármanes a llevar un registro de las bebidas servidas, los clientes atendidos y a gestionar las órdenes.

## Estructura del proyecto

El proyecto está estructurado de la siguiente manera:

src/
├───__tests__/
├───components/
│ ├───App/
│ ├───Configuracion/
│ ├───Dashboard/
│ ├───Mesa/
│ └───Progress-bar/
├───context/
├───types/
├───index.css
├───index.tsx
├───logo.svg
├───react-app-env.d.ts
├───reportWebVitals.ts
└───setupTests.ts


## Componentes principales

- `App`: El componente principal y punto de entrada de la aplicación. Este componente organiza los componentes principales en un contenedor y los envuelve con el componente `AppProvider` para acceder al contexto de la aplicación.
- `Dashboard`: Muestra información sobre el estado del barman y las bebidas servidas.
- `Mesa`: Representa una vista de las mesas del bar y las órdenes asociadas con ellas.
- `Configuracion`: Permite al usuario modificar la configuración de la aplicación, como el tiempo de preparación de las bebidas y el número máximo de elementos en la lista de bebidas servidas.

## Cómo ejecutar el proyecto

1. Asegúrate de tener Node.js y npm instalados en tu sistema.
2. Clona este repositorio o descarga el código fuente.
3. Ejecuta `npm install` en la carpeta del proyecto para instalar todas las dependencias.
4. Ejecuta `npm start` para iniciar el servidor de desarrollo. La aplicación se abrirá automáticamente en tu navegador web en `http://localhost:3000`.

## Cómo ejecutar las pruebas

Ejecuta `npm test` en la carpeta del proyecto para ejecutar las pruebas de la aplicación.

## Cómo construir el proyecto para producción

Ejecuta `npm run build` en la carpeta del proyecto. Esto creará una versión optimizada de la aplicación en la carpeta `build`.

## Licencia

Este proyecto se encuentra bajo la licencia ISC.
