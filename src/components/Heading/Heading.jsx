// Heading
import './Heading.scss'

const Heading = (props) => {
  return (
    <h3 className="heading ta-c" id={props.id}>
      {props.children}
    </h3>
  )
}

export default Heading
