import Link from "next/link";

export async function getStaticProps(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`)
    
    const data = await res.json()

    //console.log(data)
    return {
        props: {
            books: []
        }
    }
}
export default function BookList({ books }) {
    return (
    <div>
        <h1>Libros</h1>
        <ul>
            {books.map(book => (
                <li key={book.id}>
                    <Link href={`/libros/${book.id}`}>
                        {book.tittle}
                    </Link>
                </li>
            ))}
        </ul>
        <Link href="/libros/crear">Crear Libro</Link>
    </div>
    )
  }