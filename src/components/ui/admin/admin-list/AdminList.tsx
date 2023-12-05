'use client'
import { FC } from 'react'
import { IListItem } from './admin-list.interface'
import AdminListItem from './AdminListItem'
import s from './AdminList.module.css'

interface IAdminList {
	listItems?: IListItem[]
	removeHandler?: (id: number) => void
}

const AdminList: FC<IAdminList> = ({ listItems = [], removeHandler }) => {
	return (
		<div>
			{listItems.length ? (
				listItems.map(listItem => (
					<AdminListItem
						listItem={listItem}
						removeHandler={
							removeHandler ? () => removeHandler(listItem.id) : undefined
						}
						key={listItem.id}
					/>
				))
			) : (
				<div className={s.notFound}>Elements not found</div>
			)}
		</div>
	)
}

export default AdminList
