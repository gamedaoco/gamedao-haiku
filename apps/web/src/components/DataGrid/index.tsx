import dynamic from 'next/dynamic'

export const DataGrid = dynamic(() => import('@mui/x-data-grid').then((m) => m.DataGrid), {
	ssr: false,
	suspense: true,
})
