
import { Aside, Btn } from "./components"
import { BtnIcon } from "./components/button"
import { DashboardIcon } from "./icons"
import { Router } from "./routes/Route"
import { ContainerSide, ThemeModeContainer } from "./store/features"





function App() {

  return (
    <ThemeModeContainer >
       <Router />
      
    </ThemeModeContainer>
  )
}

export default App
