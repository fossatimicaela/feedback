import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
     <Container>
      <Routes>
        <Route exact path="/" element={<FeedbackForm/>} />
      </Routes>
     </Container>
  );
}

export default App;
