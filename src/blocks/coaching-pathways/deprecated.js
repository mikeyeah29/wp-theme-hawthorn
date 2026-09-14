import { createBlock } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';

import metadata from './block.json';

function ConnectorLines( { legacy = false } ) {
	const paths = legacy
		? [ 'M250 0 V45 Q250 70 275 70 H500', 'M750 0 V45 Q750 70 725 70 H500' ]
		: [
				'M250 0 V66 Q250 70 254 70 H500',
				'M750 0 V66 Q750 70 746 70 H500',
		  ];

	return (
		<div className="coaching-pathways__connectors" aria-hidden="true">
			<svg viewBox="0 0 1000 140" preserveAspectRatio="none">
				<path d={ paths[ 0 ] } />
				<path d={ paths[ 1 ] } />
				<path d="M500 70 V140" />
			</svg>
		</div>
	);
}

function PathwayPanel( {
	position,
	eyebrow,
	heading,
	content,
	buttonText,
	buttonUrl,
	legacy = false,
} ) {
	const button = (
		<RichText.Content
			tagName="a"
			className={ `coaching-pathways__button wp-block-button__link wp-element-button${
				legacy ? '' : ' is-style-hawthorn-arrow'
			}` }
			value={ buttonText }
			href={ buttonUrl || undefined }
		/>
	);

	return (
		<div
			className={ `coaching-pathways__panel coaching-pathways__panel--${ position }` }
		>
			<RichText.Content
				tagName="p"
				className="coaching-pathways__eyebrow"
				value={ eyebrow }
			/>
			<RichText.Content
				tagName="h3"
				className="coaching-pathways__heading"
				value={ heading }
			/>
			<RichText.Content
				tagName="p"
				className="coaching-pathways__content"
				value={ content }
			/>
			{ legacy ? (
				button
			) : (
				<div className="wp-block-button is-style-hawthorn-arrow">
					{ button }
				</div>
			) }
		</div>
	);
}

function saveStatic( { attributes, legacy = false } ) {
	const {
		leftEyebrow,
		leftHeading,
		leftContent,
		leftButtonText,
		leftButtonUrl,
		rightEyebrow,
		rightHeading,
		rightContent,
		rightButtonText,
		rightButtonUrl,
		bottomHeading,
		bottomContent,
	} = attributes;

	return (
		<div { ...useBlockProps.save( { className: 'coaching-pathways' } ) }>
			<div className="coaching-pathways__top">
				<PathwayPanel
					position="left"
					eyebrow={ leftEyebrow }
					heading={ leftHeading }
					content={ leftContent }
					buttonText={ leftButtonText }
					buttonUrl={ leftButtonUrl }
					legacy={ legacy }
				/>
				<PathwayPanel
					position="right"
					eyebrow={ rightEyebrow }
					heading={ rightHeading }
					content={ rightContent }
					buttonText={ rightButtonText }
					buttonUrl={ rightButtonUrl }
					legacy={ legacy }
				/>
			</div>

			<ConnectorLines legacy={ legacy } />

			<div className="coaching-pathways__panel coaching-pathways__panel--bottom">
				<RichText.Content
					tagName="h3"
					className="coaching-pathways__heading"
					value={ bottomHeading }
				/>
				<RichText.Content
					tagName="p"
					className="coaching-pathways__content"
					value={ bottomContent }
				/>
			</div>
		</div>
	);
}

function migrate( attributes ) {
	const makePanel = ( position, values ) => {
		const innerBlocks = [
			createBlock( 'core/heading', {
				className: 'coaching-pathways__heading',
				content: values.heading || '',
				level: 3,
			} ),
			createBlock( 'core/paragraph', {
				className: 'coaching-pathways__content',
				content: values.content || '',
			} ),
		];

		if ( position !== 'bottom' ) {
			innerBlocks.unshift(
				createBlock( 'core/paragraph', {
					className: 'coaching-pathways__eyebrow',
					content: values.eyebrow || '',
				} )
			);

			innerBlocks.push(
				createBlock( 'core/buttons', {}, [
					createBlock( 'core/button', {
						className: 'is-style-hawthorn-arrow',
						text: values.buttonText || '',
						url: values.buttonUrl || '',
					} ),
				] )
			);
		}

		return createBlock(
			'hawthorn/coaching-pathways-panel',
			{ position },
			innerBlocks
		);
	};

	return [
		{},
		[
			makePanel( 'left', {
				eyebrow: attributes.leftEyebrow,
				heading: attributes.leftHeading,
				content: attributes.leftContent,
				buttonText: attributes.leftButtonText,
				buttonUrl: attributes.leftButtonUrl,
			} ),
			makePanel( 'right', {
				eyebrow: attributes.rightEyebrow,
				heading: attributes.rightHeading,
				content: attributes.rightContent,
				buttonText: attributes.rightButtonText,
				buttonUrl: attributes.rightButtonUrl,
			} ),
			createBlock( 'hawthorn/coaching-pathways-connector' ),
			makePanel( 'bottom', {
				heading: attributes.bottomHeading,
				content: attributes.bottomContent,
			} ),
		],
	];
}

export default [
	{
		attributes: metadata.attributes,
		migrate,
		save: ( props ) => saveStatic( props ),
	},
	{
		attributes: metadata.attributes,
		migrate,
		save: ( props ) => saveStatic( { ...props, legacy: true } ),
	},
];
