import React from 'react'
import './ArticleHeader.css'
import {Link} from 'react-router-dom'

export default function ArticleHeader() {
  return (
    <div className='story-head'>
        <div className='left-head'>
            <div className='logo'>
                  <Link to="/hacker_news_project">
                    <h3 className='logo-letter'>Y</h3>
                  </Link>
            </div>
            <h3>Hacker News</h3>
            <p>new</p> | {''}
            <p>past</p> | {''}
            <p>comment</p> | {''}
            <p>ask</p> | {''}
            <p>show</p> | {''}
            <p>jobs</p> | {''}
            <p>submit</p> | {''}
        </div>
        <div className='right-head'>
            <p>login</p>
        </div>
    </div>
  )
}