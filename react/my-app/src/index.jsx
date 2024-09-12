import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Crear una raíz.
const root = createRoot(document.getElementById('root'));

// Renderizar el componente App.
root.render(
  <App />
);
