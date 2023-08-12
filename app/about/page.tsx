"use client"
import { AdvancedVideo } from "@cloudinary/react"
import { Cloudinary } from "@cloudinary/url-gen"
import { Divider } from "@nextui-org/divider"

export default function About() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "imagescdnsc",
    },
  })

  const cldVid = cld.video("video/landpage_video")

  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-secondary-400 dark:bg-secondary-500">
      <div className="w-full h-full grid gap-4 grid-cols-12 grid-rows-6">
        <AdvancedVideo
          cldVid={cldVid}
          muted
          autoPlay
          loop
          className="col-start-2 col-end-12 row-start-2 row-end-6"
        />
      </div>
      <footer className="w-4/6 flex flex-col items-center justify-center absolute z-10 bottom-0">
        <Divider className="bg-primary-500 dark:bg-primary-100" />
        <div className="grid gap-4 grid-cols-4 grid-rows-1 w-full py-3">
          <p className="text-xs md:text-sm">CDMX 2023</p>
          <p className="text-xs md:text-sm text-center col-span-2">
            Dev by Sergio Camacho
          </p>
          <p className="text-xs md:text-sm text-right">
            All rights reserved 2023
          </p>
        </div>
      </footer>
    </section>
  )
}
