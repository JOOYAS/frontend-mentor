import ChallengeShowcase from "./pages/challenges";
import C1 from "./pages/challenges/c1";
import Home from "./pages/home";

const routes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/challenge",
		element: (
			<ChallengeShowcase
				challenges={[
					{
						title: "NFT Preview Card",
						description: "A responsive NFT preview card component.",
						link: "https://yourlink.com/nft",
					},
					{
						title: "E-commerce Product Page",
						description: "A detailed product page with image zoom.",
						link: "https://yourlink.com/ecommerce",
					},
					{
						title: "Interactive Pricing Component",
						description:
							"Pricing component with toggle and animations.",
						link: "https://yourlink.com/pricing",
					},
				]}
			/>
		),
	},
	{
		path: "/challenge/1",
		element: <C1 />,
	},
];

export default routes;
