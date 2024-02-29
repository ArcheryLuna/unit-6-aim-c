import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from "@fortawesome/free-solid-svg-icons";


export default function Testimonials() {
    return (
        <div className="px-6 py-6 lg:px-12 lg:py-12">
            <h1><FontAwesomeIcon icon={faHandshake} />Don't just take our word</h1>            
        </div>
    )
}