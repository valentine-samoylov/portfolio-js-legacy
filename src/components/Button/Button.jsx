// Button
import { buttonProps } from './buttonProps'
import './Button.scss'

const ButtonLink = ({ children, type, variant, ...props }) => {
  return (
    <button
      className={`button ${buttonProps.type[type]} ${buttonProps.variant[variant]}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default ButtonLink
