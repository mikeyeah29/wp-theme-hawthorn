<?php get_header(); ?>

<div class="hero pt-lg pb-lg">
    <div class="container">
        <!-- Add logo -->
        <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo.png" alt="Hawthorn Logo" class="hero-logo" data-aos="fade-in" data-aos-duration="1250" data-aos-easing="cubic-bezier(0.23, 1, 0.32, 1)">
    </div>
</div>

<div class="wp-site-blocks">
    <?php the_content(); ?>
</div>

<?php get_footer(); ?>