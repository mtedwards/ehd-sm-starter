import ProjectStub from "../../components/ProjectStub";

const ProjectList = ({ slice }) => {
  const project = slice;


  return (
    <section>
      <div className="container">
        { slice?.items?.map((item, i) =>(
          <ProjectStub project={item.project} key={`project-stub-${i}`} />
        )) }
      </div>

      <style jsx>{`
          section {
          margin: 4em auto;
        }
        .container {
          display: grid;
          grid-template-columns: repeat( auto-fit, minmax(320px, 1fr) );
          column-gap: 1rem;
        }
      `}</style>
    </section>
  )
}
export default ProjectList

