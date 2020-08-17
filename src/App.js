import React, { Suspense, lazy, Component } from 'react'
import './App.css'

const Routes = lazy(() => import('./Routes'))

class App extends Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>...Loading</div>}>
          <Routes />
        </Suspense>
      </div>
    )
  }
}

export default App
