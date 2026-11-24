import './App.css'
import Background from './components/Background.tsx'
import Header from './components/Header/Header.tsx'
import Homepage from './pages/Homepage.tsx'

function App() {
    return (
        <div className='app'>
            <Background />
            <Header />
            <Homepage />
        </div>
    )
}

export default App
