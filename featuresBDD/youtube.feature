            #observação: a extensão do cucumber formata assim sempre que salvo, não consegui deixar com a mesma identação dos exemplos
            #language: pt-br

            Funcionalidade: Visualizações
            Como usuário padrão
            Quero verificar o número de visualizações da aba "Sobre" da Compasso UOL
            Para verificar se é superior a 30k

            Contexto:
            Dado que esteja na página do Youtube

            Esquema do Cenário:
            Quando acessar o canal da "<empresa>"
            E ir na aba "Sobre"
            Então deverá validar se o número total de visulizações é superior a 30k

            Exemplos:
            | empresa      | visualizações  |
            | Compasso UOL | inferior a 30k |