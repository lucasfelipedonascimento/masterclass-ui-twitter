# Anotações da MasterClass

- **Renderizar**: mostrar em tela

- **Programação imperativa**: precisamos ditar pro código exatamente o que precisa ser feito
- **Programação declarativa**: escrevemos códigos menores e "diretos"

- **Componentes**: Pequenas partes de interfaces reutilizáveis

- **Typescript**: Ferramenta de tipagem estática para JavaScript
- **Tipagem estática**: Mecanismo para evitar erros ENQUANTO estamos desenvolvendo o nosso app

**Iterando arrays:**

- **forEach**: não tem retorno
- **map**: sempre retorna um valor
- **key**: chave **"única"**, que deve ser passada para o react saber exatamente qual elemento da lista que estou interando ou "mexendo"

- **Contextos**: No react existem locais onde eu tenho acesso a algumas informações, e locais aonde eu não consigo ter acesso a essas mesmas informações

---

**SPA**: **Single Page Application** => quero evitar redirecionamentos

- O React ele não fica monitorando o componente para ver se houve alguma mudança
- **Estado**: variáveis que o React monitora
- No React nós não alteramos nossas informações, nós **"CRIAMOS"** uma nova versão dessas informações - **IMUTABILIDADE**

**Fluxo de renderização:**

**1.** Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
**2.** Toda vez que o seu compoente PAI renderizar.
**3.** Toda vez que alguma das suas propriedades mudarem.
**4.** O **JSX não é recalculado**

**Algoritmo de reconciliação**

**1.** Criar em memória a nova versão do HTML do componente
**2.** Compara essa nova versão com a versão anterior do HTML (Diff: diferença)
**3.** Aplicar as operações JavaScript para alterar somente o necessário no HTML
