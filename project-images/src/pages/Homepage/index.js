import {
	ArrowsAltOutlined,
	DownloadOutlined,
	SaveOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
import Masonry from 'react-responsive-masonry';
const { Meta } = Card;

const Homepage = ({images}) => {
	

	return (
		<Masonry columnsCount={4} gutter='10px'>
			{images.map((image, i) => (
				<Card
					key={image.id}
					cover={<img alt={image.nameImage} src={image.link} />}
					actions={[
						<DownloadOutlined key='download' />,
						<ArrowsAltOutlined key='open-link' />,
						<SaveOutlined key='save-image' />,
					]}
				>
					<Meta
						avatar={<Avatar>{image.author.name[0]}</Avatar>}
						title={image.author.name}
					/>
				</Card>
			))}
		</Masonry>
	);
};

export default Homepage;
