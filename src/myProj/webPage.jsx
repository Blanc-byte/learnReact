import reactLogo from '../assets/react.svg'
import './css/webPage.css'

export function Navigation(){
    return (
        <>
            <header className="header">
                <img src={reactLogo} alt="logo" />
                <nav className="navigation">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>UPLOAD</li>
                </nav>
            </header>
        </>
    )
}