function Cards({ titulo, parrafo, imagen }) {

    return (
        <div>
            <h1>{titulo}</h1>
            <p className='cardsInt'>{parrafo}</p>
        </div>
    )
}
export default Cards