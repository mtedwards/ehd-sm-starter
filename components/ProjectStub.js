import Image from "next/image";

export default function ProjectStub({ project }) {
  const link = `/project/${project.uid}`;
  const {title, subtitle, image} = project.data;
  return (
    <div>
      <a href={link} >
        <Image
          src={image.url}
          alt={image.alt}
          width={image.dimensions.width}
          height={image.dimensions.height}
        />
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </a>
      <style jsx>{`
        div {
          text-align: left;
          h1, h3 {
            line-height:1;
            padding: 0;
            margin: 0.3em 0 0;
          }
        }
    `}</style>
    </div>
  )
}
