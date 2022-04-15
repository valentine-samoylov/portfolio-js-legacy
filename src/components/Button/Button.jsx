// Button
import { buttonProps } from './buttonProps'
import './Button.scss'

const Button = ({ children, as, type, variant, href, ...props }) => {
  const classes = `button ${buttonProps.type[type] || ''} ${buttonProps.variant[variant] || ''}`

  return (
    <>
      {as === 'a' ? (
        <a className={classes} href={href || '#'} {...props}>
          {children}
        </a>
      ) : (
        <button className={classes} {...props}>
          {children}
        </button>
      )}
    </>
  )
}

export default Button
