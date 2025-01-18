import Button from "../../components/Buttons"

export default function Contact(){
  return(
    <section className="section contact">
      <div className="con">
        <div className="contact-bg"></div>
        <div className="h-full flex flex-col items-end relative px-7 py-4 mobile:justify-center mobile:items-center">
          <h2 className="text-white font-agbalumo">Contact me</h2>
          <Button style={"blue"}>Contact me</Button>
        </div>
      </div>
    </section>
  )
}