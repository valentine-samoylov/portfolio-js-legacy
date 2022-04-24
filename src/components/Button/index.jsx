// Button
import './index.scss'

const buttonProps = {
  type: {
    primary: 'button--primary',
    tertiary: 'button--tertiary',
    icon: 'button--icon',
  },

  variant: {
    reversed: 'button--reversed',
    centered: 'button--centered',
  },
}

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
