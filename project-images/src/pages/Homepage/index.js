import {
	ArrowsAltOutlined,
	DownloadOutlined
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
import Masonry from 'react-responsive-masonry';
const { Meta } = Card;

const Homepage = () => {
	const images = [
		'https://picsum.photos/200/300?image=1050',
		'https://picsum.photos/300/300?image=206',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZ1f1JcGVTVbhLJewX-24zWuvFvAnBM7qxA&usqp=CAU',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&usqp=CAU',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_P3z6mq60lUDnN6iVJ9YENrp2Ur424qIww&usqp=CAU',
		'https://picsum.photos/200/300?image=1050',
		'https://picsum.photos/300/300?image=206',
	];

	return (
		<Masonry columnsCount={4} gutter='10px'>
			{images.map((image, i) => (
				<Card
					cover={<img alt='example' src={image} />}
					actions={[
						<DownloadOutlined key='download' />,
						<ArrowsAltOutlined key='open-link' />,
						// <EllipsisOutlined key='ellipsis' />,
					]}
				>
					<Meta
						avatar={
							<Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
						}
						title='Card title'
						description='This is the description'
					/>
				</Card>
			))}
		</Masonry>
	);
};

export default Homepage;
