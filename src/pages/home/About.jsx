export default function AboutMe(){
  return(
    <section className="section about-me">
      <div className="con">
        <div className="flex">
          <div className="flex flex-col flex-1 items-start gap-y-16 pr-16">
            <h2 className="text-primary font-agbalumo underline">About me</h2>
            <div className="w-11/12">
              <p>A seasoned UI/UX designer dedicated to bridging creativity with  user-centric design principles, sculpting intuitive digital experiences  that resonate with audiences. With a knack for transforming ideas into  visually compelling interfaces.</p>
            </div>
            <button className="button purple">Let's know more about me</button>
          </div>
          <div className="p-1 border border-solid border-cs-bronze flex-1">
            <img className="w-full h-full cursor-pointer" src="images/about-image.jpg" alt="About image" />
          </div>
        </div>
      </div>
    </section>
  )
}