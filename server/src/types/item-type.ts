import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Item {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field(type => ID)
    receipt_id: string;

    @Field({ nullable: true })
    category: string[];
}