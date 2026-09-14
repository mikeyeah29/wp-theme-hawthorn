import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { heading, content } = attributes;

	return (
		<div { ...useBlockProps.save( { className: 'hawthorn-starter' } ) }>
			<RichText.Content
				tagName="h2"
				className="hawthorn-starter__heading"
				value={ heading }
			/>
			<RichText.Content
				tagName="p"
				className="hawthorn-starter__content"
				value={ content }
			/>
		</div>
	);
}
