function Rodape()
{
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let x = today.getDay()
    let dia = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"]

    let data = today.toLocaleDateString(); 

    return(
        <>
        <section className="border-t border-black w-full flex justify-around py-2">
            <div className="text-center">
                <h4>{dia[x]}</h4>
                <h4>{data}</h4>
            </div>
            <div className="text-center">
                <h4>Belo Horizonte</h4>
                <h4>Minas Gerais</h4>
            </div>
            <div className="text-center">
                <h4>New York Times</h4>
                <h4>Source API</h4>
            </div>
        </section>
        </>
    )
}

export default Rodape