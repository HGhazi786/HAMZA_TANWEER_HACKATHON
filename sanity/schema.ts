import { type SchemaTypeDefinition } from 'sanity'
import product_cards from './product_cards'
import page from './page';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product_cards,page],
};
