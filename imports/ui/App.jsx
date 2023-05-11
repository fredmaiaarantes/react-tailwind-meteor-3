import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div className="p-4">
    <h1 className="text-3xl font-bold text-indigo-800">
      Meteor 3.0 + React + Tailwind
    </h1>
    <Hello/>
    <Info/>
  </div>
);
