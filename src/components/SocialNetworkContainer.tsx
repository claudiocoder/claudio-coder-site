import {
    faGithub,
    faLinkedin,
    faSquareTwitter,
    faTwitch,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const SocialNetwork = () => {
    return (
        <div className="flex items-center justify-around w-full max-w-[200px]">
            <Link href="https://twitter.com/claudio_coder" target="_blank" legacyBehavior>
                <FontAwesomeIcon
                    className="text-3xl text-blue-500 cursor-pointer"
                    icon={faSquareTwitter}
                />
            </Link>
            <Link href="https://github.com/claudiocoder" target="_blank" legacyBehavior>
                <FontAwesomeIcon
                    className="text-3xl text-gray-800 cursor-pointer"
                    icon={faGithub}
                />
            </Link>
            <Link
                href="https://www.linkedin.com/in/cmorenomx"
                target="_blank"
                legacyBehavior>
                <FontAwesomeIcon
                    className="text-3xl text-blue-800 cursor-pointer"
                    icon={faLinkedin}
                />
            </Link>
            <Link href="https://www.twitch.tv/claudio_coder" target="_blank" legacyBehavior>
                <FontAwesomeIcon
                    className="text-3xl text-purple-800 cursor-pointer"
                    icon={faTwitch}
                />
            </Link>
        </div>
    );
}

export default SocialNetwork
