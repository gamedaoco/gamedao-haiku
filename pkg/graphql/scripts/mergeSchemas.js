const fs = require('fs')
const { loadSchema } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')
const { UrlLoader } = require('@graphql-tools/url-loader')
const { printSchema, introspectionFromSchema } = require('graphql')
const { stitchSchemas } = require('@graphql-tools/stitch')

const remoteList = [
	'https://gql-rmrk2-prod.graphcdn.app/',
	'https://app.gc.subsquid.io/beta/test-gamedao-indexer/v001/graphql',
]

;(async () => {
	const path = './src/schema/'
	const files = fs
		.readdirSync(path)
		.filter((name) => name.endsWith('.graphql'))
		.filter((name) => name !== 'schema.graphql')

	let schemas = []
	for (let fileName of files) {
		const localSchema = await loadSchema(path + fileName, {
			loaders: [new GraphQLFileLoader()],
		})

		const introspection = JSON.stringify(introspectionFromSchema(localSchema))
		fs.writeFileSync(`./src/schema/json/${fileName.split('.')[0]}.json`, introspection)
		schemas.push(localSchema)
	}

	for (let url of remoteList) {
		schemas.push(
			await loadSchema(url, {
				loaders: [new UrlLoader()],
			}),
		)
	}

	const stitchSchema = stitchSchemas({
		subschemas: schemas,
	})

	fs.writeFileSync(`./src/schema/schema.graphql`, printSchema(stitchSchema))
})()
