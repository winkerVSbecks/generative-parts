import React from 'react';
import { Router, Link } from '@reach/router';
import { DynamicLighting } from './DynamicLighting/DynamicLighting';
import { ControlPanel } from './ControlPanel/ControlPanel';
import './App.css';

export default function App() {
  return (
    <Router>
      <DynamicLighting default path="/light" />
      <ControlPanel path="/control-panel" />
    </Router>
  );
}
