import { EnumProductSort } from '@/services/product/product.types'
import { formatEnumLabel } from '@/utils/format-enum-label'
import { Dispatch, FC, SetStateAction } from 'react'
import s from './SortDropDown.module.css'

interface ISortDropDown {
	sortType: EnumProductSort
	setSortType: (sortType: EnumProductSort) => void
}

const SortDropDown: FC<ISortDropDown> = ({ setSortType, sortType }) => {
	const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedSort = e.target.value as EnumProductSort
		setSortType(selectedSort)
	}
	return (
		<div className={s.container}>
			<select
				value={sortType}
				onChange={handleSortChange}
				className={s.wrapper}
			>
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map(key => {
					return (
						<option value={EnumProductSort[key]} key={key}>
							{EnumProductSort[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropDown
