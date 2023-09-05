function Categorias()
{
    const categorias = ["books/review","world","climate","economy","education","health","soccer","science","politics","music","technology","sports","movies"]
   
    const categoriasElements = categorias.map((categoria, index) => (
        <p key={index}>
            <a href={`https://www.nytimes.com/section/${categoria}`} target="_blank" rel="noopener noreferrer">{categoria}</a>
        </p>
    ))
    
   

    return(
        <>
            <section className="border-b border-t border-black p-1 w-full flex gap-16"> 
                {categoriasElements}
            </section>
        </>
    )
}

export default Categorias;