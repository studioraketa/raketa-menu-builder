import React from "react";
import { Field } from "@raketa-cms/raketa-mir";

const extractWebpPath = (path) => {
  const arrayPath = path.split(".");
  arrayPath[arrayPath.length - 1] = "webp";

  return arrayPath.join(".");
};

const Image = ({ image }) => (
  <picture>
    <source srcSet={extractWebpPath(image)} type="image/webp" />
    <source srcSet={image} />
    <img src={image} loading="lazy" />
  </picture>
);

Image.defaults = {
  image: "https://placehold.it/1920x1080",
  variant: "lead",
};

Image.admin = ({ register }) => {
  return (
    <>
      <Field r={register} name="image" label="Image" required />
      <Field r={register} as="select" name="variant" label="Variant" required>
        <option value="lead">Lead</option>
        <option value="square">Square</option>
        <option value="card_horizontal">Card</option>
      </Field>
    </>
  );
};

export default Image;
