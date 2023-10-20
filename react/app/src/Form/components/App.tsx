import React from 'react';
import UncontrolledForm from './UncontrolledForm';
import ControlledForm from './ControlledForm';

export default function App() {
  return (
    <div>
      <ControlledForm />
      <br />
      <UncontrolledForm />
    </div>
  );
}
