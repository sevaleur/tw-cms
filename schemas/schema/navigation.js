export default {
  name: 'navigation', 
  type: 'document', 
  title: 'Navigation', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Title'
    }, 
    {
      name: 'logo', 
      type: 'image', 
      title: 'Logo', 
      fields: [
        {
          name: 'alt', 
          type: 'string', 
          title: 'Alternative text'
        }
      ]
    }, 
    {
      name: 'nav_items', 
      type: 'array', 
      title: 'Navigation menu',
      validation: Rule => Rule.unique(),
      of: [
        {
          name: 'link', 
          type: 'reference',
          title: 'Link', 
          to: [ 
            { 
              type: 'cases' 
            },
            { 
              type: 'about' 
            }, 
          ]
        }
      ] 
    }, 
    {
      name: 'topRightOne', 
      type: 'string', 
      title: 'Top right (first word)'
    }, 
    {
      name: 'topRightTwo', 
      type: 'string', 
      title: 'top right (last word)'
    }
  ]
}