## Latency tester

### Methodology

1. Generate a 60 fps video of QR codes
2. Process the video through the transmission system
3. Record a side-by-side video of the original and transmitted stream
4. Run through `analyze.js` script to get the latency numbers

### Intended use

Measure end-to-end latency of RC VTXs, analog to digital video converters etc

### Video generation

This is not needed if you use the pre-generated video `sync.mp4`.

1. Use `generate-images.js` to create the raw pngs
2. Run the command `ffmpeg -r 60 -s 1024x768 -i output/%07d.png -vcodec libx264 -crf 25 -pix_fmt yuv420p sync.mp4` to generate video

Notes:

* Generation is for 60 fps, which means the lowest latency measurement will be ~17ms.
* Code is not optimized, takes a while

### Analysis

TODO
