import { useBlockProps } from '@wordpress/block-editor';

import ConnectorLines from './connector-lines';

export default function Edit() {
	return (
		<div
			{ ...useBlockProps( {
				className: 'coaching-pathways__connector-block',
			} ) }
		>
			<ConnectorLines />
		</div>
	);
}
