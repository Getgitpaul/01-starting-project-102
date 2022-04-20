import classes from './App.module.css';

function App() {
  return (

  <div className={classes.container}>

      <div className={classes.blueGreenContainer}>

        <div className={classes.blueColor}>

          <h1> This is Blue </h1>

        </div>

          <div className={classes.greenAndYelloContainer}>
          <div className={classes.green} >
              <h2>Green as you</h2>
          </div>


          <div className={classes.yellow}>
              <h3 >Yellow for the sun </h3>

              </div>
          </div>

          </div>

          <div className={classes.redAndWhite}>
      <div className={classes.red}>

          <h3>White is the new red</h3>

      </div>

      <div className={classes.white}> White is Pure
       </div>

       </div>

       <div className={classes.blackAndViolet}>
      <div className= {classes.violetColor}>

      <h4> This is Violet </h4>
      </div>
      <div className= {classes.blackColor}>
      <h5> THis is Black </h5>
      </div>
      </div>

  </div>


  );
};

export default App;
