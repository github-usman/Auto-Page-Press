import wordpress from "wordpress";
import catchAysncErrors from "../../middlewares/catchAysncErrors.js";
import ErrorHandler from "../../utils/error-handler.js";

// Helper function to create a page
async function createPage(
  client,
  dynamicContent,
  slug,
  htmlContent,
  customMeta,
  keywords,
  customFiledTitle
) {
  console.log("Creating page for", dynamicContent);

  // Dynamically construct customFields array based on provided values
  const customFields = [];
  if (customMeta)
    customFields.push({ key: "_yoast_wpseo_metadesc", value: customMeta });
  if (keywords) customFields.push({ key: "keywords", value: keywords });
  if (customFiledTitle)
    customFields.push({ key: "title", value: customFiledTitle });

  return new Promise((resolve, reject) => {
    client.newPost(
      {
        type: "page",
        title: slug,
        content: htmlContent,
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

// Helper function to update a page title
async function updatePageTitle(client, pageId, mainTitle) {
  console.log("Updating title for page", pageId);
  return new Promise((resolve, reject) => {
    client.editPost(pageId, { title: mainTitle }, (error, data) => {
      if (error) {
        console.error(`Error updating title for page ${pageId}:`, error);
        reject(error);
      } else {
        console.log(
          `Title updated successfully for page ${pageId}! Response data:`,
          data
        );
        resolve(data);
      }
    });
  });
}

// Register user
export const createPages = catchAysncErrors(async (req, res, next) => {
  const {
    baseUrl,
    username,
    password,
    pages,
    slug,
    htmlContent = "",
    custom_meta = "",
    keywords = "",
    mainTitle = "",
    customFiledTitle = "",
  } = req.body;

  // Validate mandatory parameters
  if (!baseUrl || !username || !password || !pages || !slug) {
    return next(new ErrorHandler("Missing mandatory parameters", 400));
  }

  const client = wordpress.createClient({
    url: baseUrl,
    username,
    password,
  });

  try {
    const NoOfPages = [];
    for (const dynamicContent of pages) {
      NoOfPages.push(`Page : ${dynamicContent}`);
      const pageData = await createPage(
        client,
        dynamicContent,
        slug,
        htmlContent,
        custom_meta,
        keywords,
        customFiledTitle
      );
      if (mainTitle) {
        await updatePageTitle(client, pageData, mainTitle);
      }
    }
    res.status(200).json({
      success: true,
      message: `Following pages created successfully: ${NoOfPages.join(", ")}`,
    });
  } catch (error) {
    next(error);
  }
});
