import { useBlockProps } from '@wordpress/block-editor';

function ConnectorLines() {
	return (
		<div className="coaching-pathways__connectors" aria-hidden="true">
			<svg viewBox="0 0 1000 140" preserveAspectRatio="none">
				<path d="M250 0 V66 Q250 70 254 70 H500" />
				<path d="M750 0 V66 Q750 70 746 70 H500" />
				<path d="M500 70 V140" />
			</svg>
		</div>
	);
}

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
