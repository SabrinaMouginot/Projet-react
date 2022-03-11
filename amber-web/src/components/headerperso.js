import '../assets/headerperso.css'
import LogoReact from '../assets/logoReact.png'

function headerperso() {
    return (
        <div className="headerperso">
            <p>Head</p>
            <img src={LogoReact} className="Logo-header" alt="Logo pour le projet React" />
        </div>
    
    )
}

export default headerperso