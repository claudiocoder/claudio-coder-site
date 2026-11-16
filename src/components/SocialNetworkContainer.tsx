import {
  faGithub,
  faLinkedin,
  faTwitch,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const SocialNetwork = () => {
  const linkClassName =
    'flex min-h-14 min-w-11 flex-col items-center justify-center gap-1 rounded-md px-1 py-2 text-sm hover:bg-slate-100 active:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700'

  return (
    <nav
      aria-label='Redes sociales de Claudio'
      className='grid w-full grid-cols-4 gap-1 lg:grid-cols-2 lg:gap-2'
    >
      <Link
        className={`${linkClassName} text-black`}
        href='https://twitter.com/claudio_coder'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon
          className='text-xl'
          icon={faXTwitter}
          aria-hidden='true'
        />
        <span>X</span>
        <span className='sr-only'> de Claudio (abre en otra pestaña)</span>
      </Link>
      <Link
        className={`${linkClassName} text-gray-800`}
        href='https://github.com/claudiocoder'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon
          className='text-xl'
          icon={faGithub}
          aria-hidden='true'
        />
        <span>GitHub</span>
        <span className='sr-only'> de Claudio (abre en otra pestaña)</span>
      </Link>
      <Link
        className={`${linkClassName} text-blue-800`}
        href='https://www.linkedin.com/in/cmorenomx'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon
          className='text-xl'
          icon={faLinkedin}
          aria-hidden='true'
        />
        <span>LinkedIn</span>
        <span className='sr-only'> de Claudio (abre en otra pestaña)</span>
      </Link>
      <Link
        className={`${linkClassName} text-purple-800`}
        href='https://www.twitch.tv/claudio_coder'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon
          className='text-xl'
          icon={faTwitch}
          aria-hidden='true'
        />
        <span>Twitch</span>
        <span className='sr-only'> de Claudio (abre en otra pestaña)</span>
      </Link>
    </nav>
  )
}

export default SocialNetwork
