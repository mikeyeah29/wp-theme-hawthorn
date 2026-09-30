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

const ALLOWED_BLOCKS = [ 'core/heading', 'core/list', 'core/paragraph' ];
const DEFAULT_BACKGROUND_IMAGE_URL =
	window.hawthornEditorialSectionSettings?.defaultBackgroundImageUrl || '';
const TEMPLATE = [
	[
		'core/paragraph',
		{
			fontSize: 'md',
			placeholder: 'Add introductory text…',
		},
	],
];

export default function Edit( { attributes, setAttributes } ) {
	const { backgroundImageId, backgroundImageUrl, heading } = attributes;
	const displayedBackgroundImageUrl =
		backgroundImageUrl || DEFAULT_BACKGROUND_IMAGE_URL;
	const blockProps = useBlockProps( {
		className:
			'wp-block-group alignfull is-layout-constrained wp-block-group-is-layout-constrained',
	} );
	const innerBlocksProps = useInnerBlocksProps(
		{
			className:
				'wp-block-column is-vertically-aligned-top hawthorn-editorial-section__content',
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
								<div className="hawthorn-editorial-section__image-controls">
									<Button
										variant="secondary"
										onClick={ open }
									>
										{ backgroundImageUrl
											? __( 'Replace image', 'hawthorn' )
											: __(
													'Use a different image',
													'hawthorn'
											  ) }
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
				<div className="wp-block-cover alignfull is-light has-parallax hawthorn-editorial-section">
					<div
						className="wp-block-cover__image-background size-full has-parallax"
						style={
							displayedBackgroundImageUrl
								? {
										backgroundImage: `url(${ displayedBackgroundImageUrl })`,
								  }
								: undefined
						}
					/>
					<span
						className="wp-block-cover__background has-neutral-background-color has-background-dim-90 has-background-dim"
						aria-hidden="true"
					/>
					<div className="wp-block-cover__inner-container">
						<div className="wp-block-columns alignwide are-vertically-aligned-top is-layout-flex wp-block-columns-is-layout-flex">
							<div
								className="wp-block-column is-vertically-aligned-top"
								style={ { flexBasis: '33.333%' } }
							>
								<RichText
									tagName="h2"
									className="wp-block-heading has-xl-font-size hawthorn-editorial-section__heading"
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
							</div>
							<div { ...innerBlocksProps } />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
