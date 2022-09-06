import './App.css';
import Card from './components/Card';
import Separator from './components/Separator';

function App() {


  return (
    <section className='section--container'>
      <Separator title={"MY CONNECTIONS"} bgLogo={"#42c022"} icon={true}/>
      <Card color={true}/>
      <Separator title={"MY ORGANIZATION"} bgLogo={"#fcbf36"} icon={false}/>
      <Card color={false}/>
    </section>
  )
}

export default App
