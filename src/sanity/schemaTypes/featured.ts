import { defineField, defineType } from "sanity";

export const featured = defineType({
  name: "featured",
  type: "document",
  title: "Featured",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),

    defineField({
      name: "year",
      type: "string",
      title: "Year",
    }),
  ],
});
