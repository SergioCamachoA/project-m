import oda1 from "../public/images/oda/1.webp"
import bodegon1 from "../public/images/bodegon/1.webp"
import haux1 from "../public/images/haux/1.jpg"
import nikolah1 from "../public/images/nikolah/1.webp"
import shop1 from "../public/images/shop/1.webp"
import xavi1 from "../public/images/xavi/1.jpg"
import bodegon_herbario1 from "../public/images/bodegon_herbario/1.webp"
import { StaticImageData } from "next/image"

interface IImages {
  [key: string]: StaticImageData[]
}

export const images: IImages = {
  oda: [oda1],
  bodegon: [bodegon1],
  haux: [haux1],
  nikolah: [nikolah1],
  shop: [shop1],
  xavi: [xavi1],
  bodegon_herbario: [bodegon_herbario1],
}
