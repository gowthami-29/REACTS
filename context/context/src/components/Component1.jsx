
import Component2 from "./Component2";

import {  AppContextProvider } from "./AppContext"

const Component1=()=>{
    return(
        <AppContextProvider><Component2/></AppContextProvider>
    )
}
export default Component1;