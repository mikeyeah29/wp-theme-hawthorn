    
<?php

    $contact_address = get_theme_mod('contact_address', '');
    $contact_address = explode("\n", $contact_address);

    $contact_email = get_theme_mod('contact_email', '');
    // $contact_phone = get_theme_mod('contact_phone', '');

    $footer_bg_color = get_theme_mod('header_bg_color', 'white');
    $footer_text_color = get_theme_mod('header_text_color', 'black');
    $cookie_notice_message = get_theme_mod(
        'cookie_notice_message',
        'We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.'
    );

    $footer_bg_color_class = ($footer_bg_color) ? 'has-' . $footer_bg_color . '-background-color' : '';
    $footer_text_color_class = ($footer_text_color) ? 'has-' . $footer_text_color . '-color' : '';

    $menu_name = enigma_get_menu_name('footer-one', 'Legal');

?>
    
    <footer class="footer <?php echo $footer_bg_color_class; ?> <?php echo $footer_text_color_class; ?>">

        <div class="container container--wide">
            
            <div class="d-flex">
                <div class="w-50">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo.png" alt="Hawthorn Logo" class="footer-logo">
                </div>
                <div class="w-50">
                    <div class="d-flex flex-column gap-8">
                        <p class="hdln-4 mb-0">Address</p>
                        <p class="mb-0 txt-300"><?php echo implode('<br>', $contact_address); ?></p>
                        <p class="hdln-4 mb-0">Email</p>
                        <a href="mailto:<?php echo $contact_email; ?>" class="txt-300"><?php echo $contact_email; ?></a>
                    </div>
                    <div class="d-flex">
                        <div class="w-50">
                            <div class="d-flex flex-column gap-8">
                                <!-- <p class="hdln-4 mb-0">Phone</p>
                                <a href="tel:<?php // echo $contact_phone; ?>" class="txt-300"><?php // echo $contact_phone; ?></a> -->
                                <!-- <p class="hdln-4 mb-0">Email</p>
                                <a href="mailto:<?php // echo $contact_email; ?>" class="txt-300"><?php // echo $contact_email; ?></a> -->
                            </div>
                        </div>
                        <div class="w-50">
                            <!-- <div class="d-flex flex-column gap-8">
                                <p class="hdln-4 mb-0">Address</p>
                                <p class="mb-0 txt-300"><?php // echo implode('<br>', $contact_address); ?></p>
                                <p class="hdln-4 mb-0">Email</p>
                                <a href="mailto:<?php // echo $contact_email; ?>" class="txt-300"><?php // echo $contact_email; ?></a>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="footer-bottom">
            <div class="container container--full">
                <div class="has-neutral-background-color br pt-sm pb-sm">
                    <div class="container container--wide">
                        <div class="d-md-flex justify-content-between align-items-center">
                            <p class="legal-text mb-0">&copy; <?php echo date('Y'); ?> <?php echo get_bloginfo('name'); ?> | All Rights Reserved</p>
                            <!-- <p class="legal-text mb-0">Website made by <a href="https://rockettwd.co.uk" target="_blank" class="txt-underline">RockettWD</a></p> -->
                            <p class="legal-text mb-0"><a href="<?php echo home_url('/terms-conditions'); ?>" class="txt-underline">Terms & Conditions</a> | <a href="<?php echo home_url('/privacy-policy'); ?>" class="txt-underline">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="footer-bottom pl-xs pr-xs">
            <div class="container container--full has-neutral-background-color br">
                <div class="d-md-flex justify-content-between align-items-center">
                    <p class="legal-text mb-0">&copy; <?php // echo date('Y'); ?> <?php // echo get_bloginfo('name'); ?> | All Rights Reserved</p>
                    <p class="legal-text mb-0">Website made by <a href="https://rockettwd.co.uk" target="_blank" class="txt-underline">RockettWD</a></p>
                </div>
            </div>
        </div> -->

    </footer>

    <?php if (!empty($cookie_notice_message)) : ?>
        <div id="enigma-cookie-notice" class="enigma-cookie-notice" hidden aria-live="polite" role="region" aria-label="Cookie notice">
            <div class="enigma-cookie-notice__message">
                <?php echo wp_kses_post(wpautop($cookie_notice_message)); ?>
            </div>
            <button type="button" id="enigma-cookie-notice-accept" class="enigma-cookie-notice__button">
                <?php esc_html_e('OK', 'enigma'); ?>
            </button>
        </div>
    <?php endif; ?>

    <?php wp_footer(); ?>

    </body>
</html>
