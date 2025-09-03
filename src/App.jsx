import { useState } from 'react'
import './App.css'
import hellsing from './assets/hellsing.jpg'
import HP from './assets/hp.jpg'
import HxH from './assets/HxH.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header></header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={hellsing} alt="" className="img-card" />
              <h2 className="titulo-card">Coleção completa Hellsing</h2>
              <p className="desc">Coleção de 1 á 10 (todos os volumes) </p>
              <p className="preco">R$ 499,99</p>
              <div className="avaliacao"> ★ ★ ★ ★ ☆</div>
             
            </div>
          </a>

          {/* Produto 2 */}
          <a header="#" className="img-card">
          <div className="card">
            <img src={HP} alt="" className="img-card" />
            <h2 className="titulo-card">Coleção completa Hell's paradise</h2>
            <p className="desc">todos os volume 1 a 13</p>
            <p className="preco">R$ 250,00</p>
            <div className="avaliacao"> ★ ★ ★ ★ ★</div>
            
          </div>
          </a>
          {/* Produto 3 */}
          <a header="#" className="link-card">
            <div className="card">
              <img src={HxH} alt="" className="img-card" />
              <h2 className="titulo-card">coleção semi-nova Hunter x Hunter</h2>
              <p className="desc">Coleçao com 1 ano de vida (estão como novos)</p>
              <p className="preco">R$(2̶.̶2̶5̶0̶,̶0̶0̶) 2.025,00</p>
              <div className="avaliacao"> ★ ★ ★ ☆ ☆</div>
              <div className="off">- 10%</div>
            </div>
          </a>
        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/U3Vtf5r9kfU?si=apB_3cMt6mw6zFuV" title="YouTube video player" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>
        <footer>
<img src="" alt="" className="logo footer" />

<div className="social-icons">

  <div className="icon">
    <img src="" alt="" id="instagran" />
  </div>

  <div className="icon">
    <img src="" alt="" id="discord" />
  </div>

  <div className="icon">
     <img src="" alt="" id="X" />
  </div>
  
  <div className="icon"></div>
  <img src="" alt="" id="youtube  " />
</div>
        </footer>
      </main>
    </>
  )
}

export default App
