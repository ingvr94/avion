

type Props = {
    icon:JSX.Element,
    title:string
    description:string
}


const Benefit = ({icon,title,description}: Props) => {
  return (
    <div
     className=" md:my-0 xs:w-[342px] xs:my-9">
      <div className="text-2xl md:mb-4 xs:mb-2">
          {icon}
        </div>
      <div className="font-clashdisplay md:text-h4 md:mb-4 xs:text-h5 text-dark-primary xs:mb-2">
        {title}
      </div>
      <div className="md:text-body_md xs:text-body_sm text-dark-primary ">
        {description}
      </div>
    </div>
  )
}

export default Benefit