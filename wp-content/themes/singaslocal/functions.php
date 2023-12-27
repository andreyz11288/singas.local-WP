<?php 
add_action('wp_enqueue_scripts', function() {
	wp_enqueue_style('floating-text', get_template_directory_uri() . '/assets/css/floating-text.css');
	wp_enqueue_style('custom', get_template_directory_uri() . '/assets/css/custom.css');
	wp_enqueue_style('main', get_template_directory_uri() . '/assets/css/main.css');
	wp_enqueue_script( 'floating-text', get_template_directory_uri() . '/assets/js/floating-text.js', ['jquery'], 'null', 'true' );
	wp_enqueue_script( 'tweenjs.min', get_template_directory_uri() . '/assets/js/tweenjs.min.js', ['jquery'], 'null', 'true' );
	wp_enqueue_script( 'custom', get_template_directory_uri() . '/assets/js/custom.js', ['jquery'], 'null', 'true' );
	wp_enqueue_script( 'canvas', get_template_directory_uri() . '/assets/js/canvas.js', ['jquery'], 'null', 'true' );

});

add_theme_support('post-thumbnails');
add_theme_support('title-tag');
add_theme_support('custom-logo');

add_filter( 'upload_mimes', 'svg_upload_allow' );

# Добавляет SVG в список разрешенных для загрузки файлов.
function svg_upload_allow( $mimes ) {
	$mimes['svg']  = 'image/svg+xml';

	return $mimes;
}

add_filter( 'wp_check_filetype_and_ext', 'fix_svg_mime_type', 10, 5 );

# Исправление MIME типа для SVG файлов.
function fix_svg_mime_type( $data, $file, $filename, $mimes, $real_mime = '' ){

	// WP 5.1 +
	if( version_compare( $GLOBALS['wp_version'], '5.1.0', '>=' ) ){
		$dosvg = in_array( $real_mime, [ 'image/svg', 'image/svg+xml' ] );
	}
	else {
		$dosvg = ( '.svg' === strtolower( substr( $filename, -4 ) ) );
	}

	if( $dosvg ){

		if( current_user_can('manage_options') ){

			$data['ext']  = 'svg';
			$data['type'] = 'image/svg+xml';
		}
		else {
			$data['ext']  = false;
			$data['type'] = false;
		}

	}

	return $data;
}

show_admin_bar(false);

function blog_theme_widgets_init() {
	register_sidebar([
		'name'           => esc_html__( 'Social link' , 'blog-theme'),
		'id'             => "social-link",
	]);
}

add_action('widgets_init', 'blog_theme_widgets_init');

remove_filter('the_content', 'wpautop');
?>