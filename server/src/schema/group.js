import Joi from "@hapi/joi";

const usergroup = Joi.string()
  .min(1)
  .max(13)
  .required();

export const groupSchema = Joi.object({
  usergroup,
});
