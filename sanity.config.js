import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { media } from 'sanity-plugin-media'

import { newTheme } from './theme'
import { structure } from './layout/structure'

export default defineConfig({
  name: 'traewarren',
  title: 'traewarren',

  projectId: 'ht6ko12m',
  dataset: 'production',

  plugins: [structureTool({ structure }), media(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  theme: newTheme
})
