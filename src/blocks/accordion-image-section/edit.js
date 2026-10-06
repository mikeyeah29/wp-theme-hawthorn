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

const ALLOWED_BLOCKS = [ 'core/accordion', 'core/buttons' ];
const TEMPLATE = [
	[
		'core/accordion',
		{ fontSize: 'sm' },
		[
			[
				'core/accordion-item',
				{},
				[
					[
						'core/accordion-heading',
						{ title: 'Founder Resilience & High Performance' },
					],
					[
						'core/accordion-panel',
						{},
						[
							[
								'core/paragraph',
								{
									content:
										'Manage the intense psychological weight of building and scaling a company.',
								},
							],
							[
								'core/list',
								{},
								[
									[
										'core/list-item',
										{
											content:
												'Navigating the "all-in" founder journey',
										},
									],
									[
										'core/list-item',
										{
											content:
												'Stress management and burnout prevention',
										},
									],
									[
										'core/list-item',
										{
											content:
												'Psychological agility in shifting markets',
										},
									],
									[
										'core/list-item',
										{
											content:
												'Developing a high-performance mindset',
										},
									],
									[
										'core/list-item',
										{
											content:
												'Founder identity and post-exit transition strategy',
										},
									],
								],
							],
						],
					],
				],
			],
			[
				'core/accordion-item',
				{},
				[
					[
						'core/accordion-heading',
						{ title: 'Neurodivergent Leadership (ADHD Coaching)' },
					],
					[
						'core/accordion-panel',
						{},
						[
							[
								'core/paragraph',
								{
									content:
										'Harness the unique strengths of an ADHD brain while putting scaffolding around the executive function challenges.',
								},
							],
							[
								'core/list',
								{},
								[
									[
										'core/list-item',
										{
											content:
												'Leveraging hyperfocus and high-tempo creativity',
										},
									],
									[
										'core/list-item',
										{
											content:
												'Managing executive dysfunction, overwhelm, and cognitive fatigue',
										},
									],
									[
										'core/list-item',
										{
											content:
												'Building personalized structures for prioritization and focus',
										},
									],
									[
										'core/list-item',
										{
											content:
												'Boundary setting and sustainable energy management',
										},
									],
									[
										'core/list-item',
										{
											content:
												'Navigating senior leadership with a neurodivergent profile',
										},
									],
								],
							],
						],
					],
				],
			],
			[
				'core/accordion-item',
				{},
				[
					[
						'core/accordion-heading',
						{ title: 'C-Suite Leadership & Scaling Dynamics' },
					],
					[
						'core/accordion-panel',
						{},
						[
							[
								'core/paragraph',
								{
									content:
										'Evolve your leadership style at the same speed your company is growing.',
								},
							],
							[
								'core/list',
								{},
								[
									[
										'core/list-item',
										{
											content:
												'Transitioning from "hands-on founder" to strategic CEO',
										},
									],
									[
										'core/list-item',
										{
											content:
												'Navigating boardroom and investor dynamics',
										},
									],
									[
										'core/list-item',
										{
											content:
												'High-stakes decision-making under uncertainty',
										},
									],
									[
										'core/list-item',
										{
											content:
												'Managing the psychological dynamics of rapid team scaling',
										},
									],
									[
										'core/list-item',
										{
											content:
												'Effective communication and alignment during tech/AI disruption',
										},
									],
								],
							],
						],
					],
				],
			],
		],
	],
];

export default function Edit( { attributes, setAttributes } ) {
	const { heading, imageId, imageUrl, imageAlt } = attributes;
	const blockProps = useBlockProps( {
		className:
			'wp-block-group alignwide is-layout-constrained wp-block-group-is-layout-constrained',
		style: { paddingTop: 0 },
	} );
	const { children: accordion, ...leftColumnProps } = useInnerBlocksProps(
		{
			className:
				'wp-block-column is-vertically-aligned-center hawthorn-accordion-image-section__content',
			style: { flexBasis: '50%' },
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
								<div className="hawthorn-accordion-image-section__image-controls">
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
				<div className="wp-block-columns alignwide are-vertically-aligned-center is-layout-flex wp-block-columns-is-layout-flex">
					<div { ...leftColumnProps }>
						<RichText
							tagName="h2"
							className="wp-block-heading has-xl-font-size"
							value={ heading }
							allowedFormats={ [ 'core/italic' ] }
							onChange={ ( value ) =>
								setAttributes( { heading: value } )
							}
							placeholder={ __( 'Add a heading…', 'hawthorn' ) }
						/>
						{ accordion }
					</div>
					<div
						className="wp-block-column is-vertically-aligned-center hawthorn-accordion-image-section__image"
						style={ { flexBasis: '50%' } }
					>
						{ imageUrl ? (
							<figure className="wp-block-image size-full br">
								<img src={ imageUrl } alt={ imageAlt } />
							</figure>
						) : (
							<MediaPlaceholder
								onSelect={ selectImage }
								allowedTypes={ [ 'image' ] }
								labels={ {
									title: __( 'Section image', 'hawthorn' ),
								} }
							/>
						) }
					</div>
				</div>
			</div>
		</>
	);
}
