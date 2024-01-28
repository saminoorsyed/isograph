import type {ReaderArtifact, ReaderAst} from '@isograph/react';
import { PetCheckinsCard as resolver } from '../../../components/PetCheckinsCard.tsx';

// the type, when read out (either via useLazyReference or via graph)
export type ReadOutType = (React.FC<any>);

export type ReadFromStoreType = ResolverParameterType;

const readerAst: ReaderAst<ReadFromStoreType> = [
  {
    kind: "Scalar",
    fieldName: "id",
    alias: null,
    arguments: null,
  },
  {
    kind: "Linked",
    fieldName: "checkins",
    alias: null,
    arguments: null,
    selections: [
      {
        kind: "Scalar",
        fieldName: "id",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "location",
        alias: null,
        arguments: null,
      },
      {
        kind: "Scalar",
        fieldName: "time",
        alias: null,
        arguments: null,
      },
    ],
  },
];

export type ResolverParameterType = { data:
{
  id: string,
  checkins: ({
    id: string,
    location: string,
    time: string,
  })[],
},
[index: string]: any };

// The type, when returned from the resolver
export type ResolverReturnType = ReturnType<typeof resolver>;

const artifact: ReaderArtifact<ReadFromStoreType, ResolverParameterType, ReadOutType> = {
  kind: "ReaderArtifact",
  resolver: resolver as any,
  readerAst,
  variant: { kind: "Component", componentName: "Pet.PetCheckinsCard" },
};

export default artifact;
