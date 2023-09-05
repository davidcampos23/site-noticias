import React, { useState, useEffect } from 'react'
import  "./index.css"

const Artigos = ()=> {
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('everything')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
          const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${import.meta.env.VITE_APP_API_KEY}`)
          const articles = await res.json()
          setArticles(articles.response.docs)
        }
      catch (error) {
        console.error(error)  
      }
    }

    fetchArticles()

  }, [])

  return (
    <>
      <section>
        {articles.map((article) => {
          const {abstract, headline:{main}, byline:{original}, lead_paragraph, news_desk, section_name, web_url, _id, word_count} = article

          return(
            <article key={_id}>
              <h2 className="text-lg">{main}</h2>
              <h4>{abstract}</h4>
              <a href={web_url} target="_blank">Web Resource</a>
              <p>{lead_paragraph}</p>

              <ul>
                <li>{original}</li>
                <li>{news_desk}</li>
                <li>{section_name}</li>
                <li>{word_count}</li>
              </ul>
            </article>
          )
        })}
      </section>

    </>
  )
}

export default Artigos
