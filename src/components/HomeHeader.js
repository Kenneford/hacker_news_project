import React from 'react'
import './HomeHeader.css'
import { useState } from 'react'

export default function HomeHeader({searchArticles, readArticles, setSearchArticle}) {
    // const [searchArticle, setSearchArticle] = useState()
  return (
    <div className='mainHeader'>
        <div className='logoH'>
            <h2>H</h2>
        </div>
        <div className='logoText'>
            <p className='search-text'>Search</p>
            <p>Hacker News</p>
        </div>
        <div className='form-wrap'>
            <form className='search-form'>
                <input type="text" 
                value={searchArticles}
                onChange={(e)=> setSearchArticle(e.target.value)}
                placeholder="Search stories by title, url or author" 
                id='search-input'/>
            </form>
            <div className='search-algolia'>
                <p className='searchBy'>Search by</p>
                <p className='algolia'>algolia</p>
            </div>
            <button 
            onClick={readArticles}
            className='search-btn'>Search</button>
        </div>
        <div className='settings'>
        <i className="fa-regular fa-stopwatch"></i>
        <p>Settings</p>
        </div>
    </div>
  )
}
