#observação: a extensão do cucumber formata assim sempre que salvo, não consegui deixar com a mesma identação dos exemplos
#language: pt-br

Funcionalidade: Vagas para Automação de Testes
Como usuário padrão
Quero acessar a página da "Gupy de Transformação de Negócios e Desenvolvimento" através da página da "Compasso UOL"
Para verificar se existem vagas para "Automação de Testes"

Cenário: Validar se a URL foi redirecionada
Dado que a aba "Cultura" da "CompassoUOl" foi acessada
E clicou-se em "Confira as nossas vagas"
Então o botão deve redirecionar para a página "Gupy de Transformação de Negócios e Desenvolvimento"

Cenário: Validar se existem vagas para Automação de Testes
Dado que a aba "Cultura" da página "CompassoUOl" foi acessada
E clicou-se em "Confira as nossas vagas"
E o link redirecionou para a página "Gupy de Transformação de Negócios e Desenvolvimento"
Então deve-se validar se existem vagas para "Automação de Testes" disponíveis