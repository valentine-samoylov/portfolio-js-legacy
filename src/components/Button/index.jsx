// Button
import './index.scss'
import scrollToSection from '@/utils/scrollToSection'

const buttonProps = {
  type: {
    primary: 'button--primary',
  },

  variant: {
    reversed: 'button--reversed',
    centered: 'button--centered',
  },
}

const Button = ({ children, as, type, variant, href, targetId, ...props }) => {
  const classes = `button ${buttonProps.type[type] || ''} ${buttonProps.variant[variant] || ''}`

  const handleClick = (e) => {
    e.preventDefault()
    scrollToSection(targetId)
  }

  return (
    <>
      {as === 'a' ? (
        <a
          className={classes}
          href={href || '#'}
          targetId={targetId || ''}
          {...props}
          onClick={handleClick}
        >
          {children}
        </a>
      ) : (
        <button className={classes} {...props} type="button">
          {children}
        </button>
      )}
    </>
  )
}

export default Button
