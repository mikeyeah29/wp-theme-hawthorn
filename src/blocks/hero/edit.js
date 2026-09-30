import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

import './editor.scss';

const ALLOWED_BLOCKS = [
	'core/breadcrumbs',
	'core/buttons',
	'core/heading',
	'core/paragraph',
];
const DEFAULT_TEMPLATE = [
	[
		'core/heading',
		{
			level: 1,
			fontSize: 'hero',
			placeholder: 'Add a hero heading…',
		},
	],
];

export default function Edit( { attributes } ) {
	const variant = attributes.variant || 'standard';
	const blockProps = useBlockProps( {
		className: `hawthorn-hero hawthorn-hero--${ variant }`,
	} );
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'hawthorn-hero__inner',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			renderAppender: InnerBlocks.ButtonBlockAppender,
			template: DEFAULT_TEMPLATE,
			templateLock: false,
		}
	);

	return (
		<section { ...blockProps }>
			<div { ...innerBlocksProps } />
		</section>
	);
}
