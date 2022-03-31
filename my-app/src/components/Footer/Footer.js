import './Footer.css'

function Footer () {
    const info = [{
        year: 'Мы на рынке стран СНГ с 2002 года',
        order: 'Заказы по электронной почте и через сайт принимаются круглосуточно',
        mail: "https://www.yokohama.ru/"}
    ]
    const users = [
        {position: 'Директор', name: 'Анатолий Савицкий', phone: '+375256402233'},
        {position: 'Менеджер', name: 'Анастасия Карпова', phone: '+375255782020'},
        {position: 'Техотдел', name: 'Дмитрий Климов', phone: '+375255782020'}
    ]
    return (
        <footer>
            {info.map((item) => (
                    <div key={item} className="footer__info">
                        <div className="footer__item">{item.year}</div>
                        <div className="footer__item">{item.order}</div>
                        <a href={item.mail} className="footer__link">{item.mail}</a>
                    </div>
            ))}
            <div className="footer__contacts">
                {users.map((item) => (
                    <div key = { item } className="footer__contact">
                        {item.position}  {item.name} : {item.phone}
                    </div>
                ))}  
            </div>
            
            
        </footer>
    )
}
export default Footer;

