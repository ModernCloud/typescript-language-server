Please run the following command first to build docker image.
```bash
$ sh build.sh
```

Then you can use it image with the following command:
```bash
$ docker run \
  -v /my-packages-folder:/packages \
  -a STDIN -a STDOUT -a STDERR -i --rm \
  moderncloud/typescript-language-server:0.1 \
  node /runner/startserver.js --stdio
```
