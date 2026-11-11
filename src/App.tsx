import './App.css'
import Background from './components/Background.tsx'
import Header from './components/Header.tsx'
import Gradient_top from './components/Gradient_top.tsx'

function App() {
    return (
        <div className='app'>
            <Background />
            <Gradient_top/>
            <Header/>
        </div>
    )
}

export default App