import React from 'react';
import { Router } from '@reach/router';
import { DynamicLighting } from './DynamicLighting/DynamicLighting';
import { GenerativePalette } from './GenerativePalette/GenerativePalette';
import { Responsive } from './Responsive/Responsive';
import { Directory } from './Directory';
import { GenerativeLayout } from './GenerativeLayout';
import { FlagObjectBuilder } from './FlagObjectBuilder/FlagObjectBuilder';
import './App.css';

export default function App() {
  return (
    <Router>
      <DynamicLighting path="/light" />
      <GenerativePalette path="/generative" />
      <GenerativePalette path="/recipe" />
      <Responsive path="/responsive" />
      <GenerativeLayout path="/layout" />
      <FlagObjectBuilder path="/flag" />
      <Directory default />
    </Router>
  );
}
