function Titulo()
{
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let x = today.getDay()
    let dia = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    let data = today.toLocaleDateString(); 
    
    return(
        <>
        <section className="flex flex-row mt-2 w-full justify-between">
            <div>
                <h1 className="text-6xl mb-4 border-b border-black">DAILY NEWS</h1>
            </div>
            <div className="text-center flex items-center">
                <h4 className="text-3xl">{dia[x]},</h4>
                <h4 className=" text-2xl ml-3">{data}</h4>
            </div>
        </section>
        </>
    )
}

export default Titulo