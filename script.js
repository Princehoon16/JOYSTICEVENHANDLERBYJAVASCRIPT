
        document.addEventListener('DOMContentLoaded', function () {
            var body = document.body;
            var image = document.getElementById('themeImage');

            image.addEventListener('click', function () {
                // Toggle between dark and light theme for the body
                body.classList.toggle('dark-theme');
                body.classList.toggle('light-theme');

                // Check if the body is now in dark theme
                var isDarkTheme = body.classList.contains('dark-theme');

                // Apply color inversion to the image if the body is in dark theme
                if (isDarkTheme) {
                    image.classList.add('invert-color');
                } else {
                    image.classList.remove('invert-color');
                }
            });
        });
  