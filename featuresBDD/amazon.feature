            #observação: a extensão do cucumber formata assim sempre que salvo, não consegui deixar com a mesma identação dos exemplos
            #language: pt-br

            Funcionalidade: Título do Primeiro Livro
            Como usuário padrão
            Quero acessar a aba de "livros" da "Amazon" e pesquisar por "ISTQB"
            Para verificar se o primeiro livro da lista de resultados possui no título a palavra "Syllabus"

            Contexto:
            Dado que esteja na página da Amazon

            Esquema do Cenário:
            Quando acessar a aba de "<produtos>"
            E pesquisar por "<sigla>"
            Então deverá validar se no título do produto contém a "<palavra>"

            Exemplos:
            | produtos  | sigla | palavra  | contém |
            | livro     | ISTQB | Syllabus | sim    |
            | livro     | ABC   | Alfabeto | não    |
            | alimentos | NCH   | Sachê    | sim    |