export default function Project({ params }: { params: { project: string } }) {
  return <div>{params.project}</div>
}
