export function loadSettingsTooltip() {
  // TOOLTIP
  tippy('#tool', {
    theme: 'custom',

    popperOptions: {
      modifiers: [{ name: 'flip', enabled: false }],
    },
    content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
    maxWidth: 170,
  });
}
