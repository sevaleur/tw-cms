export default {
  name: 'home', 
  type: 'document', 
  title: 'Home', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'title'
    },
    {
      name: 'showcase', 
      type: 'array', 
      title: 'Showcase', 
      of: [
        {
          name: 'link', 
          type: 'reference', 
          title: 'Showcase link', 
          to: [
            {
              type: 'gallery'
            }
          ]
        }
      ], 
      options: {
        layout: 'list'
      }
    }
  ]
}