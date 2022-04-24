// Paragraph
import './index.scss'

const Paragraph = (props) => {
  return <p className={`paragraph ${props.className || ''}`}>{props.children}</p>
}

export default Paragraph
