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

    async function handleDelete(e, bookId){
        e.preventDefaul()

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${bookId}`, {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'content-type': 'appliction/json',
            },
      
            body: JSON.stringify({
              _method: 'DELETE'
            })
          })
          if (res.ok){
            window.location.href = '/libros'
          }
    }

    return (
    <div>
        <h1>Libros</h1>
        <ul>
            {books.map(book => (
                <li key={book.id}>
                    <Link href={`/libros/${book.id}`}>
                        {book.tittle}
                    </Link>
                    {' - '}
                    <Link href={`/libros/${book.id}/editar`}>
                        Editar
                    </Link>
                    { ' - '}
                    <form onSubmit={(e) => handleDelete(e, book.id)} style={{ display: 'inline'}}>
                        <button>Eliminar</button>
                    </form>
                </li>
            ))}
        </ul>
        <Link href="/libros/crear">Crear Libro</Link>
    </div>
    )
  }