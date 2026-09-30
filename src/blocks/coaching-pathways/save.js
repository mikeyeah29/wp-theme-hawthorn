import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import ConnectorLines from '../coaching-pathways-connector/connector-lines';

export default function save() {
	return (
		<div
			{ ...useBlockProps.save( {
				className: 'coaching-pathways coaching-pathways--inner-blocks',
			} ) }
		>
			<div className="coaching-pathways__connector-block coaching-pathways__connector-block--top">
				<ConnectorLines />
			</div>
			<InnerBlocks.Content />
		</div>
	);
}
