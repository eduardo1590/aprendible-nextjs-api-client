import Link from "next/link";
import {useState} from "react";
import {useRouter} from "next/router";

export default function BookCreate() {
  
  const router = useRouter()
  const [bookName, setBookName] = useState('')
  const [errors, setErrors] = useState([])
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(e){

    
    setSubmitting(true)
    /*if (res.ok){
      setErrors([])
      setBookTitle('')
      return router.push('/libros')
    }
      const data = await res.json()
      setErrors(data.errors)
      setSubmitting(false)
    */
  }

    return (
      <div>
        <h1>Crear Libro</h1>
        <form onSubmit={handleSubmit}>
          <input disabled={submitting} type="text"></input>
          <button disabled={submitting}>{submitting ? 'Enviando...' : 'Enviar '}</button>
          {error.title && (<span style = {{color: 'red', display: 'block'}}>{errors.title}</span>)}
        </form>
        <Link href="/libros">Lista de Libros</Link>
      </div>)
  }