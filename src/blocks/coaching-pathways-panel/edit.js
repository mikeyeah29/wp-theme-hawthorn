import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import { getPanelTemplate } from './template';

export default function Edit( { attributes } ) {
	const position = [ 'left', 'right', 'bottom' ].includes(
		attributes.position
	)
		? attributes.position
		: 'left';

	return (
		<div
			{ ...useBlockProps( {
				className: `coaching-pathways__panel coaching-pathways__panel--${ position }`,
			} ) }
		>
			<InnerBlocks
				template={ getPanelTemplate( position ) }
				templateLock={ false }
			/>
		</div>
	);
}
