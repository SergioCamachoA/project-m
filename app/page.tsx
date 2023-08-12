"use client"
import Image from "next/image"
import { useState } from "react"
import { projects } from "@/constants/projects"
import { images } from "@/constants/images"
import Link from "next/link"
import Sidebar from "./projects/components/sidebar"

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(projects[0].key)
  const src = images[selectedProject][0]

  return (
    <section className="w-full h-full flex flex-row">
      <aside className="w-full xl:w-3/6 h-full flex items-center absolute xl:relative">
        <Sidebar setSelectedProject={setSelectedProject} />
      </aside>
      <div className="w-full xl:w-3/6 h-full absolute right-0 flex justify-center items-center">
        <Link
          href={`/project/${selectedProject}`}
          className="w-5/6 h-4/6 relative overflow-hidden"
        >
          <Image
            style={{
              objectFit: "cover",
            }}
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={src}
            alt="example image of a project"
          />
        </Link>
      </div>
    </section>
  )
}
