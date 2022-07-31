import React from 'react'
import {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
import './components/FetchData.css'
import ReactPaginate from 'react-paginate'
import HomeHeader from './components/HomeHeader'

// const url = `http://hn.algolia.com/api/v1/search?query=${searchArticle}`
export default function FetchData() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [query, setQuery] = useState("")
    const [searchArticle, setSearchArticle] = useState("")
    const [errMessage, setErrMessage] = useState("")

const handlePageChange =(e)=>{
    console.log(e)
    setCurrentPage(e.selected)
}
const readArticles = async ()=>{
    try{
        const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${searchArticle}&&page=${currentPage}`);

        // {params: {page: currentPage, query}}
        const {hits, nbPages} = await response.json()
        console.log(hits)
        setArticles(hits)
        setTotalPages(nbPages)
        console.log(nbPages)
    } catch (err){
        console.log(err)
        setErrMessage(err.message)
    }finally {
        setIsLoading(false)
    }
}
    useEffect(()=>{
        setIsLoading(true)
        readArticles()
    }, [currentPage, query])
    
  return (
    <>
    <HomeHeader readArticles={readArticles} searchArticle={searchArticle} setSearchArticle={setSearchArticle} />
        <div className='article-cont'>
        {errMessage ? <div>{errMessage}</div> : <></>}
            <div className='article-cont-header'>
                <div className='left'>
                    <p>Search</p>
                    <button>Stories</button>
                    <p>by</p>
                    <button>Popularity</button>
                    <p>for</p>
                    <button>All time</button>
                </div>
                <div className='right'>
                    <p>29.319.724 results (0.004 seconds)</p>
                </div>
            </div>
            {isLoading ? (
                    <p className="loading1">Loading...</p>
                    ) : (articles.map((article, id) => {
                        return(
                            <div key={id} className="article-wrap">
                                <div>
                                    <p className='single-article' >
                                        <Link to={`/article-overview/${article.objectID}`}>{article.title}</Link>
                                    </p>
                                </div>
                                <div className='article-info'>
                                    <p>{article.points} points</p> | {''}
                                    <p>{article.author}</p> | {''}
                                    <p>{article.created_at}</p> | {''}
                                    <p>{article.num_comments} comments</p> | {''}
                                <a href={article.url} className="article-url">Read More</a>
                                </div>
                            </div>
                        )
                    }))
            }
            <ReactPaginate 
                nextLabel="Next"
                previousLabel="Previous"
                breakLabel="..."
                forcePage={currentPage}
                pageCount={totalPages}
                renderOnZeroPageCount={null}
                onPageChange={handlePageChange}
                className="pagination"
                activeClassName='active-page'
                previousClassName='prev-page'
                nextClassName='next-page'
            />
        </div>
        </>
  );
}
