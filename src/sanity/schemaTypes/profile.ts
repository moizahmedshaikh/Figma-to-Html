import { defineField, defineType } from "sanity";


export const profile = defineType({
    name: "profile",
    type:"document",
    title:"Profile",
    fields:[
        defineField({
            name: "name",
            type: "string",
            title: "Name",
            validation: (rule)=> rule.required()
        }),

        defineField({
            name: "bio",
            type: "string",
            title: "Bio",
            validation: (rule)=> rule.required()
        }),

        defineField({
            name: "image",
            type: "image",
            title: "Image",
          }),
    ]
})