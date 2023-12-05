import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/components/ui/layout/Layout'
import Meta from '@/components/ui/meta/Meta'
import { useProfile } from '@/hooks/useProfile'
import { NextPage } from 'next'

const FavoritesPage: NextPage = () => {
	const { profile } = useProfile(4)

	return (
		<Meta title='Favorites'>
			<Layout>
				<Catalog products={profile?.favorites || []} title='Favorites' />
			</Layout>
		</Meta>
	)
}

export default FavoritesPage
