import {
	InnerBlocks,
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import './editor.scss';

const ALLOWED_BLOCKS = [ 'core/paragraph' ];
const TEMPLATE = [
	[
		'core/paragraph',
		{
			content: 'Prioritised opportunities for improvement',
			fontSize: 'sm',
		},
	],
	[
		'core/paragraph',
		{
			content: 'A clear behavioural diagnosis of the problem',
			fontSize: 'sm',
		},
	],
	[
		'core/paragraph',
		{
			content: 'Evidence-based product recommendations',
			fontSize: 'sm',
		},
	],
	[
		'core/paragraph',
		{
			content: 'Practical frameworks for future decision-making',
			fontSize: 'sm',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Increased capability in behavioural and psychological thinking',
			fontSize: 'sm',
		},
	],
	[
		'core/paragraph',
		{
			content: 'A roadmap for implementation and evaluation',
			fontSize: 'sm',
		},
	],
];

export default function Edit( { attributes, setAttributes } ) {
	const { heading } = attributes;
	const blockProps = useBlockProps( {
		className: 'hawthorn-benefits-list',
	} );
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'hawthorn-benefits-list__items',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			renderAppender: InnerBlocks.ButtonBlockAppender,
			template: TEMPLATE,
		}
	);

	return (
		<section { ...blockProps }>
			<div className="hawthorn-benefits-list__inner">
				<div className="hawthorn-benefits-list__card">
					<RichText
						tagName="h2"
						className="wp-block-heading has-xl-font-size hawthorn-benefits-list__heading"
						value={ heading }
						onChange={ ( value ) =>
							setAttributes( { heading: value } )
						}
						placeholder={ __( 'Add a heading…', 'hawthorn' ) }
					/>
					<div { ...innerBlocksProps } />
				</div>
			</div>
		</section>
	);
}
