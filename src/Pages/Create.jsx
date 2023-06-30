const Create = ()=>{
    return (
        <div className="mx-auto max-w-[1240px] md:px-8 justify-between h-[720px] ">
            <div className="m-6">
                <input className="shadow-lg h-10 w-full p-6 my-6 bg-white border-none focus:outline-none rounded-lg md:text-3xl" placeholder="title"></input>
                <br />
                <div class="bg-black-100 border border-[#913175] rounded-lg px-4 py-2 font-semibold">
                    <textarea className="w-full h-[500px] resize-none bg-transparent border-none focus:outline-none font-bold md:text-2xl text-white" placeholder="Enter your note here"></textarea>
                </div>
            </div>
            <button className='bg-[#913175] w-[200px] rounded-md font-medium my-6 mx-6 py-3 text-black hover:text-black hover:bg-white p-5'>Submit</button>
        </div>
    );
}

export default Create;