import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './editor.scss';

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
	onChangeEyebrow,
	onChangeHeading,
	onChangeContent,
	onChangeButtonText,
} ) {
	return (
		<div
			className={ `coaching-pathways__panel coaching-pathways__panel--${ position }` }
		>
			<RichText
				tagName="p"
				className="coaching-pathways__eyebrow"
				value={ eyebrow }
				onChange={ onChangeEyebrow }
				placeholder={ __( 'Add an eyebrow…', 'hawthorn' ) }
				allowedFormats={ [] }
			/>
			<RichText
				tagName="h3"
				className="coaching-pathways__heading"
				value={ heading }
				onChange={ onChangeHeading }
				placeholder={ __( 'Add a heading…', 'hawthorn' ) }
			/>
			<RichText
				tagName="p"
				className="coaching-pathways__content"
				value={ content }
				onChange={ onChangeContent }
				placeholder={ __( 'Add some text…', 'hawthorn' ) }
			/>
			<div className="wp-block-button is-style-hawthorn-arrow">
				<RichText
					tagName="span"
					className="coaching-pathways__button wp-block-button__link wp-element-button is-style-hawthorn-arrow"
					value={ buttonText }
					onChange={ onChangeButtonText }
					placeholder={ __( 'Button text…', 'hawthorn' ) }
					allowedFormats={ [] }
				/>
			</div>
		</div>
	);
}

export default function Edit( { attributes, setAttributes } ) {
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
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Button links', 'hawthorn' ) }>
					<TextControl
						label={ __( 'Left button URL', 'hawthorn' ) }
						value={ leftButtonUrl }
						onChange={ ( value ) =>
							setAttributes( { leftButtonUrl: value } )
						}
						type="url"
					/>
					<TextControl
						label={ __( 'Right button URL', 'hawthorn' ) }
						value={ rightButtonUrl }
						onChange={ ( value ) =>
							setAttributes( { rightButtonUrl: value } )
						}
						type="url"
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { className: 'coaching-pathways' } ) }>
				<div className="coaching-pathways__top">
					<PathwayPanel
						position="left"
						eyebrow={ leftEyebrow }
						heading={ leftHeading }
						content={ leftContent }
						buttonText={ leftButtonText }
						onChangeEyebrow={ ( value ) =>
							setAttributes( { leftEyebrow: value } )
						}
						onChangeHeading={ ( value ) =>
							setAttributes( { leftHeading: value } )
						}
						onChangeContent={ ( value ) =>
							setAttributes( { leftContent: value } )
						}
						onChangeButtonText={ ( value ) =>
							setAttributes( { leftButtonText: value } )
						}
					/>
					<PathwayPanel
						position="right"
						eyebrow={ rightEyebrow }
						heading={ rightHeading }
						content={ rightContent }
						buttonText={ rightButtonText }
						onChangeEyebrow={ ( value ) =>
							setAttributes( { rightEyebrow: value } )
						}
						onChangeHeading={ ( value ) =>
							setAttributes( { rightHeading: value } )
						}
						onChangeContent={ ( value ) =>
							setAttributes( { rightContent: value } )
						}
						onChangeButtonText={ ( value ) =>
							setAttributes( { rightButtonText: value } )
						}
					/>
				</div>

				<ConnectorLines />

				<div className="coaching-pathways__panel coaching-pathways__panel--bottom">
					<RichText
						tagName="h3"
						className="coaching-pathways__heading"
						value={ bottomHeading }
						onChange={ ( value ) =>
							setAttributes( { bottomHeading: value } )
						}
						placeholder={ __( 'Add a heading…', 'hawthorn' ) }
					/>
					<RichText
						tagName="p"
						className="coaching-pathways__content"
						value={ bottomContent }
						onChange={ ( value ) =>
							setAttributes( { bottomContent: value } )
						}
						placeholder={ __( 'Add some text…', 'hawthorn' ) }
					/>
				</div>
			</div>
		</>
	);
}
