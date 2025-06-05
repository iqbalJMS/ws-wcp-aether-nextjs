function escapeHtml(str: any) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const allowedAlignments = new Set(['right', 'center', 'left']);

export const applyTextAlignmentStylesTable = (rendered: string): string => {
  // These replacements don't need modification as they use fixed strings
  rendered = rendered.replace(
    /<p class="text-align-right"([^>]*)>/g,
    '<p class="text-align-right"$1 style="text-align: right !important;">'
  );

  rendered = rendered.replace(
    /<p class="text-align-center"([^>]*)>/g,
    '<p class="text-align-center"$1 style="text-align: center !important;">'
  );

  rendered = rendered.replace(
    /<p class="text-align-left"([^>]*)>/g,
    '<p class="text-align-left"$1 style="text-align: left !important;">'
  );

  rendered = rendered.replace(
    /<td>\s*<p class="text-align-right"/g,
    '<td style="text-align: right !important;"><p class="text-align-right"'
  );

  rendered = rendered.replace(
    /<td>\s*<p class="text-align-center"/g,
    '<td style="text-align: center !important;"><p class="text-align-center"'
  );

  rendered = rendered.replace(
    /<td>\s*<p class="text-align-left"/g,
    '<td style="text-align: left !important;"><p class="text-align-left"'
  );

  rendered = rendered.replace(
    /<th>\s*<p class="text-align-right"/g,
    '<th style="text-align: right !important;"><p class="text-align-right"'
  );

  rendered = rendered.replace(
    /<th>\s*<p class="text-align-center"/g,
    '<th style="text-align: center !important;"><p class="text-align-center"'
  );

  rendered = rendered.replace(
    /<th>\s*<p class="text-align-left"/g,
    '<th style="text-align: left !important;"><p class="text-align-left"'
  );

  rendered = rendered.replace(
    /<th([^>]*)>\s*(?!<p class="text-align)/g,
    '<th$1 style="text-align: left !important;">'
  );

  // Fix the thead class regex replacement with proper escaping
  rendered = rendered.replace(
    /<thead[^>]*class="([^"]*text-align-(right|center|left)[^"]*)"([^>]*)>/g,
    (match, classList, alignment) => {
      return `<thead class="${escapeHtml(classList)}" style="text-align: ${escapeHtml(alignment)} !important;"${match.slice(match.indexOf('">')).replace(/^"/, '')}>`;
    }
  );

  rendered = rendered.replace(
    /<thead[^>]*>(\s*)<tr[^>]*>(\s*)<th([^>]*)>\s*<p class="text-align-right"/g,
    '<thead><tr><th$3 style="text-align: right !important;"><p class="text-align-right"'
  );

  rendered = rendered.replace(
    /<thead[^>]*>(\s*)<tr[^>]*>(\s*)<th([^>]*)>\s*<p class="text-align-center"/g,
    '<thead><tr><th$3 style="text-align: center !important;"><p class="text-align-center"'
  );

  rendered = rendered.replace(
    /<thead[^>]*>(\s*)<tr[^>]*>(\s*)<th([^>]*)>\s*<p class="text-align-left"/g,
    '<thead><tr><th$3 style="text-align: left !important;"><p class="text-align-left"'
  );

  rendered = rendered.replace(
    /<thead([^>]*)>(\s*)<tr([^>]*)>(\s*)<th([^>]*)>\s*(?!<p class="text-align)/g,
    '<thead$1><tr$3><th$5 style="text-align: left !important;">'
  );

  // Fix the rowspan regex replacement with proper escaping
  rendered = rendered.replace(
    /<th([^>]*)rowspan="([^"]+)"([^>]*)>\s*<p class="text-align-(right|center|left)"/g,
    (match, before, rowspan, after, alignment) => {
      const safeRowspan = /^[0-9]+$/.test(rowspan) ? rowspan : '1';
      const safeAlignment = allowedAlignments.has(alignment) ? alignment : 'left';
      return `<th${before}rowspan="${escapeHtml(safeRowspan)}"${after} style="text-align: ${escapeHtml(safeAlignment)} !important;"><p class="text-align-${escapeHtml(alignment)}"`;
    }
  );

  // Fix the colspan regex replacement with proper escaping
  rendered = rendered.replace(
    /<th([^>]*)colspan="([^"]+)"([^>]*)>\s*<p class="text-align-(right|center|left)"/g,
    (match, before, colspan, after, alignment) => {
      const safeColspan = /^[0-9]+$/.test(colspan) ? colspan : '1';
      const safeAlignment = allowedAlignments.has(alignment) ? alignment : 'left';
      return `<th${before}colspan="${escapeHtml(safeColspan)}"${after} style="text-align: ${escapeHtml(safeAlignment)} !important;"><p class="text-align-${escapeHtml(alignment)}"`;
    }
  );

  // Fix the rowspan regex replacement without p tag
  rendered = rendered.replace(
    /<th([^>]*)rowspan="([^"]+)"([^>]*)>\s*(?!<p class="text-align)/g,
    (match, before, rowspan, after) => {
      return `<th${before}rowspan="${escapeHtml(rowspan)}"${after} style="text-align: left !important;">`;
    }
  );

  // Fix the colspan regex replacement without p tag
  rendered = rendered.replace(
    /<th([^>]*)colspan="([^"]+)"([^>]*)>\s*(?!<p class="text-align)/g,
    (match, before, colspan, after) => {
      return `<th${before}colspan="${escapeHtml(colspan)}"${after} style="text-align: left !important;">`;
    }
  );

  return rendered;
};
