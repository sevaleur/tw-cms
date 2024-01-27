export default {
  name: 'metadata', 
  type: 'document', 
  title: 'Metadata', 
  fields: [
    {
      name: 'title', 
      type: 'string', 
      title: 'Title'
    }, 
    {
      name: 'description', 
      type: 'string', 
      title: 'Description'
    }, 
    {
      name: 'image', 
      type: 'image', 
      title: 'Image', 
      fields: [
        {
          name: 'alt', 
          type: 'string', 
          title: 'Alternative text'
        }
      ]
    }
  ]
}