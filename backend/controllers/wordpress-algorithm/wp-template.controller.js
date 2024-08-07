import wordpress from "wordpress";
import catchAysncErrors from "../../middlewares/catchAysncErrors.js";
import ErrorHandler from "../../utils/error-handler.js";
import { createPage, updatePageTitle } from "./helper/pageOperations.js";

export const createPages = catchAysncErrors(async (req, res, next) => {
  const {
    baseUrl,
    username,
    password,
    pages,
    slug,
    bodyContent,
    customMetaDesc = "",
    mainTitle = "",
    keywords = "",
    customFiledTitle = "",
  } = req.body;

  if (!baseUrl || !username || !password || !pages || !slug || !bodyContent) {
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
        bodyContent,
        customMetaDesc,
        keywords,
        customFiledTitle
      );
      if (mainTitle) {
        const replacedMainTitle = mainTitle.replace(
          /\${dynamicContent}/g,
          dynamicContent
        );
        await updatePageTitle(client, pageData, replacedMainTitle);
      }
    }
    res.status(200).json({
      success: true,
      message: `Following pages has been created successfully`,
      createdPages: NoOfPages,
    });
  } catch (error) {
    next(error);
  }
});
