#!/bin/bash

rm -rf dist
npm run build
scp -r dist/* root@eastseven.cn:/data/waterfall.dongnianxin.cn/
