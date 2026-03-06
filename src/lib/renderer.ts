const templateMap: Record<string, () => Promise<{ default: any }>> = {
  'generic-dental': () =>
    import('../templates/generic/generic-dental/Template.astro'),
  'generic-legal': () =>
    import('../templates/generic/generic-legal/Template.astro'),
  'custom-client-a': () =>
    import('../templates/custom/custom-client-a/Template.astro'),
  'custom-client-b': () =>
    import('../templates/custom/custom-client-b/Template.astro'),
};

export async function resolveTemplate(templateKey: string): Promise<any | null> {
  const loader = templateMap[templateKey];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
