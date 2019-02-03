function updateParams() {
  // Change frame styling
  const frame = document.getElementById("polaroid-frame");
  const padding = (frame.scrollWidth * 0.6 * 8.9) / 100;
  frame.style.padding = `${padding}px ${padding}px 0px ${padding}px`;
  frame.style.borderRadius = `${padding / 8}px`;
  frame.style.boxShadow = `0px 0px ${padding / 2}px`;

  // Change text styling
  const text = document.getElementById("polaroid-text");
  const textContainer = document.getElementById("text-container");
  text.style.fontSize = `${padding * 1.8}px`;
  text.style.lineHeight = `${(frame.scrollWidth * 2.1) / 8.9}px`;

  // Image dimensions
  const imageContainer = document.getElementById("img-container");
  imageContainer.style.borderRadius = `${padding / 8}px`;
  imageContainer.style.height = `${imageContainer.scrollWidth}px`;
  imageContainer.style.boxShadow = `0px 0px ${padding / 4}px inset`;
}
function fileUpload(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("selected-img").style.backgroundImage = `url(${
        e.target.result
      })`;
    };
    reader.readAsDataURL(input.files[0]);
  }
}
function downloadPolaroid() {
  domtoimage.toBlob(document.getElementById("container")).then(function(blob) {
    window.saveAs(blob, `Polaroidify-${Date.now()}`);
  });
  // htmlToImage.toBlob(document.getElementById('my-node'))
  //   .then(function (blob) {
  //     window.saveAs(blob, 'my-node.png');
  //   });
}
