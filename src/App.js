import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';

function App() {

  return (
        <Router>
            <div className="App">
                <Header /> 
                {/* 헤더는 모든 페이지에 나와야 하기 때문에 헤더 다음 부분을 Routes로 감싸준다 */}        
                <Routes>  
                    <Route path="/" element={<DayList />} />
                    <Route path="/day/:day" element={<Day />} />
                    
                    {/* 지정되지 않은 모든 경로에 대해 EmptyPage를 렌더링 */}
                    <Route path="*" element={<EmptyPage />} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;
