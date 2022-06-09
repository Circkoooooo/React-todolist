import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './layout/Header/Header'
import Content from './layout/Content/Content'
import './index.css'
import './styles/layout/layout.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='container'>
      <Header></Header>
      <Content></Content>
    </div>
  </React.StrictMode>
)
