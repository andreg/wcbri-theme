var gulp = require( "gulp" ),
	sass = require( "gulp-sass" ),
	rename = require( "gulp-rename" );

// Configuration ---------------------------------------------------------------

/**
 * Sass files that need to be compiled and that are kept under watch.
 */
var files = "scss/**/*.scss";

// Task ------------------------------------------------------------------------

/**
 * Compile the Sass files into a single CSS output file in the "dist" folder.
 */
gulp.task( "style", function() {
	gulp.src( files )
		.pipe( sass( { outputStyle: "expanded" } ).on( "error", sass.logError ) )
			.pipe( gulp.dest( "./dist/" ) )
		.pipe( sass( { outputStyle: "compressed" } ) )
			.pipe( rename( 'style.min.css' ) )
				.pipe( gulp.dest( "./dist/" ) );
} );

/**
 * Run the Sass files compilation and launch the watch over Sass files.
 */
gulp.task( "default", [ "style" ], function() {
	gulp.watch( files, [ "style" ] );
} );