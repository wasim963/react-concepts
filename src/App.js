import './App.css';
import Form from './components/forwardRef/Form';
import MarkdownEditor from './components/lazy/LazyComp';
import ImperativeHandleForm from './components/useImperativeHandleRef/Form';

function App() {
  return (
    <div className="App">
      <Form /><br/>
      <ImperativeHandleForm /><br/>
      <MarkdownEditor />
    </div>
  );
}

export default App;
