import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div
			{ ...useBlockProps.save( {
				className: 'coaching-pathways coaching-pathways--inner-blocks',
			} ) }
		>
			<InnerBlocks.Content />
		</div>
	);
}
