function Titulo()
{
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let x = today.getDay()
    let dia = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"]

    let data = today.toLocaleDateString(); 

    return(
        <>
        <section className="flex flex-row justify-center items-center mt-2">
            {/* <div className="mr-72  mt-4">
                <h4>{dia[x]}</h4>
                <h4>{data}</h4>
            </div> */}
            <div>
                <h1 className="text-7xl ">DAILY NEWS</h1>
            </div>
        </section>
        </>
    )
}

export default Titulo