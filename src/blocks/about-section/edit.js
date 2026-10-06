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

const ALLOWED_BLOCKS = [ 'core/paragraph', 'core/buttons' ];
const TEMPLATE = [
	[
		'core/paragraph',
		{
			content: 'Most behavioural consultants understand psychology.',
			fontSize: 'sm',
		},
	],
	[
		'core/paragraph',
		{
			content: 'Most product consultants understand digital products.',
			fontSize: 'sm',
		},
	],
	[
		'core/paragraph',
		{
			content: 'Few have substantial experience in both.',
			fontSize: 'sm',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'I combine clinical psychology training with hands-on experience building and scaling digital health products, helping teams bridge the gap between behavioural science and real-world product delivery.',
			fontSize: 'sm',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'I bring psychological depth, commercial pragmatism and a focus on outcomes—not theory.',
			fontSize: 'sm',
		},
	],
	[
		'core/buttons',
		{ layout: { type: 'flex', justifyContent: 'left' } },
		[
			[
				'core/button',
				{
					className: 'is-style-hawthorn-arrow',
					fontSize: 'sm',
					gradient: 'sage-glow',
					text: 'Get In Touch',
					textColor: 'primary',
					url: '/contact',
				},
			],
		],
	],
];

export default function Edit( { attributes, setAttributes } ) {
	const { heading, imageId, imageUrl, imageAlt } = attributes;
	const blockProps = useBlockProps( {
		className:
			'wp-block-group alignfull is-layout-constrained wp-block-group-is-layout-constrained',
	} );
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'wp-block-column hawthorn-about-section__content',
			style: { flexBasis: '66.666%' },
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
								<div className="hawthorn-about-section__image-controls">
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
				<div className="wp-block-group alignfull br has-neutral-background-color has-background is-layout-constrained wp-block-group-is-layout-constrained hawthorn-about-section">
					<div className="wp-block-columns alignwide is-layout-flex wp-block-columns-is-layout-flex">
						<div
							className="wp-block-column hawthorn-about-section__image"
							style={ { flexBasis: '33.333%' } }
						>
							{ imageUrl ? (
								<figure className="wp-block-image size-full">
									<img
										src={ imageUrl }
										alt={ imageAlt }
										style={ {
											aspectRatio: '1',
											objectFit: 'cover',
										} }
									/>
								</figure>
							) : (
								<MediaPlaceholder
									onSelect={ selectImage }
									allowedTypes={ [ 'image' ] }
									labels={ {
										title: __( 'About image', 'hawthorn' ),
									} }
								/>
							) }
						</div>
						<div { ...innerBlocksProps }>
							<RichText
								tagName="h2"
								className="wp-block-heading has-xl-font-size hawthorn-about-section__heading"
								value={ heading }
								allowedFormats={ [] }
								onChange={ ( value ) =>
									setAttributes( { heading: value } )
								}
								placeholder={ __(
									'Add a heading…',
									'hawthorn'
								) }
							/>
							{ innerBlocksProps.children }
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
