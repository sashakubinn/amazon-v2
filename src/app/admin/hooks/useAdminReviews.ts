import { formatDate } from '@/utils/format-data'
import { getAdminUrl } from '@/config/url.config'
import { IListItem } from '@/components/ui/admin/admin-list/admin-list.interface'
import { ReviewService } from '@/services/review/review.service'
import { useMutation, useQuery } from '@tanstack/react-query'
export const useAdminReviews = () => {
	const { data } = useQuery({
		queryKey: ['get admin reviews'],
		queryFn: () => ReviewService.getAll(),
		select: ({ data }) =>
			data.map((review): IListItem => {
				return {
					id: review.id,
					viewUrl: `/review/${review.rating}`,
					editUrl: getAdminUrl(`/review/edit/${review.id}`),
					items: [
						review.user.name,
						Array.from({ length: Number(review.rating) })
							.map(() => '⭐')
							.join('   '),
						formatDate(review.createdAt),
					],
				}
			}),
	})
	return {
		data,
	}
}
