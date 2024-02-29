import './styles/App.css';
import { Provider } from 'react-redux';
import { store, NavConnected, MainConnected } from './redux/StoreConnections.js';
import React from 'react';

export default class App extends React.Component
{
   render()
   {
      return (
         <Provider store={store}>
               <NavConnected />
               <MainConnected />
         </Provider>
      )
   }
}