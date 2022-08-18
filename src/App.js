// import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/headerComponents/Header';
import { Route, Switch } from "react-router-dom";
import './index.css';
import { AppMain } from './components/microComponents/threejs/AppMain';


    function App(props) {
    
      return (
        <React.Fragment>
        <div className="AppWra grid grid-flow-row
                        relative 
                         h-100vh w-100vw bg-opacity-10
                         m-0 p-0
                       "
        >
                 <div  className="headerWraper fixed w-screen flex  flex-row flex-wrap top-0 
                          AppWrappr m-0 p-0  
                          w-screen 
                          h-[30px] md:h-[80px] lg:h-[80px] xl:h-[80px] xxl:h-[80px]
                           z-10 bg-zinc-200 bg-opacity-20 drop-shadow-xl
                          "
                  >
                    <Header/>
                 </div>

                 <Switch> 
                                 
                        <Route 
                           path="/"
                           render={() => <AppMain /> }
                        />
                  </Switch>

                  <div  className="fixed w-full flex justify-center bottom-0 
                            AppWrapp left-0 right-0 m-0 p-0 bg-teal-400m
                            z-10 bg-zinc-200m bg-opacity-20
                          "
                   >
                     -
                 </div> 
            </div>
      </React.Fragment>
      );
    }
    
    export default App;
    
    
    
    
    





