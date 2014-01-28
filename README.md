# climg

Copy the URL of the first image found on a webpage to your clipboard, from the command line (on systems that include `pbcopy`). Intended for use with <a href="http://cl.ly">CloudApp</a> URLs, but will work on any page.

**NOTE**: Immediately after writing this I learned that you could just append `/image.png` instead, so just do this:

```bash
echo `pbpaste`"/image.png" | pbcopy
```

## Usage 

Run the following command. When it completes, the direct image URL will be copied to your clipboard.

```bash
node climg.js http://cl.ly/image/3F0r2m16342h
```

## License
Available for use under the MIT license: [http://bryan.mit-license.org](http://bryan.mit-license.org)
