<?php
// This file is generated. Do not modify it manually.
return array(
	'coaching-pathways' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hawthorn/coaching-pathways',
		'version' => '1.0.0',
		'title' => 'Coaching Pathways',
		'category' => 'design',
		'icon' => 'networking',
		'description' => 'Two coaching pathways that converge on a shared next step.',
		'keywords' => array(
			'coaching',
			'pathways',
			'services'
		),
		'textdomain' => 'hawthorn',
		'attributes' => array(
			'leftEyebrow' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.coaching-pathways__panel--left .coaching-pathways__eyebrow',
				'default' => 'For individuals'
			),
			'leftHeading' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.coaching-pathways__panel--left .coaching-pathways__heading',
				'default' => 'One-to-one coaching'
			),
			'leftContent' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.coaching-pathways__panel--left .coaching-pathways__content',
				'default' => 'Create space to think, grow and move forward with focused personal support.'
			),
			'leftButtonText' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.coaching-pathways__panel--left .coaching-pathways__button',
				'default' => 'Explore individual coaching'
			),
			'leftButtonUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'rightEyebrow' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.coaching-pathways__panel--right .coaching-pathways__eyebrow',
				'default' => 'For organisations'
			),
			'rightHeading' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.coaching-pathways__panel--right .coaching-pathways__heading',
				'default' => 'Team and leadership coaching'
			),
			'rightContent' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.coaching-pathways__panel--right .coaching-pathways__content',
				'default' => 'Strengthen leadership, relationships and performance across your organisation.'
			),
			'rightButtonText' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.coaching-pathways__panel--right .coaching-pathways__button',
				'default' => 'Explore organisational coaching'
			),
			'rightButtonUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bottomHeading' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.coaching-pathways__panel--bottom .coaching-pathways__heading',
				'default' => 'Not sure where to begin?'
			),
			'bottomContent' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.coaching-pathways__panel--bottom .coaching-pathways__content',
				'default' => 'Let’s find the coaching pathway that best fits where you are and where you want to go.'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'spacing' => array(
				'margin' => true
			),
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'coaching-pathways-connector' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hawthorn/coaching-pathways-connector',
		'version' => '1.0.0',
		'title' => 'Coaching Pathways Connector',
		'category' => 'design',
		'icon' => 'minus',
		'description' => 'The visual connector between coaching pathway panels.',
		'parent' => array(
			'hawthorn/coaching-pathways'
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'editorScript' => 'file:./index.js'
	),
	'coaching-pathways-panel' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hawthorn/coaching-pathways-panel',
		'version' => '1.0.0',
		'title' => 'Coaching Pathway Panel',
		'category' => 'design',
		'icon' => 'screenoptions',
		'description' => 'An editable panel within a coaching pathways block.',
		'parent' => array(
			'hawthorn/coaching-pathways'
		),
		'attributes' => array(
			'position' => array(
				'type' => 'string',
				'default' => 'left'
			)
		),
		'supports' => array(
			'html' => false,
			'reusable' => false
		),
		'editorScript' => 'file:./index.js'
	),
	'starter' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hawthorn/starter',
		'version' => '1.0.0',
		'title' => 'Hawthorn Starter',
		'category' => 'design',
		'icon' => 'welcome-add-page',
		'description' => 'A starter block for new Hawthorn child-theme blocks.',
		'keywords' => array(
			'hawthorn',
			'starter'
		),
		'textdomain' => 'hawthorn',
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'h2',
				'default' => 'A Hawthorn block'
			),
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'p',
				'default' => 'Edit this starter block to build something new.'
			)
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'color' => array(
				'background' => true,
				'text' => true
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true
			),
			'html' => false
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
