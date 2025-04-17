// @flow
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';

const container = document.getElementById('react-root');

if (!container) {
    throw new Error('Could not find react-root element');
}

const root = createRoot(container);

if (root !== null) {
    root.render(<App />);
}
