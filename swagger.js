// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Actividad de despliegue con Swagger",
      version: "1.0.0",
      description: "Documentación de la API para el ejercicio de  Swagger de despliegue",
    },
  },
  apis: ["./src/app/api/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
