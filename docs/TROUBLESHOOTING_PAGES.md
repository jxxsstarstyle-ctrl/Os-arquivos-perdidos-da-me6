# Troubleshooting de Deploy (GitHub Pages)

Se o site "publica" mas parece não mudar, siga este checklist simples:

1. **Pull request mergeado na branch `main`**
   - O workflow só publica quando há push na `main`.

2. **Actions verde**
   - Abra **Actions** e confirme que o job `Deploy Pages` terminou com `Success`.

3. **URL correta**
   - Use sempre: `https://jxxsstarstyle-ctrl.github.io/Os-arquivos-perdidos-da-me6/#/Home`
   - Esta aplicação usa hash routing (`#/...`).

4. **Atualização de cache**
   - Teste em aba anônima ou use `Ctrl + F5`.

5. **Configuração esperada no código**
   - `src/main.jsx` usa `HashRouter`.
   - `vite.config.js` usa `base: '/Os-arquivos-perdidos-da-me6/'`.

## Quando o GitHub disser "This branch has conflicts"

Se você não programa, use este fluxo simples:

1. Abra o PR e clique em **Resolve conflicts**.
2. Para estes arquivos do app (`index.html`, `404.html`, `src/main.jsx`, `src/styles/*`, `pages/*`, `components/*`), escolha **Incoming**.
   - Motivo: aqui o "Incoming" é o pacote novo do app React + Vite com as correções de rota do Pages.
3. Clique em **Mark as resolved** em cada arquivo.
4. Clique em **Commit merge**.
5. Volte no PR e clique em **Merge pull request**.

Depois do merge:

- Abra **Actions** e espere o workflow `Deploy Pages` terminar com `Success`.
- Teste na URL com hash: `https://jxxsstarstyle-ctrl.github.io/Os-arquivos-perdidos-da-me6/#/Home`.
- Se ainda aparecer versão antiga, abra em aba anônima e faça `Ctrl + F5`.
