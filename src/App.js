import React from 'react'
import MainPage from './secondVersion/screens/mainPage'
import "./App.css";

// redux imports 
import rootReducer from './secondVersion/redux/reducers/rootReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
const store = createStore(rootReducer)


const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
}

export default App