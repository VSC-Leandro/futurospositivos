const categoriesToColors: { [color: string]: { keywords: string[], textColor: string } } = {
  '#475724': { keywords: ['agroecologia', 'alimentação saudável'], textColor: '#FFFFFF' },
  '#90dce5': { keywords: ['democracia', 'ativismo', 'direitos'], textColor: '#000000' },
  '#8856f5': { keywords: ['economia do cuidado', 'economia solidária', 'empreendedorismo social', 'empreendimento social'], textColor: '#FFFFFF' },
  '#d5742f': { keywords: ['tecnopolítica', 'tecnologia', 'governança', 'juventudes', 'educação', 'uso da terra'], textColor: '#FFFFFF' },
  '#dc4a6e': { keywords: ['cidades', 'energia', 'mobilidade'], textColor: '#FFFFFF' },
  '#ecb757': { keywords: ['arte', 'cultura', 'outros imaginários'], textColor: '#000000' },
  '#777777': { keywords: ['espiritualidade', 'estilos de vida sustentáveis'], textColor: '#FFFFFF'},
};

export const getTagStyle = (tag: string): { backgroundColor: string; color: string } => {
  const normalizedTag = tag.toLowerCase().trim();
  for (const color in categoriesToColors) {
    for (const keyword of categoriesToColors[color].keywords) {
      if (normalizedTag.includes(keyword)) {
        return { backgroundColor: color, color: categoriesToColors[color].textColor };
      }
    }
  }
  return { backgroundColor: '#DCE5B1', color: '#383838' }; // Default
};

export const getInitiativeColor = (tags: string[]): string => {
    for (const tag of tags) {
        const normalizedTag = tag.toLowerCase().trim();
        for (const color in categoriesToColors) {
            for (const keyword of categoriesToColors[color].keywords) {
                if (normalizedTag.includes(keyword)) {
                    return color;
                }
            }
        }
    }
    return '#44b2a0'; // default forum-positive-bg
};
