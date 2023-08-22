import {
	ArrowsAltOutlined,
	DownloadOutlined,
	SaveOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
import Masonry from 'react-responsive-masonry';
const { Meta } = Card;

const CardImage = ({ image }) => {
	const handleDownload = () => {
		console.log('Downloading');
	};

	const handleOpenExternalLink = (linkExternal) => {
		window.open(linkExternal, '_blank');
	};

	const handleSaveImage = () => {
		console.log('Saving');
	};

	return (
		<Card
			cover={<img alt={image.nameImage} src={image.link} />}
			actions={[
				<span onClick={handleDownload}>
					<DownloadOutlined key='download' />
				</span>,
				<span
					onClick={() => {
						handleOpenExternalLink(image.linkExternal);
					}}
				>
					<ArrowsAltOutlined key='open-link' />
				</span>,
				<span onClick={handleSaveImage}>
					<SaveOutlined key='save-image' />
				</span>,
			]}
		>
			<Meta
				avatar={<Avatar>{image.author.name[0]}</Avatar>}
				title={image.author.name}
			/>
		</Card>
	);
};

export default CardImage;
