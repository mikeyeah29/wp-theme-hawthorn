import {
	InspectorControls,
	InnerBlocks,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './editor.scss';

const ALLOWED_BLOCKS = [ 'core/paragraph', 'core/list' ];
const TEMPLATE = [
	[
		'core/paragraph',
		{
			align: 'left',
			content:
				'Leadership Capacity is designed to provide meaningful insight without requiring an initial commitment to a long coaching programme.',
			fontSize: 'sm',
		},
	],
	[
		'core/paragraph',
		{
			align: 'left',
			content:
				'Because I have your questionnaire results before we meet, your 60-minute session can focus directly on what your profile means for you, your leadership and your business.',
			fontSize: 'sm',
		},
	],
	[
		'core/paragraph',
		{
			align: 'left',
			content:
				'<strong>One questionnaire. One focused session. A personalised report.</strong>',
			fontSize: 'sm',
		},
	],
];

export default function Edit( { attributes, setAttributes } ) {
	const { heading, imageId, imageUrl, imageAlt } = attributes;
	const blockProps = useBlockProps( {
		className:
			'wp-block-group alignfull is-layout-constrained wp-block-group-is-layout-constrained',
	} );
	const { children: body, ...contentProps } = useInnerBlocksProps(
		{
			className:
				'wp-block-column is-vertically-aligned-center hawthorn-focused-section__content',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			renderAppender: InnerBlocks.ButtonBlockAppender,
			template: TEMPLATE,
		}
	);

	const selectImage = ( media ) => {
		setAttributes( {
			imageId: media.id,
			imageUrl: media.url,
			imageAlt: media.alt || '',
		} );
	};

	const removeImage = () => {
		setAttributes( {
			imageId: undefined,
			imageUrl: '',
			imageAlt: '',
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Image', 'hawthorn' ) }>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ selectImage }
							allowedTypes={ [ 'image' ] }
							value={ imageId }
							render={ ( { open } ) => (
								<div className="hawthorn-focused-section__image-controls">
									<Button
										variant="secondary"
										onClick={ open }
									>
										{ imageUrl
											? __( 'Replace image', 'hawthorn' )
											: __( 'Select image', 'hawthorn' ) }
									</Button>
									{ imageUrl && (
										<Button
											variant="link"
											isDestructive
											onClick={ removeImage }
										>
											{ __( 'Remove image', 'hawthorn' ) }
										</Button>
									) }
								</div>
							) }
						/>
					</MediaUploadCheck>
					{ imageUrl && (
						<TextControl
							label={ __( 'Alternative text', 'hawthorn' ) }
							value={ imageAlt }
							onChange={ ( value ) =>
								setAttributes( { imageAlt: value } )
							}
						/>
					) }
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="wp-block-group alignfull br has-neutral-background-color has-background is-layout-constrained wp-block-group-is-layout-constrained hawthorn-focused-section">
					<div className="wp-block-columns alignwide are-vertically-aligned-center is-layout-flex wp-block-columns-is-layout-flex">
						<div { ...contentProps }>
							<RichText
								tagName="h2"
								className="wp-block-heading has-hero-font-size hawthorn-focused-section__heading"
								value={ heading }
								allowedFormats={ [ 'core/italic' ] }
								onChange={ ( value ) =>
									setAttributes( { heading: value } )
								}
								placeholder={ __(
									'Add a heading…',
									'hawthorn'
								) }
							/>
							{ body }
						</div>
						<div className="wp-block-column is-vertically-aligned-center hawthorn-focused-section__image">
							{ imageUrl ? (
								<figure className="wp-block-image size-full">
									<img src={ imageUrl } alt={ imageAlt } />
								</figure>
							) : (
								<MediaPlaceholder
									onSelect={ selectImage }
									allowedTypes={ [ 'image' ] }
									labels={ {
										title: __(
											'Section image',
											'hawthorn'
										),
									} }
								/>
							) }
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
