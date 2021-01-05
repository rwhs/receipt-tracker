import { Field, ObjectType, ID } from 'type-graphql';
import { Item } from './item-type';

@ObjectType()
export class Receipt {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field(type => ID)
    user_id: string;

    @Field()
    date_added: Date;

    @Field(type => [Item])
    items: Item[];
}