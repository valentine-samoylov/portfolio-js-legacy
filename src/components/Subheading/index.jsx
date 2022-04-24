// Subheading
import './index.scss'

const subheadingProps = {
  variant: {
    centered: 'ta-c',
  },
}

const Subheading = (props) => {
  return (
    <h4 className={`subheading ${props.className} ${subheadingProps.variant[props.variant]}`}>
      {props.children}
    </h4>
  )
}

export default Subheading
