import {
	ArrowsAltOutlined,
	DownloadOutlined,
	SaveOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { useParams } from 'react-router-dom';
import CardImage from '../../components/CardImage';
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
				<CardImage key={image.id} image={image} />
			))}
		</Masonry>
	);
};

export default Category;
