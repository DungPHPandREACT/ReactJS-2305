import React, { useState } from 'react';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const Layouts = (props) => {
	const listMenu = [
		{
			key: 'home',
			label: 'Home',
		},
		{
			type: 'divider',
		},
		{
			key: 'landscape',
			label: 'Lanscape',
		},
		{
			key: 'car',
			label: 'Car',
		},
		{
			key: 'fashion',
			label: 'Fashion',
		},
		{
			key: 'wallpaper',
			label: 'Wallpaper',
		},
		{
			key: 'webssites',
			label: 'Websites',
		},
		{
			key: 'wildlift',
			label: 'Wildlife',
		},
		{
			key: 'food',
			label: 'Food',
		},
		{
			key: 'sports',
			label: 'Sports',
		},
		{
			key: 'art',
			label: 'Art',
		},
		{
			key: 'travel',
			label: 'Travel',
		},
		{
			key: 'quotes',
			label: 'Quotes',
		},
		{
			key: 'pets',
			label: 'Pets',
		},
		{
			key: 'scientific',
			label: 'Scientific',
		},
	];
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const navigate = useNavigate();

	const handleRedirectPage = ({ key }) => {
		if (key === 'home') {
			navigate('/');
		} else {
			navigate(`/category/${key}`);
		}
	};

	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className='demo-logo-vertical' />
				<Menu
					theme='light'
					mode='inline'
					defaultSelectedKeys={['home']}
					items={listMenu}
					onSelect={handleRedirectPage}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				>
					<Button
						type='text'
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: '16px',
							width: 64,
							height: 64,
						}}
					/>
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
					}}
				>
					{props.children}
				</Content>
			</Layout>
		</Layout>
	);
};
export default Layouts;
