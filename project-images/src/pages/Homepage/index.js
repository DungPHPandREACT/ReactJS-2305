import {
	ArrowsAltOutlined,
	DownloadOutlined,
	SaveOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
import Masonry from 'react-responsive-masonry';
import CardImage from '../../components/CardImage';
const { Meta } = Card;

const Homepage = ({ images }) => {
	return (
		<Masonry columnsCount={4} gutter='10px'>
			{images.map((image, i) => (
				<CardImage key={image.id} image={image} />
			))}
		</Masonry>
	);
};

export default Homepage;
