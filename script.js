
    const gallery = document.querySelector('.gallery');
    const scrollAmount = 5;

    let scrollPosition = 0;

    function scrollGalleryLeft() {
      scrollPosition -= scrollAmount;
      gallery.scrollLeft = scrollPosition;
      updateActiveImage();
    }

    function scrollGalleryRight() {
      scrollPosition += scrollAmount;
      gallery.scrollLeft = scrollPosition;
      updateActiveImage();
    }

    function updateActiveImage() {
      const images = Array.from(document.querySelectorAll('.gallery img'));
      const galleryWidth = gallery.offsetWidth;

      images.forEach((image) => {
        const imageOffset = image.offsetLeft - gallery.scrollLeft;
        const imageCenter = imageOffset + image.offsetWidth / 2;

        if (imageCenter >= 0 && imageCenter <= galleryWidth) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      const scrollLeftBtn = document.createElement('button');
      scrollLeftBtn.innerText = '←';
      scrollLeftBtn.addEventListener('click', scrollGalleryLeft);
      document.body.appendChild(scrollLeftBtn);

      const scrollRightBtn = document.createElement('button');
      scrollRightBtn.innerText = '→';
      scrollRightBtn.addEventListener('click', scrollGalleryRight);
      document.body.appendChild(scrollRightBtn);

      gallery.addEventListener('scroll', updateActiveImage);
      updateActiveImage();
    });
  
