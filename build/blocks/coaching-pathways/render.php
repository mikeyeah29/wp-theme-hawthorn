<?php
/**
 * Render the Coaching Pathways block.
 *
 * Older saved instances do not contain the decorative connector above the two
 * pathway cards. Add it at render time so they receive the updated design
 * without requiring each page to be opened and saved again.
 *
 * @package Hawthorn
 */

if ( false !== strpos( $content, 'coaching-pathways__connector-block--top' ) ) {
	echo $content;
	return;
}

$opening_tag_end = strpos( $content, '>' );

if ( false === $opening_tag_end ) {
	echo $content;
	return;
}

$top_connector = '<div class="coaching-pathways__connector-block coaching-pathways__connector-block--top"><div class="coaching-pathways__connectors" aria-hidden="true"><svg viewBox="0 0 1000 140" preserveAspectRatio="none" focusable="false"><path d="M250 0 V66 Q250 70 254 70 H500"></path><path d="M750 0 V66 Q750 70 746 70 H500"></path><path d="M500 70 V140"></path></svg></div></div>';

	echo substr( $content, 0, $opening_tag_end + 1 )
	. $top_connector
	. substr( $content, $opening_tag_end + 1 );
