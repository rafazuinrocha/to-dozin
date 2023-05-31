import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.Jsx'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import TodayPage from './pages/TodayPage'
import CalendarPage from './pages/CalendarPage'
import AllPage from './pages/AllPage'
import PersonalList from './pages/PersonalList'
import NewList from './pages/NewList'

const router = createBrowserRouter([
  {
path: '/', 
element: <TodayPage/>
}, {
  path: '/calendar', 
element: <CalendarPage/> //estrutura para criar novas páginas - roteamento
}, {
  path: '/all',
  element: <AllPage/>
},{
  path:'/list/personal',
  element: <PersonalList/>
},{
  path: '/list/newlist',
  element: <NewList/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

    <App />
  </React.StrictMode>,
)
