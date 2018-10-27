import gql from "graphql-tag";

export const NOTE_FRAGMENT = gql`
    fragment NotePars of Note{
        id
        title
        content
    }
`