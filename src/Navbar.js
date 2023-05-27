export default function Navbar() {
    return ( <nav className = "nav">
        <a href="/" className = "cuts"> Ranyecuts</a>
            <ul>
                <li className="active">
                    <a href = "/Schedule">Schedule</a>
                    
                </li>
                <li>
                    <a href = "/Faq">FAQ</a>
                </li>
            </ul>
        </nav>
    )
}