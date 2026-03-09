# Memotest

La aplicación permite jugar con diferentes temas de tarjetas que se cargan dinámicamente desde una API REST externa, lo que permite agregar o modificar los temas sin cambiar el código fuente.

## Arquitectura

Patrón de arquitectura **MVC** (Model-View-Controller):

### Controllers
- `cardController` - Lógica de las tarjetas (voltear, emparejar)
- `gameBoardController` - Control del tablero de juego
- `iconPacksController` - Control de cambio de temas

### Views
- `cardView` - Renderizado de tarjetas
- `gameBoardView` - Renderizado del tablero
- `iconPacksView` - Renderizado de selección de temas
- `userWonSingView` - Vista de victoria

### Models/State
- `gameState` - Estado global del juego
- `iconInterface` - Definición de tipos de iconos

### Commands
- `gameCommands` - Comandos del juego

## API

Los temas se cargan desde: **https://memotest-api.vercel.app**

**Endpoints disponibles**:
- `/api/all` - Retorna todos los decks con sus 8 cartas.
- `/api/list` - Retorna la lista de decks (solo previsualización).

**Repositorio de la API**: [https://github.com/CiroMirkin/memotest_API](https://github.com/CiroMirkin/memotest_API)

## Comandos

> Abre una terminal dentro de la carpeta del proyecto.

Primero instala las dependencias del proyecto:

```
npm i
```

Puedes iniciar el servidor de desarrollo con:

```
npm run dev
```

Puedes construir el proyecto con:

```
npm run build
```

## Notas de desarrollo

### CORS

La API de producción (`memotest-api.vercel.app`) tiene restricciones CORS que impiden fetch desde `localhost`.

**Soluciones**:
1. Usar una extensión de navegador como "CORS Unblock" durante desarrollo
2. Ejecutar la API localmente clonando el repositorio y corriendo `npm run dev` en `localhost:3000`
