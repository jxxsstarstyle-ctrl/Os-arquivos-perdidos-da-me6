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

