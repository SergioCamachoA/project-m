import { Dispatch, SetStateAction } from "react"
import { sidebarButton } from "@/components/primitives"
import { projects } from "@/constants/projects"
import { useRouter } from "next/navigation"

export default function Sidebar({
  setSelectedProject,
}: {
  setSelectedProject: Dispatch<SetStateAction<string>>
}) {
  const router = useRouter()

  return (
    <ul className="w-full">
      {projects.map((project) => (
        <li className="flex justify-center xl:justify-end" key={project.key}>
          <button
            color="primary"
            className={sidebarButton({})}
            onPointerEnter={() => setSelectedProject(project.key)}
            onClick={() => router.push(`/project/${project.key}`)}
          >
            {project.value.toUpperCase()}
          </button>
        </li>
      ))}
    </ul>
  )
}
