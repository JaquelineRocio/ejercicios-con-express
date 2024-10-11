# API de Agenda Telefónica

Este proyecto es una API Restful construida con Node.js, Express y TypeScript para gestionar una agenda telefónica. La API permite realizar operaciones CRUD (crear, leer, actualizar y eliminar) sobre los contactos en la agenda.

## Tecnologías utilizadas

- Node.js
- Express
- TypeScript
- Morgan (para el registro de solicitudes)
- CORS (para soporte de solicitudes de origen cruzado)

## Requisitos

- Node.js (versión 18 o superior)
- npm (versión 8 o superior)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone [<URL_DEL_REPOSITORIO>](https://github.com/JaquelineRocio/ejercicios-con-express.git)
    ```
Navega al directorio del proyecto:

 ```bash
cd agenda-telefonica
```
Instala las dependencias:


 ```bash
npm install
 ```
## Scripts
npm run dev: Ejecuta la aplicación en modo de desarrollo utilizando nodemon.
npm run build: Compila el proyecto TypeScript a JavaScript.
npm start: Inicia la aplicación utilizando el código compilado en la carpeta dist.

## Uso
1. Inicia la aplicación en modo de desarrollo:
 ```bash
npm run dev
 ```

2. La API estará disponible en http://localhost:3001.

## Endpoints
1. Obtener todas las personas
URL: /api/persons

Método: GET

Descripción: Devuelve una lista de todas las personas en la agenda telefónica.

Respuesta exitosa: Código de estado 200 y un array de objetos Person.

 ```json

[
  {
    "id": 1,
    "name": "Juan Perez",
    "number": "99123456"
  },
  {
    "id": 2,
    "name": "Maria Ramos",
    "number": "925323523"
  }
]
 ```
2. Obtener información de la agenda
URL: /info
Método: GET
Descripción: Devuelve la cantidad de contactos en la agenda y la fecha actual.
Respuesta exitosa: Código de estado 200 y un mensaje en formato HTML.
3. Obtener una persona por ID
URL: /api/persons/:id

Método: GET

Descripción: Devuelve la información de la persona cuyo ID coincide con el parámetro :id.

Parámetros de ruta:

id (número): ID de la persona a buscar.
Respuesta exitosa: Código de estado 200 y un objeto Person.

Respuesta de error: Código de estado 404 si la persona no se encuentra.

 ```json
{
  "error": "Person not found"
}
 ```
4. Eliminar una persona
URL: /api/persons/:id
Método: DELETE
Descripción: Elimina la persona cuyo ID coincide con el parámetro :id.
Parámetros de ruta:
id (número): ID de la persona a eliminar.
Respuesta exitosa: Código de estado 204 sin contenido.
5. Crear una nueva persona
URL: /api/persons

Método: POST

Descripción: Crea una nueva persona en la agenda telefónica.

Cuerpo de la solicitud:

 ```json
{
  "name": "Nuevo Contacto",
  "number": "123456789"
}
 ```
Respuesta exitosa: Código de estado 201 y el objeto Person creado.

 ```json

{
  "id": 5,
  "name": "Nuevo Contacto",
  "number": "123456789"
}
 ```
Errores posibles:

Código de estado 400 si falta el nombre o el número.

 ```json
{
  "error": "Name or number is missing"
}
 ```
Código de estado 400 si el nombre ya existe.

 ```json
{
  "error": "Name must be unique"
}
 ```

## Middleware
CORS: Configurado para permitir solicitudes de origen cruzado.
Morgan: Configurado para registrar las solicitudes HTTP en la consola. Además, se ha extendido para registrar el cuerpo de las solicitudes POST.
express.json(): Middleware para analizar el cuerpo de las solicitudes JSON.
Ejemplo de registro con Morgan
Morgan está configurado para registrar las solicitudes en el formato tiny y, para las solicitudes POST, muestra el cuerpo de la solicitud:

```bash

POST /api/persons 201 127 - 4.567 ms {"name":"Nuevo Contacto","number":"123456789"
```
