import Catalog from '@/components/ui/catalog/Catalog'
import CatalogPagination from '@/components/ui/catalog/CatalogPagination'
import Heading from '@/components/ui/heading/Heading'
import Layout from '@/components/ui/layout/Layout'
import Meta from '@/components/ui/meta/Meta'
import { TypeProductPagination } from '@/types/product.interface'
import { FC } from 'react'

const Home: FC<TypeProductPagination> = ({ products, length }) => {
	return (
		<Meta title='Home'>
			<Layout>
				<CatalogPagination
					data={{ products, length }}
					title={'Freshed Products'}
				/>
			</Layout>
		</Meta>
	)
}

export default Home
