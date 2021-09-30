            #observação: a extensão do cucumber formata assim sempre que salvo, não consegui deixar com a mesma identação dos exemplos
            #language: pt-br

            Funcionalidade: Visualizações
            Como usuário padrão
            Quero acessar a aba "Sobre" da "Compasso UOL"
            Para verificar se o número de visualizações é superior a 30k

            Contexto:
            Dado que esteja na página do Youtube

            Esquema do Cenário:
            Quando acessar o canal da "<empresa>"
            E ir na aba "Sobre"
            Então deverá validar se o número total de visualizações é superior a 30k

            Exemplos:
            | empresa      | visualizações  |
            | Compasso UOL | inferior a 30k |
            | QuintoAndar  | superior a 30k |
            | IMED         | superior a 30k |