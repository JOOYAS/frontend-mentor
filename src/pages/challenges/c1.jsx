import React from 'react'
import omeletteImage from "/src/assets/images/image-omelette.jpeg";

const C1 = () => {
	return (
		<div className='xl:bg-weird_rose xl:p-80 xl:py-28 text-gray-700'>
			<div className='bg-white text-stone-600 md:rounded-2xl'>
				<figure className='xl:p-8'>
					<img
						className='w-full xl:rounded-xl overflow-hidden'
						src={omeletteImage}
						alt='picture of an omelette'
					/>
				</figure>

				<div className='px-10'>
					<h1 className='text-4xl pb-8 text-stone-900 font-normal font-youngserif'>
						Simple Omelette Recipe
					</h1>
					<p className='font-outfit font-normal text-[16px]'>
						An easy and quick dish, perfect for any meal. This
						classic omelette combines beaten eggs cooked to
						perfection, optionally filled with your choice of
						cheese, vegetables, or meats.
					</p>
					<div className='mt-8 bg-rose-50 rounded-xl p-5'>
						<h3 className='text-xl text-stone-900 font-bold font-outfit pb-4'>
							Preparation time
						</h3>
						<ul className='list-disc px-6 space-y-2 font-outfit'>
							<li>
								<div className='pl-6'>
									<span className='text-stone-900 font-bold'>
										Total:
									</span>{" "}
									Approximately 10 minutes
								</div>
							</li>
							<li>
								<div className='pl-6'>
									<span className='text-stone-900 font-bold'>
										Preparation:
									</span>{" "}
									5 minutes
								</div>
							</li>
							<li>
								<div className='pl-6'>
									<span className='text-stone-900 font-bold'>
										Cooking:
									</span>{" "}
									5 minutes
								</div>
							</li>
						</ul>
					</div>
					<div className='my-6'>
						<h2 className='text-2xl font-bold font-youngserif text-brown-800'>
							Ingredients
						</h2>
						<ul className='list-disc p-6 space-y-2 font-outfit'>
							<li>
								<div className='pl-6'>2-3 large eggs</div>
							</li>
							<li>
								<div className='pl-6'>Salt, to taste</div>
							</li>
							<li>
								<div className='pl-6'>Pepper, to taste</div>
							</li>
							<li>
								<div className='pl-6'>
									1 tablespoon of butter or oil
								</div>
							</li>
							<li>
								<div className='pl-6'>
									Optional fillings: cheese, diced vegetables,
									cooked meats,herbs
								</div>
							</li>
						</ul>
					</div>
					<hr />
					<div className='my-6'>
						<h2 className='font-bold text-2xl pb-6 font-youngserif text-brown-800'>
							Instructions
						</h2>
						<ol className='list-decimal pl-6 list-outside space-y-4 font-outfit'>
							<li>
								<div className='pl-6'>
									<span className='font-bold'>
										Beat the eggs:
									</span>{" "}
									In a bowl, beat the eggs with a pinch of
									salt and pepper until they are well mixed.
									You can add a tablespoon of water or milk
									for a fluffier texture.
								</div>
							</li>
							<li>
								<div className='pl-6'>
									<span className=' font-bold'>
										Heat the pan:
									</span>{" "}
									Place a non-stick frying pan over medium
									heat and add butter or oil.
								</div>
							</li>
							<li>
								<div className='pl-6'>
									<span className='text-stone-900 font-bold'>
										Cook the omelette:
									</span>{" "}
									Once the butter is melted and bubbling, pour
									in the eggs. Tilt the pan to ensure the eggs
									evenly coat the surface.
								</div>
							</li>
							<li>
								<div className='pl-6'>
									<span className='text-stone-900 font-bold'>
										Add fillings (optional):
									</span>{" "}
									When the eggs begin to set at the edges but
									are still slightly runny in the middle,
									sprinkle your chosen fillings over one half
									of the omelette.
								</div>
							</li>
							<li>
								<div className='pl-6'>
									<span className='text-stone-900 font-bold'>
										Fold and serve:
									</span>{" "}
									As the omelette continues to cook, carefully
									lift one edge and fold it over the fillings.
									Let it cook for another minute, then slide
									it onto a plate.
								</div>
							</li>
							<li>
								<div className='pl-6'>
									<span className='text-stone-900 font-bold'>
										Enjoy:
									</span>{" "}
									Serve hot, with additional salt and pepper
									if needed.
								</div>
							</li>
						</ol>
					</div>
					<hr />
					<div className='my-6'>
						<h2 className='text-2xl font-bold mb-6 font-youngserif text-brown-800'>
							Nutrition
						</h2>
						<p className='text-[16px]'>
							The table below shows nutritional values per serving
							without the additional fillings.
						</p>
						<table className='my-6 text-lg w-full'>
							<tbody className='leading-[60px]'>
								<tr className='border-b-4'>
									<td>Calories</td>
									<td className='text-stone-900 font-bold'>
										277kcal
									</td>
								</tr>
								<tr className=' border-b-4'>
									<td>Carbs</td>
									<td className='text-stone-900 font-bold'>
										0g
									</td>
								</tr>
								<tr className='border-b-4'>
									<td>Protein</td>
									<td className='text-stone-900 font-bold'>
										20g
									</td>
								</tr>
								<tr>
									<td>Fat</td>
									<td className='text-stone-900 font-bold'>
										22g
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className='attribution text-center'>
						Challenge by{" "}
						<a
							href='https://www.frontendmentor.io?ref=challenge'
							target='_blank'
						>
							Frontend Mentor
						</a>
						. Coded by{" "}
						<a href='https://github.com/JOOYAS'>SAYOOJ</a>.
					</div>
				</div>
			</div>
		</div>
	);
};

export default C1