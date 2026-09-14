import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { heading, content } = attributes;

	return (
		<div { ...useBlockProps( { className: 'hawthorn-starter' } ) }>
			<RichText
				tagName="h2"
				className="hawthorn-starter__heading"
				value={ heading }
				onChange={ ( value ) => setAttributes( { heading: value } ) }
				placeholder={ __( 'Add a heading…', 'hawthorn' ) }
			/>
			<RichText
				tagName="p"
				className="hawthorn-starter__content"
				value={ content }
				onChange={ ( value ) => setAttributes( { content: value } ) }
				placeholder={ __( 'Add some text…', 'hawthorn' ) }
			/>
		</div>
	);
}
