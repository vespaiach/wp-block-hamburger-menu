<?php
// This file is generated. Do not modify it manually.
return array(
	'hamburger-menu-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/hamburger-menu-block',
		'version' => '1.0.0',
		'title' => 'Hamburger Menu Block',
		'category' => 'widgets',
		'description' => 'Animated hamburger menu block with customizable options.',
		'supports' => array(
			'html' => true,
			'color' => array(
				'background' => true,
				'text' => true
			)
		),
		'textdomain' => 'hamburger-menu-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'attributes' => array(
			'executeOnClick' => array(
				'type' => 'string'
			),
			'size' => array(
				'type' => 'integer',
				'default' => 24
			),
			'anchor' => array(
				'type' => 'string'
			)
		)
	)
);
