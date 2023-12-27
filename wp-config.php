<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'singas.local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'U]k(),VL3)DQm6s>}k=M5s]{L!]0Regg|dVxz)fw|5]U-;i?#JIR=1c#,0Mn:y@R' );
define( 'SECURE_AUTH_KEY',  '>hMCj6tSCHoE>JJ(^<h/?`G_M:cbMDvEgFf@a^QSZK(]qw8_Ruj08rD1/I(|DUos' );
define( 'LOGGED_IN_KEY',    'ST@EKBj84O^Mg$Uj2ZG&A<#umT G_k|7)[;Uzpq#_,.^Qi.pVB5q*5$}lR5T ltm' );
define( 'NONCE_KEY',        'zb{OP%M_.vBE,iw>k.wxD(Mk!iYVDJ$vqH,UM`]pt]n j9tOuhq-~^iLXa;W]Z#_' );
define( 'AUTH_SALT',        'E+-QvI@f;3]<>#sY6lFHz~KrkKYQp5fT2eU,#0w!FzY(-l.:}yDlWn-z=C>a^73>' );
define( 'SECURE_AUTH_SALT', '(FP0n3N<s,wMTud   ITXfU[|y{QkuQ0E>l4{j^Lt#1.ATjhB5wkPO}31<QzAI_?' );
define( 'LOGGED_IN_SALT',   '#c@$u>grd(1Sj]uc7:OJI{0$FqM)Cv3a_nhgGQ`:LNaM5UWnb5Xe]%-c4uSfu%HV' );
define( 'NONCE_SALT',       '(kw|q?Jz,r[46*)VQX*;.*L`D>DB-mE{SLF4|0.R{G34<gNo_Fru5C$7ZCee>e;t' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
