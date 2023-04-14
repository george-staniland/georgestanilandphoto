import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {schemaTypes} from './schemas'



export default defineConfig({
  name: 'default',
  title: 'George Staniland Photo',
  projectId: 'nimz3ndn',
  dataset: 'production',
  schema: {
    types: schemaTypes,
  },
  plugins: [
      deskTool({
          structure: (S, context) => { 
              return  S.list()
                  .title('Content')
                  .items([
                      // Minimum required configuration
                      orderableDocumentListDeskItem({type: 'projects', title: 'Projects', S, context}),
                      ...S.documentTypeListItems().filter(
                        item => item.getId() != 'image_with_meta',
                      ).filter(
                        item => item.getId() != 'projects',
                      ),
                      // ... all other desk items
              ])
          },
      }),
      visionTool(),
      media()
  ]
})