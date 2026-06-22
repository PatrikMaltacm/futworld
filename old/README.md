# ⚽ FutWorld

Projeto colaborativo focado no ecossistema do futebol, desenvolvido com foco em boas práticas de estruturação para iniciantes.

## 🎨 Identidade Visual

Para manter a consistência entre todos os colaboradores, utilizamos variáveis CSS para gerenciar nossas cores. **Não utilize cores hexadecimais diretamente nos elementos.**

### Variáveis de Cor (CSS Custom Properties)
```css
:root {
  /* Backgrounds */
  --bg-main: #0F1113;
  --bg-surface: #1A1D21;

  /* Brand Colors */
  --color-primary: #2D9CDB; /* Azul de Ação */
  --color-accent: #27AE60;  /* Verde Gramado */
  --color-error: #EB5757;   /* Alerta/Vermelho */

  /* Textos */
  --text-high: #F8F9FA;
  --text-low: #9BA3AF;
}
