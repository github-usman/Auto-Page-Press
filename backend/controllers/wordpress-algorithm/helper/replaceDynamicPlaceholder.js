export const replaceDynamicPlaceholders = (htmlContent, dynamicContent) => {
  const dynamicContentRegex =
    /<span class="select_dynamic_content"><span class="hidden-dynamic-text">\$\{<\/span><span class="select_dynamic_content_inner">([^<]+)<\/span><span class="hidden-dynamic-text">}<\/span><\/span>/g;
  let parsedContent = htmlContent.replace(dynamicContentRegex, (match, p1) => {
    return `\${${p1}}`;
  });
  parsedContent = parsedContent.replace(/\$\{[^}]+\}/g, dynamicContent);

  return parsedContent;
};
