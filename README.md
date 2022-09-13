# react-SPA-doguito

Aula 1: instalamos o pacote react-router-dom e trabalhamos com o React Router para fazer o roteamento de páginas, permitindo a exibição da página inicial e da página sobre.

Dica: O React não inclui roteamento de páginas em seu pacote padrão.

Aula 2: criamos um indicativo de que uma rota não existe (erro 404) para que o usuario tenha feedback de uma rota inexistente.

Aula 3: Por quê é vantajoso utilizar uma SPA (Single Page Application), ao invés de uma página tradicional?

Isso se deve ao fato de uma aplicação single page application fazer apenas uma requisição para o servidor, que devolve um arquivo html e, quem fica responsável por exibir o conteúdo são os componentes javascript. Já em uma aplicação tradicional o usuário faz uma requisição e recebe de volta o arquivo html que diz respeito aquela requisição apenas. O tempo de carregamento diminui em SPAs e consequentemente se tem uma experiência mais fluída.

Aula 4: criamos o componente de cabeçalho da aplicação e passamos a utilizar ele para todas as páginas. Montamos a navbar utilizando o React Router para simular uma MPA (Multi Pages Application).

Aula 5: resolvendo o problema da aplicação fazer um novo request a cada nova rota que o usuário solicita, o comportamento deveria ser a página ser renderizada pelo js. Ao invés de usar âncoras e href, utiliza-se a função Link do react-router-dom.
