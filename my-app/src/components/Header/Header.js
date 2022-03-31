import './Header.css'

function Header() {
    const links = [ 'Home', 'Tires', 'Autosport' ,'News','About Us', 'Contacts' ]

    return (
        <div className="header">
            <div className="header__logo"></div>
            <ul className="header__menu">
                { links.map((item) => {
                    return <li key={item}> { item } </li>
                 }) }
            </ul>
            
        </div>
    )
}

export default Header;