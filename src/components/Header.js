import {Link} from 'react-router-dom';
import toothImage from './tooth_8870426.png';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10 pt-20 ">
            <div className="flex justify-center">
            <img
                alt=""
                className="h-14 w-14"
                src={toothImage}
            />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-cyan-600 hover:text-cyan-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}