/**
 * Automatic background removal and image processing utility.
 * Removes pure white (#FFFFFF) and near-white backgrounds from user-uploaded images
 * in real-time using HTML5 Canvas, feathering the edges for smooth anti-aliased transparency.
 */

export function removeWhiteBackgroundFromImage(
  imageSource: string | File
): Promise<string> {
  return new Promise((resolve, reject) => {
    const processImageElement = (img: HTMLImageElement) => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          resolve(img.src);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Iterate through all RGBA pixels
        // Target white/off-white background and make transparent
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const minVal = Math.min(r, g, b);
          const maxVal = Math.max(r, g, b);
          const saturationDelta = maxVal - minVal;

          // If pixel is near-neutral and bright white/near-white
          if (saturationDelta < 22) {
            if (minVal >= 246) {
              // 100% Transparent
              data[i + 3] = 0;
            } else if (minVal >= 220) {
              // Smooth feathered alpha gradient at hair/garment boundary
              const factor = (246 - minVal) / (246 - 220);
              data[i + 3] = Math.round(data[i + 3] * Math.pow(factor, 1.2));
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const transparentPngUrl = canvas.toDataURL('image/png');
        resolve(transparentPngUrl);
      } catch (err) {
        console.error('Error processing background removal:', err);
        resolve(img.src);
      }
    };

    if (imageSource instanceof File) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => processImageElement(img);
        img.onerror = reject;
        img.src = e.target?.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(imageSource);
    } else {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => processImageElement(img);
      img.onerror = () => {
        // Fallback if cross-origin or load failed
        resolve(imageSource);
      };
      img.src = imageSource;
    }
  });
}
