import React from "react"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { FaQuoteRight } from "react-icons/fa"
import data from "./data"

function App() {
    // eslint-disable-next-line
    const [people, setPeople] = React.useState(data)
    const [index, setIndex] = React.useState(0)

    console.log(index)

    React.useEffect(() => {
        if (index < 0) {
            setIndex(people.length - 1)
        }
        if (index > people.length - 1) {
            setIndex(0)
        }
    }, [index, people])

    React.useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 2000)
        return () => {
            clearInterval(slider)
        }
    }, [index])

    const personArticleElements = people.map((person, personIndex) => {
        let position = "nextSlide"
        if (personIndex === index) {
            position = "activeSlide"
        }
        if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
        ) {
            position = "lastSlide"
        }

        return (
            <article className={position} key={person.id}>
                <img
                    src={person.image}
                    alt={person.name}
                    className="person-img"
                />
                <h4>{person.name}</h4>
                <p className="title">{person.title}</p>
                <p className="text">{person.quote}</p>
                <FaQuoteRight className="icon" />
            </article>
        )
    })

    return (
        <section className="section">
            <div className="title">
                <h2>
                    <span>/</span>reviews
                </h2>
            </div>
            <div className="section-center">
                {personArticleElements}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    )
}

export default App
