// ButtonLink
import { buttonProps } from './buttonProps'
import './Button.scss'

const ButtonLink = ({ children, type, variant, href, ...props }) => {
  return (
    <a
      className={`button ${buttonProps.type[type]} ${buttonProps.variant[variant]}`}
      href={href || '#'}
      {...props}
    >
      {children}
    </a>
  )
}

export default ButtonLink
