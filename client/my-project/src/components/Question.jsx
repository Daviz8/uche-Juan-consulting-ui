import { useState } from 'react';

function Question() {
   return(
    <>

<div className='py-36 flex flex-col justify-center items-center'>
	<div className='bg-white rounded-md pb-2 shadow-lg'>
		<h1  className='bg-blue-700 px-4 py-3 text-white font-bold rounded-t-md'></h1>
		<div className='flex flex-col w-full gap-3 pt-3 pb-2 px-2 relative'>
			<div className='relative w-full h-8'>
				<input type='checkbox' id='Yes' className='appearance-none rounded-lg bg-gray-100 cursor-pointer h-full w-full 
                    checked:bg-blue-400 transition-all duration-200  font-bold  checked:hover:bg-black-400 hover:bg-blue-800  hover:text-white  peer'></input>
				<label htmlFor='tennis' className='absolute top-[50%] left-3 text-gray-400   -translate-y-[50%]
                     peer-checked:text-gray-100 transition-all duration-200 select-none
                '>Yes</label>
			</div>
			<div className='relative w-full  h-8'>
				<input type='checkbox' id='No' className='appearance-none rounded-lg bg-gray-100 cursor-pointer h-full w-full 
                    checked:bg-teal-400 transition-all duration-200 checked:hover:bg-black-400 font-bold hover:bg-blue-800  hover:text-white peer'></input>
				<label htmlFor='rugby' className='absolute top-[50%] left-3 text-gray-400   -translate-y-[50%]
                     peer-checked:text-gray-100 transition-all duration-200 select-none
                '>No</label>
			</div>
		
		</div>
		<div className='w-full flex flex-row justify-end px-2 pt-1'>
			<button className='bg-emerald-500 w-full rounded-md py-2 text-white font-bold hover:bg-emerald-600 transition-all duration-300'>Submit</button>
		</div>
	</div>
</div>

<div className=" max-w-lg p-11 container flex justify-center mx-auto">
  <div className="flex flex-row mx-auto">
    <button type="button" className="bg-black text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-blue-700 hover:text-white px-3">
      <div className="flex flex-row align-middle">
        <a href="/survey/prev"  className="mr-2"></a>
        <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
        </svg>
        <p className="ml-2">Prev</p>
      </div>
    </button>
    <button   type="button"  className="bg-black text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-blue-700 hover:text-white px-3">
      <div className="flex flex-row align-middle">
        <a href="/survey/Next"  className="mr-2">Next</a>
        <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </div>
    </button>
  </div>
</div>
    </>
   )

}

export default Question;