import React from 'react';
import { Router } from '@reach/router';
import { DynamicLighting } from './DynamicLighting/DynamicLighting';
import { GenerativePalette } from './GenerativePalette/GenerativePalette';
import { Responsive } from './Responsive/Responsive';
import './App.css';

export default function App() {
  return (
    <Router>
      <DynamicLighting default path="/light" />
      <GenerativePalette path="/generative" />
      <GenerativePalette path="/recipe" />
      <Responsive path="/responsive" />
    </Router>
  );
}
