export default {
  name: 'gallery', 
  type: 'document', 
  title: 'Gallery', 
  fields: [
    {
      name: 'slug', 
      type: 'slug', 
      title: 'Slug',
      description: 'Add a custom slug for the URL',
      validation: Rule => Rule.required()
    },
    {
      name: 'title', 
      type: 'string', 
      title: 'Title',
      validation: Rule => Rule.required()
    }, 
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: false,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              validation: Rule => Rule.required()
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ]
}