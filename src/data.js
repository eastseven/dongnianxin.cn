const conf = {
  prefix: 'https://mimi0429.oss-cn-hangzhou.aliyuncs.com/',
  suffix1: '?x-oss-process=style/s',
  suffix2: '?x-oss-process=style/b'
}

const data = [
  {
    folder: 'three',
    items: [
      '007.jpg',
      '011.jpg',
      '014.jpg',
      '017.jpg',
      '019.jpg',
      '027.jpg',
      '033.jpg',
      '039.jpg',
      '050.jpg',
      '055.jpg',
      '059.jpg',
      '060.jpg',
      '072.jpg',
      '083.jpg',
      '090.jpg',
      '094.jpg',
      '097.jpg',
      '100.jpg',
      '111.jpg',
      '118.jpg',
      '119.jpg',
      '120.jpg',
      '121.jpg',
      '125.jpg'
    ]
  },
  {
    folder: 'two',
    items: [
      '001.jpg',
      '002.jpg',
      '003.jpg',
      '004.jpg',
      '008.jpg',
      '009.jpg',
      '012.jpg',
      '014.jpg',
      '018.jpg',
      '019.jpg',
      '024.jpg',
      '031.jpg',
      '034.jpg',
      '043.jpg',
      '047.jpg',
      '049.jpg',
      '055.jpg',
      '057.jpg',
      '058.jpg',
      '059.jpg',
      '060.jpg',
      '062.jpg',
      '063.jpg',
      '068.jpg',
      '073.jpg',
      '076.jpg',
      '078.jpg',
      '080.jpg',
      '081.jpg',
      '083.jpg',
      '085.jpg',
      '094.jpg',
      '096.jpg',
      '102.jpg',
      '103.jpg',
      '106.jpg',
      '112.jpg',
      '120.jpg',
      '123.jpg',
      '140.jpg',
      '141.jpg',
      '142.jpg'
    ]
  },
  {
    folder: 'one',
    items: [
      'IMG_9186.jpg',
      'IMG_9207.jpg',
      'IMG_9208.jpg',
      'IMG_9209.jpg',
      'IMG_9240.jpg',
      'IMG_9247.jpg',
      'IMG_9253.jpg',
      'IMG_9275.jpg',
      'IMG_9280.jpg',
      'IMG_9284.jpg',
      'IMG_9299.jpg',
      'IMG_9307.jpg',
      'IMG_9314.jpg',
      'IMG_9333.jpg',
      'IMG_9355.jpg',
      'IMG_9371.jpg',
      'IMG_9402.jpg',
      'IMG_9414.jpg',
      'IMG_9429.jpg',
      'IMG_9435.jpg',
      'IMG_9443.jpg',
      'IMG_9445.jpg',
      'IMG_9488.jpg',
      'IMG_9520.jpg',
      'IMG_9529.jpg',
      'IMG_9531.jpg'
    ]
  }
]

export function images () {
  const imageData = []
  data.forEach(year => {
    const name = year.folder
    year.items.forEach(image => {
      const href = conf.prefix + name + '/' + image + conf.suffix2
      const src = conf.prefix + name + '/' + image + conf.suffix1
      let info = ''
      switch (name) {
        case 'one':
          info = '一岁'
          break
        case 'two':
          info = '两岁'
          break
        case 'three':
          info = '三岁'
          break
      }
      imageData.push({ info, href, src })
    })
  })
  return imageData
}
