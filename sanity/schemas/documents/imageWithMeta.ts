import { defineType, defineField } from "sanity";

export const imageWithMeta = defineType ({
  name: 'image_with_meta',
  type: 'document',
  title: 'Image With Meta',
  fields: [
    defineField ({
      type: 'image',
      name: 'image',
      title: 'Image'
    }),
    defineField({
      type: 'string',
      name: 'altText',
      title: 'Alt Text',
    }), 
    defineField({
      title: 'Image Meta Data',
      name: 'imageMetaData',
      type: 'object',
      fields: [
        {name: 'imageTitle', type: 'string', title: 'Image Title'},
        {name: 'seriesOrClient', type: 'string', title: 'Series or Client'},
        {name: 'date', type: 'string', title: 'Date'},
      ]
    })
  ]
});