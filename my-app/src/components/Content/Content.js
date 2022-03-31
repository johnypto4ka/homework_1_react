import './Content.css'

function Content() {
    const data = [
        {id: 0, title: 'Yokohama BluEarthXT', text: 'Летние шины Yokohama для легковых автомобилей', price: '500$'},
        {id: 1, title: 'Yokohama ADVAN A005', text: 'Шины ADVAN для спортивных автомобилей', price: '900$'},
        {id: 1, title: 'Yokohama PARADA SPEC-X', text: 'Шины Yokohama для кроссоверов и внедорожников', price: '640$'}
    ]
    return (
        <div className="content">
            {data.map((item) => (
                <div key = { item } className="content__item">
                    <h2 className="item_title">{item.title}</h2>
                    <p className="item_text">{item.text}</p>
                    <div className="item_price">стоимость: {item.price}</div>
                    <button className="item_btn">Подробнее</button>
                </div>
            )) }    
        </div>
    )
}

export default Content;