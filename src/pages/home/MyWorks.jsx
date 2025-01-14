import ImageWrapper from "../../components/imageWrapper"

export default function MyWorks(){
  return(
    <section className="section my-works">
      <div className="con">
        <div className="grid grid-cols-2 auto-rows-[300px] gap-3">
          <div className="col-span-2">
            <ImageWrapper className="">
              <img src="images/nn.jpg" alt="" />
            </ImageWrapper>
          </div>
          <ImageWrapper>
            <img src="images/yellow.jpg" alt="" />
          </ImageWrapper>
          <ImageWrapper>
            <img src="images/fly.jpg" alt="" />
          </ImageWrapper>
        </div>
      </div>
    </section>
  )
}