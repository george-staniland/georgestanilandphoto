/* eslint-disable import/no-anonymous-default-export */

export default {
    name: 'image_galleries',
    type: 'document',
    title: 'Image Galleries',
    fields: [
      {
        name: 'gallery_name',
        type: 'string',
        title: 'Gallery Name'
      },
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        options: {
          sortable: true,
          layout: 'grid',
        },
        of: [{type: 'image_with_meta'}]
      }
    ]
  }
