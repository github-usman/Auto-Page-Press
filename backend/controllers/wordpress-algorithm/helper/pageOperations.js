import ErrorHandler from "./../../../utils/error-handler.js";
import { replaceDynamicPlaceholders } from "./replaceDynamicPlaceholder.js";

export async function createPage(
  client,
  dynamicContent,
  slug,
  bodyContent,
  customMetaDesc,
  keywords,
  customFiledTitle
) {
  bodyContent = replaceDynamicPlaceholders(bodyContent, dynamicContent);
  bodyContent = bodyContent.replace(/\${dynamicContent}/g, dynamicContent);
  slug = slug.replace(/\${dynamicContent}/g, dynamicContent);
  customMetaDesc = customMetaDesc.replace(
    /\${dynamicContent}/g,
    dynamicContent
  );
  keywords = keywords.replace(/\${dynamicContent}/g, dynamicContent);
  customFiledTitle = customFiledTitle.replace(
    /\${dynamicContent}/g,
    dynamicContent
  );

  const customFields = [];
  if (customMetaDesc)
    customFields.push({ key: "_yoast_wpseo_metadesc", value: customMetaDesc });
  if (keywords) customFields.push({ key: "keywords", value: keywords });
  if (customFiledTitle)
    customFields.push({ key: "title", value: customFiledTitle });

  return new Promise((resolve, reject) => {
    client.newPost(
      {
        type: "page",
        title: slug,
        content: bodyContent,
        status: "publish",
        customFields,
      },
      (error, data) => {
        if (error) {
          console.error(`Error creating page for ${dynamicContent}:`, error);
          reject(error);
        } else {
          console.log(
            `Page for ${dynamicContent} created successfully! Response data:`,
            data
          );
          resolve(data);
        }
      }
    );
  });
}

export async function updatePageTitle(client, pageId, mainTitle) {
  console.log("Updating title for page", pageId);
  return new Promise((resolve, reject) => {
    client.editPost(pageId, { title: mainTitle }, (error, data) => {
      if (error) {
        return reject(
          ErrorHandler(`Error updating title for page ${pageId}:`, 501)
        );
      } else {
        resolve(data);
      }
    });
  });
}
