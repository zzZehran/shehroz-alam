import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
// import blogType from "./blogType";

export const schema = {
  types: [blockContentType, categoryType, postType, authorType],
  // types: [blogType],
};
