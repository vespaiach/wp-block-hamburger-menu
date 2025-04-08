<?php
// This file is generated. Do not modify it manually.
return array(
	'hamburger-menu-icon' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/hamburger-menu-icon',
		'version' => '0.1.0',
		'title' => 'Hamburger Menu Icon',
		'category' => 'widgets',
		'description' => 'Hamburger-menu icon button',
		'supports' => array(
			'html' => true,
			'color' => array(
				'background' => true,
				'text' => true
			)
		),
		'textdomain' => 'hamburger-menu-icon',
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
