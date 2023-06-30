import {Link} from 'react-router-dom';
const Home = ()=>{
    return (
            <div className='text-white '>
                <div className='max-w-[1240px]  py-[140px] w-full mx-auto text-center flex flex-col justify-center '>
                    <p className='text-white font-bold p-2'>Are you excited to WRITE?</p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Definitely Yes</h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-medium py-4'>Why not?  </p>
                        <h1 className='md:text-5xl sm:text-4xl text-xl font-medium py-4l'>  Kiwi Blogs</h1>
                    </div>
                    <br/>
                    <div className='grid md:grid-cols-2'>
                    <Link className='bg-[#913175] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:text-black hover:bg-white' to="/create">Write Now</Link>
                    <Link className='bg-[#913175] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:text-black hover:bg-white' to="/read">Read Now</Link>
                    </div>
                    
                </div>
            </div>
    );
}

export default Home;