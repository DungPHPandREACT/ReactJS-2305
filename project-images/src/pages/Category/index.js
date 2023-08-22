import {
	ArrowsAltOutlined,
	DownloadOutlined,
	SaveOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { useParams } from 'react-router-dom';
const { Meta } = Card;

const Category = ({ images }) => {
	const [listImage, setListImage] = useState([]);
	const params = useParams();

	useEffect(() => {
		const listImageTemp = images.filter(
			(image) => image.category === params.categoryName
		);

		setListImage([...listImageTemp]);
	}, [params.categoryName]);

	return (
		<Masonry columnsCount={4} gutter='10px'>
			{listImage.map((image, i) => (
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

export default Category;
