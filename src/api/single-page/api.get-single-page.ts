"use server";

// TODO: waiting for API drupal
export async function API_GetSinglePage({
  // eslint-disable-next-line no-unused-vars
  lang,
}: {
  lang: string;
}): Promise<any> {
  try {
    const response: any = await {
      // TODO: temporary abstraction
      data: [
        {
          description: "description",
          entity_bundle: "header",
          content: [
            {
              title: "title",
              description: "description",
            },
          ],
        },
      ],
    };

    return response;
  } catch (error) {
    console.error("An error occurred during Get Single Page:", error);
    return [];
  }
}
