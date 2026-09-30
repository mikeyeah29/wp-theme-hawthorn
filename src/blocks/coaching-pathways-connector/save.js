import { useBlockProps } from '@wordpress/block-editor';

import ConnectorLines from './connector-lines';

export default function save() {
	return (
		<div
			{ ...useBlockProps.save( {
				className: 'coaching-pathways__connector-block',
			} ) }
		>
			<ConnectorLines />
		</div>
	);
}
