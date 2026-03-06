/** Astro component module shape returned by dynamic import. */
type AstroComponentModule = { default: Parameters<typeof import('astro').render>[0] };

const templateMap: Record<string, () => Promise<AstroComponentModule>> = {
  'generic-dental': () =>
    import('../templates/generic/generic-dental/Template.astro'),
  'generic-legal': () =>
    import('../templates/generic/generic-legal/Template.astro'),
  'custom-client-a': () =>
    import('../templates/custom/custom-client-a/Template.astro'),
  'custom-client-b': () =>
    import('../templates/custom/custom-client-b/Template.astro'),
};

/**
 * Resolves an Astro template component by its template key.
 *
 * @param templateKey - Identifier for the template (e.g. `'generic-dental'`, `'custom-client-a'`).
 * @returns The default export (Astro component) for the template, or `null` if not found.
 */
export async function resolveTemplate(
  templateKey: string,
): Promise<AstroComponentModule['default'] | null> {
  const loader = templateMap[templateKey];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
