import './App.css';
import Message from './components/Message';

function App() {
  const text = 'React is greate!!!'
  
  return (
    <>
      <h2>Hello, React</h2>
      <Message text={text}></Message>
    </>
  )
}

export default App;
