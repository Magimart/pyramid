import React from "react";
import { useHistory } from 'react-router-dom';


const Header =  () => {


    const history = useHistory();

    const handleRoute =() => {
        history.push("/");
    }

    
             return (
                    <div className="header relative w-full  flex-wrap h-full flex px-2 flex-row justify-between items-center">
                        <div className="brandWrapper bg-blackp w-1/2 h-full flex flex-row  justify-start">
                            <div className="homeIcon flex w-16 justify-center h-full items-center ">
                                <button className="semibold bg-gray-400 
                                                 h-[30px] md:h-[50px] lg:h-[50px]  xl:h-[50px]  xxl:h-[50px]   
                                                 w-[34px] md:w-[50px] lg:w-[50px] xl:w-[50px] xxl:w-[50px]
                                                 px-0 xl:px-2 xl:px-2 xl:px-2 xl:px-2
                                                 md:py-2  lg:py-2  xl:py-2  xxl:py-2 
                                                 text-2xl"
                                >
                                    🏠
                                </button> 
                            </div>
                        </div>
                        <div className="brandWrapper bg-blacku w-1/2 h-full flex flex-row  justify-end">
                            <div className="homeIcon">
                                <h2 className="font-bold text-2xl p-.05 bg-green-900">
                                  {/* resver */}
                                </h2>   
                            </div>
                            <div className="homeIcon relative top-0 flex w-28 justify-center h-full items-center ">
                                <h2 className="text-lg semibold text-yellow-500 ">Points: <span className="bg-red-400 p-2">00</span></h2>
                            </div>
                        </div>
                        
                </div>
    )
  }

  export default Header;
 
