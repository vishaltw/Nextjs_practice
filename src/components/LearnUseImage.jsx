import Image from "next/image";
import NatureImage from "../../public/images/IMG_0003.JPG";

const LearnUseImage = () => {
  return (
    <>
      <Image src={NatureImage} alt="My Image" width={500} height={500} />
    </>
  );
};

export default LearnUseImage;
