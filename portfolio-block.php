<?php
/**
 * Plugin Name:       Portfolio Block
 * Description:       To show projects in a nice way
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       portfolio-block
 *
 * @package           hp
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function portfolio_block_portfolio_block_block_init() {
	register_block_type( __DIR__ . '/build/blocks/portfolio' );
	register_block_type( __DIR__ . '/build/blocks/holly-sites' );
}
add_action( 'init', 'portfolio_block_portfolio_block_block_init' );
