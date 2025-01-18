import Button from '../../components/Buttons';

export default function AboutMe(){
  return(
    <section className="section about">
      <div className="con">
        <div className="flex mobile:flex-col gap-16 tablet:gap-10">
          <div className="flex flex-col flex-1 items-start gap-y-14 mobile:items-center">
            <h2 className="font-agbalumo text-primary underline">About me</h2>
            <p className='max-w-[450px] mobile:text-center'>ສະບາຍດີ~ ຂ້ອຍແມ່ນ Temmott---ນັກສ້າງສັນຜົນງານ Digital Art ທີ່ປະສົມປະສານຄວາມແຟນຕາຊີແລະຄວາມເປັນຈິງໃນແບຍທີ່ເຈົ້າບໍ່ເຄີຍເຫັນມາກ່ອນ. ໂລກຂອງຂ້ອຍເຕັມໄປດ້ວຍສີສັນເຊັ່ນ: ຕົວລະຄອນທີ່ນ່າດຶງດູດສະເພາະໂຕ ຫລືສາກທີ່ພາເຈົ້າເດີນທາງເຂົ້າສູ່ໂລກທີ່ບໍ່ມີຂອບເຂດ.</p>
            <Button style="purple">Let's know more about me</Button>
          </div>
          <div className='flex justify-center items-center flex-1'>
            <img src="images/about-image.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}