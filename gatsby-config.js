

module.exports = {
	siteMetadata: {
		title: 'Marek Matejovic Portfolio',
		description: 'Personal web developer portfolio',
		author: '@marekmatejovic'
	},
	plugins: [
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				includePaths: [ 'node_modules/normalize-scss/sass' ],
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
	],
}