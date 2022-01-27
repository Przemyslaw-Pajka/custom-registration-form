import { Link } from "react-router-dom"

export const Error404 = () => (
    <>
        <h1>404 - Nie znaleziono takiej strony!</h1>
        <Link to="/">Wróć do strony głównej</Link>
    </>
)