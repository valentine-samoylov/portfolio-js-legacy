// Card (Works card)
import './index.scss'
import IconView from '@/assets/images/svg/view.svg'
import IconCode from '@/assets/images/svg/code.svg'

const Card = (props) => {
  return (
    <article className="card">
      <div className="card__header d-b">
        <img
          className="img-fl"
          src={props.data.imgSrc}
          alt={`${props.data.title} - ${props.data.text}`}
          loading="lazy"
        />
        <ul className="card__techStack d-f fxw-w">
          {props.data.stack.map((stackItem, idn) => (
            <li className="card__techStackItem d-f ai-c" key={idn}>
              {stackItem.icon}
              <span>{stackItem.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="card__body d-f fd-c jc-c">
        <h4 className="card__title">{props.data.title}</h4>
        <p className="card__text">{props.data.text}</p>

        <div className="card__links d-f">
          <a className="card__link d-f ai-c" target="_blank" href={props.data.hrefDemo}>
            <IconView className="card__icon" title="Live demo" />
            <span className="card__linkText">Demo</span>
          </a>
          <a className="card__link d-f ai-c" target="_blank" href={props.data.hrefRepo}>
            <IconCode className="card__icon" title="Browse code" />
            <span className="card__linkText">Code</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default Card
