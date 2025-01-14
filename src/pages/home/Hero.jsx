export default function Hero(){
  return(
    <section className="section hero">
      <div className="con">
        <div className="relative h-full pt-20">
          <div className="relative text-center">
            <h1 className="text-primary text-[100px] font-normal drop-shadow-[0_6px_rgba(89,41,33,.31)]">TEMMOTT</h1>
            <p className="font-inspiration text-[3.158rem] text-white font-normal absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">A digital artist</p>
          </div>
          <div className="w-[300px] h-[437px] absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
            <img src="images/hero-image.png" alt="Sculpture image" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}