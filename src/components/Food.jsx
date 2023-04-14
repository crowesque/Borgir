import React, { useState } from 'react'
import { categories, data } from '../data/data.js'

const Food = () => {
	const [foods, setFoods] = useState(data)

	// filter type burger/pizza/etc
	const filterType = (category) => {
		setFoods(
			data.filter((item) => {
				return item.category === category
			})
		)
	}

	//filter by price

	const filterPrice = (price) => {
		setFoods(
			data.filter((item) => {
				return item.price === price
			})
		)
	}

	return (
		<div className=' max-w-[1640px] m-auto px-4 py-12'>
			<h1 className=' text-orange-600 font-bold text-4xl text-center'>
				Menu Items
			</h1>

			{/**Filter row */}
			<div className='flex flex-col  max-w-[590px] w-full'>
				{/**Filter Type */}
				<div className=' pt-4'>
					<p className='font-bold text-gray-700'>Filter Type</p>
					<div className=' flex justify-between flex-wrap'>
						<button
							onClick={() => setFoods(data)}
							className=' border-orange-600 bg text-orange-600 hover:bg-orange-500 hover:text-white m-1'
						>
							All
						</button>

						<button
							onClick={() => {
								filterType('burger')
							}}
							className=' border-orange-600 bg text-orange-600 hover:bg-orange-500 hover:text-white m-1'
						>
							Burger
						</button>
						<button
							onClick={() => {
								filterType('pizza')
							}}
							className=' border-orange-600 bg text-orange-600 hover:bg-orange-500 hover:text-white m-1'
						>
							Pizza
						</button>
						<button
							onClick={() => {
								filterType('salad')
							}}
							className=' border-orange-600 bg text-orange-600 hover:bg-orange-500 hover:text-white m-1'
						>
							Salads
						</button>
						<button
							onClick={() => {
								filterType('chicken')
							}}
							className=' border-orange-600 bg text-orange-600 hover:bg-orange-500 hover:text-white m-1'
						>
							Chicken
						</button>
					</div>
				</div>
				{/**Filter price */}
				<div className=''>
					<p className=' font-bold text-gray-700'>Filter price</p>
					<div className='flex justify-between max-w-[390px] w-full'>
						<button
							onClick={() => filterPrice('$')}
							className=' border-orange-600 bg text-orange-600 hover:bg-orange-500 hover:text-white m-1'
						>
							$
						</button>
						<button
							onClick={() => filterPrice('$$')}
							className=' border-orange-600 bg text-orange-600 hover:bg-orange-500 hover:text-white m-1'
						>
							$$
						</button>
						<button
							onClick={() => filterPrice('$$$')}
							className=' border-orange-600 bg text-orange-600 hover:bg-orange-500 hover:text-white m-1'
						>
							$$$
						</button>
						<button
							onClick={() => filterPrice('$$$$')}
							className=' border-orange-600 bg text-orange-600 hover:bg-orange-500 hover:text-white m-1'
						>
							$$$$
						</button>
					</div>
				</div>
			</div>
			{/**Display food */}
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
				{foods.map((item, index) => (
					<div
						key={index}
						className='border shadow-lg hover:scale-105 duration-300 rounded-lg'
					>
						<img
							src={item.image}
							alt={item.name}
							className=' w-full h-[200px] object-cover rounded-t-lg '
						/>
						<div className='flex justify-between px-2 py-4'>
							<p className=' font-bold'>{item.name}</p>
							<p className=''>
								<span className=' bg-orange-500 text-white rounded-full p-1'>
									{item.price}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Food
