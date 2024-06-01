import { importMinionsImages } from "../utills/imagesImporter";

const allImages = importMinionsImages();
const cardsInfo = allImages.map((image, index) => {
  return { image, id: index };
});

export default cardsInfo;
