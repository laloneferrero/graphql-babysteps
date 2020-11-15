const {gql} = require('apollo-server');

//schema
const typeDefs = gql`
    type Curso {
        titulo: String
    }
    type Tecnologia {
        tecnologia: String
    }
    type CursosYTech {
        titulo: String
        tecnologia: String
    }
    input CursoInput {
        tecnologia: String
    }
    type Query {
        obtenerCursos(input:CursoInput!): [Curso]
        obtenerTecnologia: [Tecnologia]
        obtenerCursosyTech: [CursosYTech]
    }
`;

module.exports = typeDefs;