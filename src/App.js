import React from 'react';
import { Router } from '@reach/router';
import { DynamicLighting } from './DynamicLighting/DynamicLighting';
import { GenerativePalette } from './GenerativePalette/GenerativePalette';
import './App.css';

export default function App() {
  return (
    <Router>
      <DynamicLighting default path="/light" />
      <GenerativePalette path="/generative" />
    </Router>
  );
}
