import React, {useEffect, useState} from "react";

function MaisPopularesExtend()
{
    const [maisPopular, setMaisPopular] = useState([])

    useEffect (() =>{
        const fatchPopular = async () =>{
            try {
                const res = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${import.meta.env.VITE_APP_API_KEY}`)
                const maisPopular = await res.json()
                setMaisPopular(maisPopular.results.slice(1,4))
                
            } catch (error) {
                error(error)
            }
        }

        fatchPopular()
    })


    return(
        <>
           <section className="w-full flex flex-wrap justify-between">
                {maisPopular.map((popular) =>{
                    const { title, id, url, media} = popular;
                    
                    const mediaMetadata = media && media[0] && media[0]['media-metadata'];
                    const thumbnailURL = mediaMetadata[2].url;

                    return(
                        <div key={id} className="flex flex-col items-center my-2">
                            <a href={url} target="_blank"><img className="w-imageExtend h-70 object-cover" src={thumbnailURL} alt={title} /></a>
                            <a href={url} target="_blank" className="w-imageExtend break-words mt-1 text-base">{title}</a>
                        </div>
                    )
                })}
           </section>
        </>
    )
}

export default MaisPopularesExtend;