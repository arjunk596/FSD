import './App.css'
import UserCard from './components/UserCard'
import modi from './assets/modi.jpeg'
import modi1 from './assets/modi1.jpeg'
import modi2 from './assets/modi2.jpeg'
import ajit from './assets/ajit.jpeg'
import bjp from './assets/bjp.jpeg'
import ncp from './assets/ncp.jpeg'
import rahul from './assets/rahul.jpeg'
import congress from './assets/congress.jpeg'

function App() {
  return (
    <div className="container">
      <UserCard name="Modih 1" image={modi} cardImage={bjp} description="Angena Ghatram, Nayane Vaktram" />
      <UserCard name="Modih 2" image={modi1} cardImage={bjp} description="Nyayane Rajyam, Lavdenya Bhojyam" />
      <UserCard name="Modih 3" image={modi2} cardImage={bjp} description="MODIH MODIH MODIH MODIH MODIH MODIH" />
      <UserCard name="Ajit Dada" image={ajit} cardImage={ncp} description="Heavenly Mention...Sympathy ke liye ek vote!!" />
      <UserCard name="Pappu" image={rahul} cardImage={congress} description="Ek vote mujhe bhi dedo guyzzzz!!!" />

    </div>
  )
}

export default App
