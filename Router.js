import React from "react";
import {Scene, Router, ActionConst} from "react-native-router-flux";

import Home from "./src/COMP/Home"
import Innovar from "./src/COMP/Innovar"
import Involucrar from "./src/COMP/Involucrar";
import Moldear from "./src/COMP/Moldear";
import Lograr from "./src/COMP/Lograr";


const RouterDOC=()=>{
    return (
        <Router>
            <Scene>
                <Scene
                key="Home"
                component={Home}
                hideNavBar={true}
                initial
                type={ActionConst.RESET}
                />
                <Scene
                key="Innovar"
                component={Innovar}
                hideNavBar={true}
                />
                <Scene
                key="Involucrar"
                component={Involucrar}
                hideNavBar={true}
                />
                <Scene
                key="Moldear"
                component={Moldear}
                hideNavBar={true}
                />
                <Scene
                key="Lograr"
                component={Lograr}
                hideNavBar={true}
                />
                

                
            </Scene>
        </Router>
    )

}

export default RouterDOC;