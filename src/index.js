import React from 'react';
import { createRoot } from 'react-dom/client'
import { App } from './App';

const appElement = document.getElementById('app');
createRoot(appElement).render(<App/>)