export default {
  name: 'cases', 
  type: 'document', 
  title: 'Cases', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Title', 
    }, 
    {
      name: 'showcase',
      type: 'array',
      title: 'Showcase',
      validation: Rule => Rule.min(1).unique(),
      of: [
        {
          name: 'link',
          type: 'reference',
          title: 'Project',
          to: [
            {
              type: 'gallery'
            }
          ]
        },
      ],
      options: {
        layout: 'list',
      },
    },
  ]
}