import {defineField, defineType} from 'sanity'

export const marqueeType = defineType({
  name: 'marquee',
  title: 'Marquee',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'texts',
      title: 'Accouncement Texts',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
