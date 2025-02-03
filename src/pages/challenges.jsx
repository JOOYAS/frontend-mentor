import React from "react";

const ChallengeShowcase = ({ challenges = [] }) => {
	return (
		<div className='p-6'>
			<h1 className='text-3xl font-bold mb-6'>
				Frontend Mentor Challenges
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{challenges.map((challenge, index) => (
					<div
						key={index}
						className='border p-4 rounded-lg shadow-lg'
					>
						<img
							src={`https://picsum.photos/300/200?random=${index}`}
							alt={challenge.title}
							className='w-full h-40 object-cover rounded-lg mb-4'
						/>
						<h2 className='text-xl font-semibold'>
							{challenge.title}
						</h2>
						<p className='text-gray-600'>{challenge.description}</p>
						<a
							href={challenge.link}
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-500 mt-2 inline-block'
						>
							View Challenge
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default ChallengeShowcase;
