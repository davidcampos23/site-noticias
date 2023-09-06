import React, {useEffect, useState} from "react";

function MaisPopulares()
{
    const [maisPopular, setMaisPopular] = useState([])

    useEffect (() =>{
        const fatchPopular = async () =>{
            try {
                const res = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${import.meta.env.VITE_APP_API_KEY}`)
                const maisPopular = await res.json()
                setMaisPopular(maisPopular.results.slice(0,1))
                
            } catch (error) {
                error(error)
            }
        }

        fatchPopular()
    })


    return(
        <>
           <section className="w-full">
                {maisPopular.map((popular) =>{
                    const { abstract, byline, section, title, id, url, media} = popular;
                    
                    const mediaMetadata = popular.media[0]['media-metadata'];
                    const thumbnailURL = mediaMetadata[2].url;

                    return(
                        <div key={id} className="flex my-5 px-5">
                            <div className="w-1/2">
                                <img className="w-full h-80" src={thumbnailURL} alt={title} />
                            </div>
                            <div className="w-1/2 ml-8">
                                <h2 className="text-2xl font-bold mb-2 mt-4">{title}</h2>
                                <p className="text-justify text-lg mb-2 mt-5">{abstract}</p>
                                <ul className="my-8">
                                    <li>{byline}</li>
                                    <li><span className="font-bold">Section Name:</span> {section}</li>
                                </ul>
                                <a href={url} target="_blank" className="underline">Web Resource</a>
                            </div>
                        </div>
                    )
                })}
           </section>
        </>
    )
}

export default MaisPopulares;