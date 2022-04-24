// ContextProviders
import NavContext from './NavContext'

const ContextProviders = (props) => {
  return <NavContext>{props.children}</NavContext>
}

export default ContextProviders
