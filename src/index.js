import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './sad-dog1.jpg'
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ArticleOverview from './components/ArticleOverview';
import { Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/hacker_news_project" element={<App />}/>
            <Route path='/article-overview/:id' element={<ArticleOverview />} />
            <Route path='*' element={
                <div className='ooops'>
                    <h1 className='empty-page-msg'>Ooops! There is nothing in here...😒</h1>
                    <Link to="/hacker_news_project" ><button className='ooops-btn'>Go Back</button></Link>
                    <div className='ooops-img'>
                        <img src={logo} alt="sad-dog" />
                    </div>
                </div>
            } />
      </Routes>
    </Router>
  </React.StrictMode>
);
