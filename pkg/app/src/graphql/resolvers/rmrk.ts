// import { fetchRemarks, getRemarksFromBlocks, getLatestFinalizedBlock, Consolidator } from 'rmrk-tools'

// const to = await getLatestFinalizedBlock(api);

// const fetchAndConsolidate = async () => {
// 	try {
// 		const remarkBlocks = await fetchRemarks(api, 6431422, to, ['']);
// 		if (remarkBlocks && !isEmpty(remarkBlocks)) {
// 			const remarks = getRemarksFromBlocks(remarkBlocks, ['']);
// 			const consolidator = new Consolidator();
// 			const { nfts, collections } = consolidator.consolidate(remarks);
// 			console.log('Consolidated nfts:', nfts);
// 			console.log('Consolidated collections:', collections);
// 			return nfts
// 		}
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

export const rmrk = () => {
	// 	if (req.method === 'POST' && req.body.key == 'hello') {
	// 		// account address
	// 		// const { id } = req.body
	// 		try {
	// 			const remarkBlocks = await fetchRemarks(api, 6431422, to, ['']);
	// 			if (remarkBlocks && !isEmpty(remarkBlocks)) {
	// 				const remarks = getRemarksFromBlocks(remarkBlocks, ['']);
	// 				const consolidator = new Consolidator();
	// 				const { nfts, collections } = consolidator.consolidate(remarks);
	// 				console.log('Consolidated nfts:', nfts);
	// 				console.log('Consolidated collections:', collections);
	// 				return nfts
	// 			}
	// 			res.setHeader('Content-Type', 'application/json')
	// 			res.status(200).json(JSON.stringify(content))
	// 		} catch (error) {
	// 			console.error('ERROR', error)
	// 			res.status(500).send({ error: 'failed to fetch data' })
	// 		}
	// 	} else {
	// 		res.status(400).send('not authorised.')
	// 	}
}
