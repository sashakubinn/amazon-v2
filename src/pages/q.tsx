import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/components/ui/layout/Layout'
import Meta from '@/components/ui/meta/Meta'
import { ProductService } from '@/services/product/product.service'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const SearchPage: NextPage = () => {
	const { query } = useRouter()
	const { data } = useQuery(['search products', query.term], () =>
		ProductService.getAll({
			searchTerm: query.term as string,
		})
	)
	return (
		<Meta title='Search'>
			<Layout>
				<Catalog
					products={data?.products || []}
					title={`Пошук по запиту "${query.term || ''}" `}
				/>
			</Layout>
		</Meta>
	)
}

export default SearchPage
