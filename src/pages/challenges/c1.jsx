import React from 'react'

const C1 = () => {
  return (
      <div className='xl:bg-rose-100 xl:px-80 xl:py-28 '>
        <div className='bg-white md:rounded-xl'>
            <figure className='xl:p-6'>
                <img
              className="w-full xl:rounded-lg overflow-hidden"
              src="/src/assets/images/image-omelette.jpeg"
              alt="picture of an omelette"
          />
            </figure>
          
          <div className="px-10">
              <h1 className="text-4xl py-8 font-bold font-youngserif">
                  Simple Omelette Recipe
              </h1>
              <p className="font-outfit">
                  An easy and quick dish, perfect for any meal. This classic
                  omelette combines beaten eggs cooked to perfection, optionally
                  filled with your choice of cheese, vegetables, or meats.
              </p>
              <div className="mt-8 bg-gray-50 rounded-xl p-5">
                  <h3 className="text-2xl font-bold font-youngserif pb-4">Preparation time</h3>
                  <ul className="list-disc px-6 space-y-2 font-outfit">
                        <li>
                            <div className='pl-6'><span className=' font-semibold'>Total:</span> Approximately 10 minutes</div>
                        </li>
                      <li>
                        <div className='pl-6'><span className=' font-semibold'>Preparation:</span> 5 minutes</div></li>
                      <li><div className='pl-6'><span className=' font-semibold'>Cooking:</span> 5 minutes</div></li>
                  </ul>
              </div>
              <div className="my-6">
                  <h2 className="text-3xl font-bold">Ingredients</h2>
                  <ul className="list-disc p-6 space-y-2 font-outfit">
                      <li><div className='pl-6'>2-3 large eggs</div></li>
                      <li><div className='pl-6'>Salt, to taste</div></li>
                      <li><div className='pl-6'>Pepper, to taste</div></li>
                      <li><div className='pl-6'>1 tablespoon of butter or oil</div></li>
                      <li>
                          <div className='pl-6'>Optional fillings: cheese, diced vegetables, cooked
                          meats,herbs</div>
                      </li>
                  </ul>
              </div>
              <hr />
              <div className="my-6">
                  <h2 className="font-bold text-3xl pb-6 font-youngserif">Instructions</h2>
                  <ol className="list-decimal pl-6 list-outside space-y-4 font-outfit">
                      <li>
                          <div className='pl-6'><span className=' font-semibold'>Beat the eggs:</span> In a bowl, beat the eggs with a pinch
                          of salt and pepper until they are well mixed. You can
                          add a tablespoon of water or milk for a fluffier
                          texture.</div>
                      </li>
                      <li>
                          <div className='pl-6'><span className=' font-semibold'>Heat the pan:</span> Place a non-stick frying pan over medium
                          heat and add butter or oil.
                          </div>
                      </li>
                      <li>
                          <div className='pl-6'><span className=' font-semibold'>Cook the omelette:</span> Once the butter is melted and
                          bubbling, pour in the eggs. Tilt the pan to ensure the
                          eggs evenly coat the surface.
                          </div>
                      </li>
                      <li>
                          <div className='pl-6'><span className=' font-semibold'>Add fillings (optional):</span> When the eggs begin to set at
                          the edges but are still slightly runny in the middle,
                          sprinkle your chosen fillings over one half of the
                          omelette.
                          </div>
                      </li>
                      <li>
                          <div className='pl-6'><span className=' font-semibold'>Fold and serve:</span> As the omelette continues to cook,
                          carefully lift one edge and fold it over the fillings.
                          Let it cook for another minute, then slide it onto a
                          plate.
                          </div>
                      </li>
                      <li>
                          <div className='pl-6'><span className=' font-semibold'>Enjoy:</span> Serve hot, with additional salt and pepper if
                          needed.
                          </div>
                      </li>
                  </ol>
              </div>
              <hr />
              <div className="my-6">
                  <h2 className="text-3xl font-bold mb-6">Nutrition</h2>
                  <p>
                      The table below shows nutritional values per serving
                      without the additional fillings.
                  </p>
                  <table className="my-6 text-lg w-full">
                      <tbody className="leading-[60px]">
                          <tr className="border-b-4">
                              <td>Calories</td>
                              <td className="font-bold">277kcal</td>
                          </tr>
                          <tr className="border-b-4">
                              <td>Carbs</td>
                              <td className="font-bold">0g</td>
                          </tr>
                          <tr className="border-b-4">
                              <td>Protein</td>
                              <td className="font-bold">20g</td>
                          </tr>
                          <tr>
                              <td>Fat</td>
                              <td className="font-bold">22g</td>
                          </tr>
                      </tbody>
                  </table>
              </div>

              <div className="attribution text-center">
                  Challenge by{" "}
                  <a
                      href="https://www.frontendmentor.io?ref=challenge"
                      target="_blank"
                  >
                      Frontend Mentor
                  </a>
                  . Coded by <a href="https://github.com/JOOYAS">SAYOOJ</a>.
              </div>
          </div>
        </div>
      </div>
  );
}

export default C1