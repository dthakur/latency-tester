## Latency tester

#### Methodology

1. Generate a 30 FPS video of QR codes
2. Process the video through the transmission system
3. Record a side-by-side video of the original and transmitted stream
4. Run through `analyze.js` script to get the latency numbers

#### Intended use

Measure end-to-end latency of RC VTXs, analog to digital video converters etc

#### Video generation

1. Use `generate-images.js` to create the raw pngs
2. Run the command `ffmpeg -r 60 -s 1024x768 -i output/%07d.png -vcodec libx264 -crf 25 -pix_fmt yuv420p ../sync.mp4` to generate video

Generation is for 60fps, which means the lower latency measurement will be ~17ms.
