import { type SchemaTypeDefinition } from 'sanity'
import { featured } from './featured'
import { profile } from './profile'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [featured,profile],
}
