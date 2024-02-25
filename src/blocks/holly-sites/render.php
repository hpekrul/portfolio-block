<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
/**
 * @var array $attributes Attributes from the block
 */
$query = new WP_Query([
	'post_type' => 'project'
]);

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
 <?php while($query->have_posts()):
	 $query->the_post();
	 ?>
<div class="project">
	<img class="img-thumbnail" style="height: 20rem;"
			<?= get_the_post_thumbnail() ?>
	<div class="inner" style="background-color: <?= $attributes['layOverColor'] ?> ">
		<div class="card-body border-0">
			<h5 class="card-title border-0" style="color: <?= $attributes['headingColor'] ?>"><?= get_the_title() ?></h5>
			<p class="card-text border-0" style="color: <?= $attributes['textColor'] ?>"> <?= get_post_meta(get_the_ID(), 'site_short_summary_', true) ?></p>
		</div>
		<a href="<?= get_the_permalink() ?>" class="btn btn-primary mt-5 border-0"
					style="background-color: <?= $attributes['buttonColor']?>">More Details</a>
	</div>
</div>
	<? endwhile; ?>
</div>
