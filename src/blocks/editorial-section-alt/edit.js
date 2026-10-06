import {
	InspectorControls,
	InnerBlocks,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './editor.scss';

const ALLOWED_BLOCKS = [
	'enigma/thoughts',
	'core/heading',
	'core/list',
	'core/paragraph',
];
const TEMPLATE = [
	[
		'enigma/thoughts',
		{
			animation: 'fade',
			interval: 4500,
			thoughts: [
				"Why don't users complete onboarding?",
				'Why does engagement drop after the first week?',
				"Why aren't people changing their behaviour despite good intentions?",
				'Why do teams struggle to turn research into meaningful product decisions?',
			],
			style: {
				spacing: {
					margin: {
						bottom: 'var:preset|spacing|lg',
					},
				},
			},
		},
	],
	[
		'core/paragraph',
		{
			align: 'left',
			content:
				'I help product, design and leadership teams apply psychological science to solve real business and product problems.',
			fontSize: 'sm',
		},
	],
	[
		'core/paragraph',
		{
			align: 'left',
			content:
				'Drawing on a background in Clinical Psychology and years working in digital health technology, I translate evidence about human behaviour into practical product decisions that improve engagement, retention, behaviour change and user experience.',
			fontSize: 'sm',
		},
	],
	[
		'core/paragraph',
		{
			align: 'left',
			content:
				'The result is products that work better for people and perform better for organisations.',
			fontSize: 'sm',
		},
	],
];

export default function Edit( { attributes, setAttributes } ) {
	const { backgroundImageId, backgroundImageUrl, heading } = attributes;
	const blockProps = useBlockProps( {
		className:
			'wp-block-group alignfull is-layout-constrained wp-block-group-is-layout-constrained',
	} );
	const innerBlocksProps = useInnerBlocksProps(
		{
			className:
				'wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow hawthorn-editorial-section-alt__content',
			style: { flexBasis: '66.666%' },
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			renderAppender: InnerBlocks.ButtonBlockAppender,
			template: TEMPLATE,
		}
	);

	const selectBackgroundImage = ( media ) => {
		setAttributes( {
			backgroundImageId: media.id,
			backgroundImageUrl: media.url,
		} );
	};

	const removeBackgroundImage = () => {
		setAttributes( {
			backgroundImageId: undefined,
			backgroundImageUrl: '',
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Background image', 'hawthorn' ) }>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ selectBackgroundImage }
							allowedTypes={ [ 'image' ] }
							value={ backgroundImageId }
							render={ ( { open } ) => (
								<div className="hawthorn-editorial-section-alt__image-controls">
									<Button
										variant="secondary"
										onClick={ open }
									>
										{ backgroundImageUrl
											? __( 'Replace image', 'hawthorn' )
											: __( 'Select image', 'hawthorn' ) }
									</Button>
									{ backgroundImageUrl && (
										<Button
											variant="link"
											isDestructive
											onClick={ removeBackgroundImage }
										>
											{ __( 'Remove image', 'hawthorn' ) }
										</Button>
									) }
								</div>
							) }
						/>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="wp-block-cover alignfull is-light has-parallax br hawthorn-editorial-section-alt">
					<div
						className={ `wp-block-cover__image-background size-full has-parallax${
							backgroundImageId
								? ` wp-image-${ backgroundImageId }`
								: ''
						}` }
						style={
							backgroundImageUrl
								? {
										backgroundImage: `url(${ backgroundImageUrl })`,
								  }
								: undefined
						}
					/>
					<span
						className="wp-block-cover__background has-light-background-color has-background-dim-60 has-background-dim"
						aria-hidden="true"
					/>
					<div className="wp-block-cover__inner-container is-layout-constrained wp-block-cover-is-layout-constrained">
						<div className="wp-block-columns alignwide are-vertically-aligned-top is-layout-flex wp-block-columns-is-layout-flex">
							<div
								className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow"
								style={ { flexBasis: '33.333%' } }
							>
								<RichText
									tagName="h2"
									className="wp-block-heading has-xl-font-size hawthorn-editorial-section-alt__heading"
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
							</div>
							<div { ...innerBlocksProps } />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
