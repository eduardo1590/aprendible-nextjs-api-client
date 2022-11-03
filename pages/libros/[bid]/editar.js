import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";

export async function getServerSideProps({params}){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${params.bid}`)
  const data = await res.json()

  return {
    props: {
      book: data
    }
  }
}

export default function BookEdit({book}) {
  
  const router = useRouter()
  const [bookTitle, setBookTitle] = useState(book.title)
  const [errors, setErrors] = useState([])
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    setSubmitting(true)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${book.id}`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'appliction/json',
      },

      body: JSON.stringify({
        title: bookTitle,
        _method: 'PATCH'
      })
    })
    if (res.ok){
      setErrors([])
      setBookTitle('')
      return router.push('/libros')
    }
      const data = await res.json()
      setErrors(data.errors)
      setSubmitting(false)
    
  }

    return (
      <div>
        <h1>Editar Libro</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={(e)=> setBookTitle(e.target.value)} value={String(bookTitle)} disabled={submitting} type="text"></input>
          <button disabled={submitting}>{submitting ? 'Enviando...' : 'Enviar '}</button>
          {error.title && (<span style = {{color: 'red', display: 'block'}}>{errors.title}</span>)}
        </form>
        <Link href="/libros">Lista de Libros</Link>
      </div>)
  }