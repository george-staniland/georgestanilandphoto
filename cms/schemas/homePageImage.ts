export default {
    name: 'home-page-image',
    type: 'document',
    title: 'Home Page Images',
    fields: [
      {
        type: 'string',
        name: 'title',
        title: 'Title',
      },
      {
        type: 'image',
        name: 'image',
        title: 'Image'
      },
      {
        title: 'Image Meta Data',
        name: 'imageMetaData',
        type: 'object',
        fields: [
          {name: 'imageTitle', type: 'string', title: 'Image Title'},
          {name: 'seriesOrClient', type: 'string', title: 'Series or Client'},
          {name: 'date', type: 'string', title: 'Date'},
        ]
      }
    ]
  }