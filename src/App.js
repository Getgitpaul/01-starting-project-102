import classes from './App.module.css';

function App() {
  return (

  <div className={classes.container}>

      <header>
        <div>

          <h1> This is Blue </h1>

        </div>

      </header>


          <section className={classes.main} >
              <h2>Green as you</h2>
          </section>


          <aside className={classes.sidebar}>
              <h3 >Yellow for the sun</h3>
          </aside>


      <footer>
          <h3>White is the new red</h3>

      </footer>
      <div className={classes.leftfooter}> Left side  </div>


      <div className= {classes.secondfooter}>
      <h4> This is Violet </h4>
      </div>
      <div className= {classes.lastthing}>
      <h5> THis is Black </h5>
      </div>
  </div>


  );
};

export default App;
