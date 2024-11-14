import { useEffect, useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(1) //state untuk count disetting 1
  const [article, setArticle] = useState("") //state article disetting kosong

  function prevPage () {
    setCount(count - 1)
  }
  function nextPage () {
    setCount(count + 1)
  }

  useEffect(() => {
    fetch('https://dummyjson.com/posts/' + count)
    .then(res => res.json()) // res itu respon, trs respon nya kita jadiin data pake format json
    .then(data => setArticle(data)) // hasil ambil/ngefetch kita tampung pake variable data. supaya datanya bisa di pake, di setting di setArticle
  }, [count])
  // [count]) kalo di isi count, tiap kalo nilai count berubah, useeffect nya ke reload
  // []) kalo kosong, dia reload pas pertama kali page di buka aja, jadi kalo nilai count berubah nih. yg diliat tetep count = 1.
  // sesuai dengan apa yg kita setting state pertama nya useState(1)

  return (
    <>
      <main>
        <header>
          <h6>{count}</h6>
        </header>
        <button onClick={prevPage} disabled={count == 1} className='mr-4'>Prev Page</button>
        <button onClick={nextPage}>Next Page</button>
        <article className='py-7'>
          <h3 className='text-3xl font-bold'>{article.title}</h3>
          <p className='w-[50%] block m-auto'>{article.body}</p>
        </article>
      </main>
    </>
  )
}

export default App
