import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import { TEMPLATE } from '../coaching-pathways-panel/template';
import './editor.scss';

const ALLOWED_BLOCKS = [
	'hawthorn/coaching-pathways-panel',
	'hawthorn/coaching-pathways-connector',
];

export default function Edit() {
	return (
		<div
			{ ...useBlockProps( {
				className: 'coaching-pathways coaching-pathways--inner-blocks',
			} ) }
		>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ TEMPLATE }
				templateLock="all"
			/>
		</div>
	);
}
