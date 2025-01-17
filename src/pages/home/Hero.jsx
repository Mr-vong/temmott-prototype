export default function Hero(){
  return(
    <section className="section hero">
      <div className="con">
        <div className="w-full h-full py-20 relative">
          <div className="text-center relative">
            <h1 className="font-abril-fatface font-normal uppercase text-primary drop-shadow-[0_7px_0_rgba(89,41,33,0.31)]">temmott</h1>
            <p className="absolute text-white font-inspiration font-normal text-[50px] left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4">A digital artist</p>
          </div>
          <div className="w-[350px] absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4">
            <img className="w-full h-full object-cover" src="images/hero-image.png" alt="Hero image" />
          </div>
        </div>
      </div>
    </section>
  )
}