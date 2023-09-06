import React, {useState, useEffect} from 'react'

const Noticias = () =>
{
    const [noticias, setNoticias] = useState([])

    useEffect(() =>{
        const fetchNoticias = async () => {
            try {
                const res = await fetch (`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${import.meta.env.VITE_APP_API_KEY}`)
                const noticias = await res.json()
                setNoticias(noticias.results.slice(1,5))
            } catch (error) {
                error(error)
            }
        }

        fetchNoticias()
    }, [])

    return(
        <>
            <section className='flex flex-col w-1/3 mr-auto p-5'>
                {noticias.map((noticia) =>{
                    const {abstract, title, byline, section, short_url} = noticia

                    return(
                        <div key={title}>
                          <h2 className="text-lg font-bold mb-2 mt-4">{title}</h2>
                          <p className='text-justify'>{abstract}</p>
            
                          <ul className='my-3'>
                            <li>{byline}</li>
                            <li><span className='font-bold'>Section Name:</span> {section}</li>
                          </ul>
                          <a href={short_url} target="_blank" className='underline'>Web Resource</a>
                        </div>   
                    )
                })}
            </section>
        </>
    )
}

export default Noticias