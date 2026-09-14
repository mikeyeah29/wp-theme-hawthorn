import { RichText, useBlockProps } from '@wordpress/block-editor';

function ConnectorLines() {
	return (
		<div className="coaching-pathways__connectors" aria-hidden="true">
			<svg viewBox="0 0 1000 140" preserveAspectRatio="none">
				<path d="M250 0 V45 Q250 70 275 70 H500" />
				<path d="M750 0 V45 Q750 70 725 70 H500" />
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
} ) {
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
			<div className="wp-block-button is-style-hawthorn-arrow">
				<RichText.Content
					tagName="a"
					className="coaching-pathways__button wp-block-button__link wp-element-button is-style-hawthorn-arrow"
					value={ buttonText }
					href={ buttonUrl || undefined }
				/>
			</div>
		</div>
	);
}

export default function save( { attributes } ) {
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
				/>
				<PathwayPanel
					position="right"
					eyebrow={ rightEyebrow }
					heading={ rightHeading }
					content={ rightContent }
					buttonText={ rightButtonText }
					buttonUrl={ rightButtonUrl }
				/>
			</div>

			<ConnectorLines />

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
