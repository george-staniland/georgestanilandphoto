/* eslint-disable import/no-anonymous-default-export */

export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
      {
        name: 'project_title',
        type: 'string',
        title: 'Project Title'
      },
      {
        name: 'project_year',
        type: 'number',
        title: 'Project Year'
      },
      {
        name: 'project_category',
        type: 'string',
        title: 'Project Category',
        options: {
          list: [
            {title: 'Commissioned', value: 'commissioned'},
            {title: 'Personal', value: 'personal'}
          ], // <-- predefined values
          layout: 'dropdown' // <-- defaults to 'dropdown'
        }
      }, 
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'cover_image',
        type: 'image',
        title: 'Cover Image'
      },
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [{type: 'image'}]
      },
      {
        name: 'orderRank',
        type: 'string',
        title: 'Order Rank',
        hidden: true,
      },
      {
        name: 'project_slug',
        type: 'slug',
        options: {
          source: 'project_title',
          slugify: (input: string) => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      }
    ]
  }