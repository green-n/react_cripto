import logo from './logo.svg';
import './App.css';

function App() {
  const RussianAlphavetArray = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split()
  // let word = prompt("")

  const deletesimilarletters =(input)=>{
    let temp = []
    temp[0] = input[0]
    for(let i = 0;i<input.length;i++){
      let counter = 0
      for(let j=0;j<temp.length;j++){
        if(temp[j]==input[i]){
          console.log("works")
          counter++
        }
      }
      if(counter == 0)temp.push(input[i])
    }
    return temp
  }
  let newalphabet = deletesimilarletters(deletesimilarletters("программирование") + "абвгдеёжзийклмнопрстуфхцчшщъыьэюя")
  for(let i = 0; i<newalphabet.length;i++){
    if(newalphabet[i]==","){newalphabet.splice(i,1)}
  }

  const adjustAlphabet = (adjust,alphabet) => {
    let temp = []
    for(let i = 0; i < alphabet.length;i++){
      temp[i] = alphabet[i-adjust]
      if(temp[i]==undefined){
        temp[i]= alphabet[i - adjust + alphabet.length]
      }
    }
    return temp
  }

  return (
    <div className="App">
      <h2>{RussianAlphavetArray}</h2>
      <h2>{newalphabet}</h2>
      <h2>{adjustAlphabet(9,newalphabet)}</h2>
    </div>
  );
}

export default App;
