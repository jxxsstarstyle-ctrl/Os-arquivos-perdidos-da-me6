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


6. **Fallback 404 dentro do `dist`**
   - O arquivo de fallback precisa estar em `public/404.html` (não só na raiz do repo).
   - Assim o Vite inclui o 404 no build e o GitHub Pages consegue redirecionar refresh/F5 para `#/...`.

## Quando o GitHub disser "This branch has conflicts"

Se você não programa, use este fluxo simples:

1. Abra o PR e clique em **Resolve conflicts**.
2. Para estes arquivos do app (`index.html`, `public/404.html`, `src/main.jsx`, `src/styles/*`, `pages/*`, `components/*`), escolha **Incoming**.
   - Motivo: aqui o "Incoming" é o pacote novo do app React + Vite com as correções de rota do Pages.
3. Clique em **Mark as resolved** em cada arquivo.
4. Clique em **Commit merge**.
5. Volte no PR e clique em **Merge pull request**.

Depois do merge:

- Abra **Actions** e espere o workflow `Deploy Pages` terminar com `Success`.
- Teste na URL com hash: `https://jxxsstarstyle-ctrl.github.io/Os-arquivos-perdidos-da-me6/#/Home`.
- Se ainda aparecer versão antiga, abra em aba anônima e faça `Ctrl + F5`.


7. **Acesso direto sem hash (`/Home`, `/Read`, `/Buy`)**
   - Foram adicionadas páginas de redirecionamento em `public/Home/index.html`, `public/Read/index.html` e `public/Buy/index.html`.
   - Se alguém abrir URL sem `#/` por engano, o site redireciona para a rota hash correta automaticamente.


8. **Prova de deploy em arquivo estático**
   - Abra: `https://jxxsstarstyle-ctrl.github.io/Os-arquivos-perdidos-da-me6/version.json`.
   - O arquivo deve mostrar `"version": "0.0.3v alfa"`.
   - Se esse arquivo estiver novo e a tela estiver antiga, limpe cache do navegador.
