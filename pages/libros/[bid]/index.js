import Link from "next/link";

export async function getStaticProps({ params }){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${params.bid}`)
    
    const data = await res.json()

    //console.log(data)
    return {
        props: {
            book: data
        }
    }
}

export async function getStaticPaths(){
    const res = await fetch('http://localhost/api/books/')
    
    const data = await res.json()

    //console.log(data)
    return {
        paths: data.map(book => ({
            params: {bid: String(book.id)}
        })),
        fallback: false
    }
}

export default function BookDetail({ book }) {
    return (
        <div>
            <h1>{book.title}</h1>
            <Link href="/libros">Lista de libros</Link>
        </div>
    )
  }