<?php
// This file is generated. Do not modify it manually.
return array(
	'about-section' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hawthorn/about-section',
		'version' => '1.0.0',
		'title' => 'About Section',
		'category' => 'design',
		'icon' => 'id-alt',
		'description' => 'A fixed two-column about section with an image and editable content.',
		'keywords' => array(
			'about',
			'image',
			'columns'
		),
		'textdomain' => 'hawthorn',
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Why work with me?',
				'role' => 'content'
			),
			'imageId' => array(
				'type' => 'number',
				'role' => 'content'
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => '',
				'role' => 'content'
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => '',
				'role' => 'content'
			)
		),
		'allowedBlocks' => array(
			'core/paragraph',
			'core/buttons'
		),
		'supports' => array(
			'color' => false,
			'customClassName' => false,
			'html' => false,
			'spacing' => false
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'accordion-image-section' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hawthorn/accordion-image-section',
		'version' => '1.0.0',
		'title' => 'Accordion Image Section',
		'category' => 'design',
		'icon' => 'columns',
		'description' => 'A fixed two-column section with a heading, accordion and image.',
		'keywords' => array(
			'accordion',
			'image',
			'columns'
		),
		'textdomain' => 'hawthorn',
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => '<em>What I Help With</em>',
				'role' => 'content'
			),
			'imageId' => array(
				'type' => 'number',
				'role' => 'content'
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => '',
				'role' => 'content'
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => '',
				'role' => 'content'
			)
		),
		'allowedBlocks' => array(
			'core/accordion',
			'core/buttons'
		),
		'supports' => array(
			'color' => false,
			'customClassName' => false,
			'html' => false,
			'spacing' => false
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'benefits-list' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hawthorn/benefits-list',
		'version' => '1.0.0',
		'title' => 'Benefits List',
		'category' => 'design',
		'icon' => 'yes-alt',
		'description' => 'A bordered panel containing a heading and a styled list of benefits.',
		'keywords' => array(
			'benefits',
			'list',
			'outcomes'
		),
		'textdomain' => 'hawthorn',
		'attributes' => array(
			'align' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'By the end of the engagement your team will have…',
				'role' => 'content'
			)
		),
		'allowedBlocks' => array(
			'core/paragraph'
		),
		'supports' => array(
			'align' => array(
				'full'
			),
			'anchor' => true,
			'color' => false,
			'customClassName' => false,
			'html' => false,
			'spacing' => false
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
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
	'contact-section' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hawthorn/contact-section',
		'version' => '1.0.0',
		'title' => 'Contact Section',
		'category' => 'design',
		'icon' => 'email-alt',
		'description' => 'A complete contact section with editable copy and a Contact Form 7 form.',
		'keywords' => array(
			'contact',
			'form',
			'email'
		),
		'textdomain' => 'hawthorn',
		'attributes' => array(
			'align' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'Contact',
				'role' => 'content'
			),
			'intro' => array(
				'type' => 'string',
				'default' => 'Complete the form below or get in touch directly by email or phone, and I’ll get back to you as soon as I can.',
				'role' => 'content'
			),
			'formId' => array(
				'type' => 'string',
				'default' => '07c568a'
			),
			'formTitle' => array(
				'type' => 'string',
				'default' => 'Contact form 1'
			),
			'directPrompt' => array(
				'type' => 'string',
				'default' => 'Prefer to get in touch directly?',
				'role' => 'content'
			),
			'email' => array(
				'type' => 'string',
				'default' => 'annemarie@hawthornpsychology.com',
				'role' => 'content'
			)
		),
		'supports' => array(
			'align' => array(
				'full'
			),
			'anchor' => true,
			'color' => false,
			'customClassName' => false,
			'html' => false,
			'spacing' => false
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'editorial-section' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hawthorn/editorial-section',
		'version' => '1.0.0',
		'title' => 'Editorial Section',
		'category' => 'design',
		'icon' => 'align-wide',
		'description' => 'A fixed cover and two-column layout with flexible editorial content.',
		'keywords' => array(
			'editorial',
			'cover',
			'columns'
		),
		'textdomain' => 'hawthorn',
		'attributes' => array(
			'backgroundImageId' => array(
				'type' => 'number',
				'role' => 'content'
			),
			'backgroundImageUrl' => array(
				'type' => 'string',
				'default' => '',
				'role' => 'content'
			),
			'heading' => array(
				'type' => 'string',
				'default' => '',
				'role' => 'content'
			)
		),
		'supports' => array(
			'color' => false,
			'customClassName' => false,
			'html' => false,
			'spacing' => false
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'editorial-section-alt' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hawthorn/editorial-section-alt',
		'version' => '1.0.0',
		'title' => 'Editorial Section Alt',
		'category' => 'design',
		'icon' => 'align-wide',
		'description' => 'A light editorial cover with a heading, thoughts and supporting content.',
		'keywords' => array(
			'editorial',
			'cover',
			'thoughts'
		),
		'textdomain' => 'hawthorn',
		'attributes' => array(
			'backgroundImageId' => array(
				'type' => 'number',
				'role' => 'content'
			),
			'backgroundImageUrl' => array(
				'type' => 'string',
				'default' => '',
				'role' => 'content'
			),
			'heading' => array(
				'type' => 'string',
				'default' => '<em>Most product challenges are human challenges…</em>',
				'role' => 'content'
			)
		),
		'allowedBlocks' => array(
			'enigma/thoughts',
			'core/heading',
			'core/list',
			'core/paragraph'
		),
		'supports' => array(
			'color' => false,
			'customClassName' => false,
			'html' => false,
			'spacing' => false
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'focused-section' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hawthorn/focused-section',
		'version' => '1.0.0',
		'title' => 'Focused Section',
		'category' => 'design',
		'icon' => 'columns',
		'description' => 'A two-column section with a heading, editable text and an image.',
		'keywords' => array(
			'focused',
			'image',
			'columns'
		),
		'textdomain' => 'hawthorn',
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => '<em>Focused from the outset</em>',
				'role' => 'content'
			),
			'imageId' => array(
				'type' => 'number',
				'role' => 'content'
			),
			'imageUrl' => array(
				'type' => 'string',
				'default' => 'https://wordpress-1599462-6491197.cloudwaysapps.com/wp-content/uploads/2026/08/untangled.png',
				'role' => 'content'
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => '',
				'role' => 'content'
			)
		),
		'allowedBlocks' => array(
			'core/paragraph',
			'core/list'
		),
		'supports' => array(
			'color' => false,
			'customClassName' => false,
			'html' => false,
			'spacing' => false
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'hero' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hawthorn/hero',
		'version' => '1.1.0',
		'title' => 'Hero',
		'category' => 'design',
		'icon' => 'cover-image',
		'description' => 'A centred page hero with flexible supporting content.',
		'keywords' => array(
			'hero',
			'banner',
			'heading'
		),
		'textdomain' => 'hawthorn',
		'attributes' => array(
			'align' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'variant' => array(
				'type' => 'string',
				'default' => 'standard'
			),
			'heading' => array(
				'type' => 'string',
				'default' => '',
				'role' => 'content'
			)
		),
		'allowedBlocks' => array(
			'core/breadcrumbs',
			'core/buttons',
			'core/paragraph'
		),
		'supports' => array(
			'align' => array(
				'full'
			),
			'anchor' => true,
			'color' => false,
			'customClassName' => false,
			'html' => false,
			'spacing' => false
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
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
