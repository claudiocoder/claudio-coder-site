import {
  faGithub,
  faLinkedin,
  faTwitch,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const SocialNetwork = () => {
  return (
    <div className='flex items-center justify-around w-full'>
      <Link href='https://twitter.com/claudio_coder' target='_blank'>
        <FontAwesomeIcon
          className='text-3xl text-black-500 cursor-pointer'
          icon={faXTwitter}
        />
      </Link>
      <Link href='https://github.com/claudiocoder' target='_blank'>
        <FontAwesomeIcon
          className='text-3xl text-gray-800 cursor-pointer'
          icon={faGithub}
        />
      </Link>
      <Link href='https://www.linkedin.com/in/cmorenomx' target='_blank'>
        <FontAwesomeIcon
          className='text-3xl text-blue-800 cursor-pointer'
          icon={faLinkedin}
        />
      </Link>
      <Link href='https://www.twitch.tv/claudio_coder' target='_blank'>
        <FontAwesomeIcon
          className='text-3xl text-purple-800 cursor-pointer'
          icon={faTwitch}
        />
      </Link>
    </div>
  )
}

export default SocialNetwork
