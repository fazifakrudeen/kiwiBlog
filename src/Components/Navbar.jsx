import {Link} from 'react-router-dom';
const Navbar = ()=>{
    return (
        <div className="flex items-center justify-center h-24 px-5 max-w-[1240px] font-bold mx-auto">
            <ul className="flex px-5">
                <li className="p-5"><Link to="/">Home</Link></li>
                <li className="p-5" ><Link to="/create">Create</Link></li>
                <li className="p-5" ><Link to="/read">Blog</Link></li>
            </ul>
        </div>
    );
}

export default Navbar