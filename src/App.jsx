import Header from './component/Header'
import OverviewSection from './component/OverviewSection'

import './App.css'
import Form from './component/Form'
import SearchSection from './component/SearchSection'



function App() {

  return (
    <>
      <Header />
      <main>
        <OverviewSection/>
        <Form/>
        <SearchSection/>
      </main>
   

    </>
  )
}

export default App
