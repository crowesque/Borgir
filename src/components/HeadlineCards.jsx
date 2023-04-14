import React from 'react'

const HeadlineCards = () => {
	return (
		<div className=' max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
			{/**Card */}
			<div className=' rounded-xl relative'>
				{/**overlay */}
				<div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
					<p className='font-bold text-2xl px-2 pt-4'>Breakfast Menu</p>
					<p className='px-2'>7am - 11am</p>
					<button className=' border-white bg-white text-black mx-2 absolute bottom-4'>
						Order Now
					</button>
				</div>
				<img
					src='https://images.pexels.com/photos/5710793/pexels-photo-5710793.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
					alt=''
					className=' rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover '
				/>
			</div>
			{/**Card */}
			<div className=' rounded-xl relative'>
				{/**overlay */}
				<div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
					<p className='font-bold text-2xl px-2 pt-4'>burger & burgers</p>
					<p className='px-2'>see our veg options </p>
					<button className=' border-white bg-white text-black mx-2 absolute bottom-4'>
						Order Now
					</button>
				</div>
				<img
					src='https://images.pexels.com/photos/15010286/pexels-photo-15010286.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
					alt=''
					className=' rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover '
				/>
			</div>
			{/**Card */}
			<div className=' rounded-xl relative'>
				{/**overlay */}
				<div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
					<p className='font-bold text-2xl px-2 pt-4'>Desserts</p>
					<p className='px-2'>We deliver desserts too</p>
					<button className=' border-white bg-white text-black mx-2 absolute bottom-4'>
						Order Now
					</button>
				</div>
				<img
					src='https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
					alt=''
					className=' rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover '
				/>
			</div>
		</div>
	)
}

export default HeadlineCards
