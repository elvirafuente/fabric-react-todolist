import React from 'react';
import './App.css';
import { loadTheme } from 'office-ui-fabric-react';
import AdderTask from './components/AdderTask';
import FilterList from './components/FilterList';
import TaskList from './components/TaskList';
import Summary from './components/Summary';


export default function ToDoApp() {

  loadTheme({
    palette: {
      themePrimary: '#00a8b4',//color principal
      themeLighterAlt: '#eff6fc',
      themeLighter: '#deecf9',
      themeLight: '#c7e0f4',
      themeTertiary: '#71afe5',
      themeSecondary: '#2b88d8',
      themeDarkAlt: 'red',// botones Hover
      themeDark: 'red', //iconos/checkbox hoover
      themeDarker: '#004578',
      neutralLighterAlt: '#f8f8f8',
      neutralLighter: '#f4f4f4',//background hover
      neutralLight: '#eaeaea',
      neutralQuaternaryAlt: '#dadada',
      neutralQuaternary: '#d0d0d0',
      neutralTertiaryAlt: '#c8c8c8',
      neutralTertiary: '#c2c2c2',
      neutralSecondary: '#858585',
      neutralPrimaryAlt: '#4b4b4b',
      neutralPrimary: '#333333',
      neutralDark: '#272727',
      black: '#1d1d1d',
      white: '#ffffff'
    }
  });

  return (
    <div>
      <h1>
        ToDos
      </h1>
      <AdderTask />
      <FilterList />
      <TaskList />
      <Summary />
    </div>
  );
}
