//? TS::Package
import { graphql, type TadaDocumentNode } from "gql.tada";
import { print as gqlPrint } from "graphql/language/printer";
//? TS::Source
import type { Gallery } from "$lib/schema/graphql";

const DocumentNodeQuery: TadaDocumentNode<
	{
		getGallery: Gallery;
	},
	{},
	void
> = graphql(`
	query getGallery {
		getGallery {
			id
		}
	}
`);

export const StringQuery: string = gqlPrint(DocumentNodeQuery);
console.log(StringQuery);
