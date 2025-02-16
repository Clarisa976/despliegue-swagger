// src/components/SwaggerUIClient.jsx
"use client";
import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";

// Importamos SwaggerUI dinámicamente para que se cargue solo en el cliente
const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });

export default function SwaggerUIClient({ spec }) {
  return <SwaggerUI spec={spec} />;
}
