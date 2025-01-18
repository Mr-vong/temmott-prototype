import ImageWrapper from "../../components/imageWrapper"

export default function MyWorks(){
  return(
    <section className="section my-works">
      <div className="con wide">
        <div className="grid grid-rows-2 grid-cols-2 gap-6 tablet:gap-2 mobile:grid-cols-1">
          <div className="w-full h-80 col-span-2 mobile:col-span-1">
            <ImageWrapper>
              <img src="images/nn.jpg" alt="" />
            </ImageWrapper>
          </div>
          <div className="w-full h-80 col-span-1">
            <ImageWrapper>
              <img src="images/yellow.jpg" alt="" />
            </ImageWrapper>
          </div>
          <div className="w-full h-80 col-span-1">
            <ImageWrapper>
              <img src="images/fly.jpg" alt="" />
            </ImageWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}