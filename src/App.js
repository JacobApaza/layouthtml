function App() {
  return (
    <div>
      <header className="text-center p-2 border border-primary bg-primary text-white">
        <h2>XOXE LA TAREA 3</h2>
      </header>
      
      <section> 
        <nav className="float-start w-25 border border-primary p-5">
          <ul>
            <li><a href="index.hmtl">Londres</a></li>
            <li><a href="index2.html">Libano</a></li>
            <li><a href="index3.html">Letonia</a></li>
          </ul>
        </nav>

        <article className="float-start w-75 border border-primary p-5">
          <h1>London</h1>
          <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
          <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
        </article>
      </section>
      <footer style={{position:"absolute", bottom:0 }} className="text-center w-100 border border-primary bg-primary text-white">
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
