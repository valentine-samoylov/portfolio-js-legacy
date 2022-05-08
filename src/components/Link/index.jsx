// Link
import './index.scss'

const linkProps = {
  type: {
    primary: 'link--primary',
    icon: 'link--icon',
  },
}

const Button = ({ children, type, href, ...props }) => {
  const classes = `link ${linkProps.type[type] || ''}`

  return (
    <a className={classes} href={href || '#'} {...props}>
      {children}
    </a>
  )
}

export default Button
