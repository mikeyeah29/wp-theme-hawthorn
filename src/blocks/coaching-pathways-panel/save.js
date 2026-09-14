import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const position = [ 'left', 'right', 'bottom' ].includes(
		attributes.position
	)
		? attributes.position
		: 'left';

	return (
		<div
			{ ...useBlockProps.save( {
				className: `coaching-pathways__panel coaching-pathways__panel--${ position }`,
			} ) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
