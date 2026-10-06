import { registerBlockType, registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';
import deprecated from './deprecated';
import Edit from './edit';
import save from './save';
import './style.scss';

const buttonBlock = [
	'core/buttons',
	{
		layout: {
			type: 'flex',
			justifyContent: 'center',
		},
	},
	[
		[
			'core/button',
			{
				className: 'is-style-hawthorn-arrow',
				fontSize: 'sm',
				gradient: 'sage-glow',
				text: __( 'Add call to action', 'hawthorn' ),
				textColor: 'primary',
			},
		],
	],
];

const introBlock = [
	'core/paragraph',
	{
		className: 'hawthorn-hero__intro',
		fontSize: 'sm',
		placeholder: __( 'Add supporting text…', 'hawthorn' ),
	},
];

registerBlockType( metadata.name, {
	deprecated,
	edit: Edit,
	save,
} );

registerBlockVariation( metadata.name, {
	name: 'standard',
	title: __( 'Hero – Standard', 'hawthorn' ),
	description: __( 'A page heading and call to action.', 'hawthorn' ),
	icon: 'cover-image',
	isDefault: true,
	attributes: {
		variant: 'standard',
	},
	innerBlocks: [ buttonBlock ],
	scope: [ 'inserter' ],
} );

registerBlockVariation( metadata.name, {
	name: 'with-intro',
	title: __( 'Hero – With Intro', 'hawthorn' ),
	description: __(
		'A page heading, short introduction and call to action.',
		'hawthorn'
	),
	icon: 'align-center',
	attributes: {
		variant: 'with-intro',
	},
	innerBlocks: [ introBlock, buttonBlock ],
	scope: [ 'inserter' ],
} );

registerBlockVariation( metadata.name, {
	name: 'detailed',
	title: __( 'Hero – Detailed', 'hawthorn' ),
	description: __(
		'A contextual label, heading, introduction, call to action and supporting note.',
		'hawthorn'
	),
	icon: 'welcome-write-blog',
	attributes: {
		variant: 'detailed',
	},
	innerBlocks: [
		[
			'core/breadcrumbs',
			{
				align: 'center',
				showHomeItem: false,
			},
		],
		introBlock,
		buttonBlock,
		[
			'core/paragraph',
			{
				className: 'hawthorn-hero__note',
				fontSize: 'sm',
				placeholder: __( 'Add a supporting note…', 'hawthorn' ),
				textColor: 'primary',
			},
		],
	],
	scope: [ 'inserter' ],
} );
