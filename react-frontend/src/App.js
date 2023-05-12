import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentComponent from './components/ListStudentComponent';
import AddStudentComponent from './components/AddStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent></HeaderComponent>
      <div className='container'>
        <Routes>
          <Route exact path='/' Component={ListStudentComponent}></Route>
          <Route path='/students' Component={ListStudentComponent}></Route>
          <Route path='/add-student' Component={AddStudentComponent}></Route>
          <Route path='/edit-student/:id' Component={AddStudentComponent}></Route>
          <Route path='/view-student/:id' Component={ViewStudentComponent}></Route>
        </Routes>
      </div>
      <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}

export default App;
