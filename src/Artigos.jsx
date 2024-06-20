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
          setArticles(articles.response.docs.slice(0,3))
          setIsLoading(false);
        }
      catch (error) {
        console.error(error)
        setIsLoading(false);  
      }
    }

    fetchArticles()

  }, [term]);

  if(isLoading){
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className='flex flex-col w-2/3 ml-auto mt-6 border-t border-black'>
        <h1 className='mt-4 text-2xl font-bold'>Articles</h1>
        {articles.map((article) => {
          const {abstract, headline:{main}, byline:{original}, lead_paragraph, news_desk, section_name, web_url, _id, multimedia} = article

          const multimediaBaseUrl = "https://www.nytimes.com/";
          const imageUrl = multimedia.length ? `${multimediaBaseUrl}${multimedia[0].url}` : "";

          return(
            <article key={_id} className='mb-3'>
              <h2 className="text-lg font-bold mb-2 mt-4">{main}</h2>
              
              <a href={web_url} target="_blank" rel="noopener noreferrer"><img src={imageUrl} className='w-full h-imageArticle'></img></a>

              <p className='text-justify mb-2'>{abstract}</p>
              <p className='text-justify'>{lead_paragraph}</p>

              <ul className='my-3'>
                <li>{original}</li>
                <li><span className='font-bold'>News Desk:</span> {news_desk}</li>
                <li><span className='font-bold'>Section Name:</span> {section_name}</li>
              </ul>
            </article>
          )
        })}
      </section>

    </>
  )
}

export default Artigos
