import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router'
import ArticleHeader from './ArticleHeader'
import './ArticleOverview.css'
import { useParams } from 'react-router'

export default function ArticleOverview() {
  const [data, setData] = useState("")
  const params = useParams()
  console.log(params)

  const readArticle = async ()=>{
    try{
        const response = await fetch(`http://hn.algolia.com/api/v1/items/${params.id}`);

        // {params: {page: currentPage, query}}
        const result = await response.json()
        console.log(result)
        setData(result)
        console.log(result)
    } catch (err){
        console.log(err)
    }
}
  useEffect(()=>{
    readArticle()
  }, [])
  if(!data){
    return <div className='loading'>Loading...</div>
  }
  const content = data?.children.map((e, i)=>{
    return(
      <div key={i}>
        <div>{e.author}</div>
        <div>{e.created_at}</div>
        <div>{e.text}</div>
      </div>
    )
  })
  return (
    <div>
        <ArticleHeader />
        <div className='contentWrap'>
          <div className='idTitle'>
            <p className='params'>{params.id}</p>
            <p>{data.title}</p>
          </div>
          <p className='content'>{content}</p>
        </div>
    </div>
  )
}
