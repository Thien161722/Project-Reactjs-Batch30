import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface UserType {
  name: string;
  mobible: string;
  email: string;
}

const subSchema = Yup.object({
  name: Yup.string().min(4).required(),
  mobile: Yup.string().min(10).max(10).required(),
  email: Yup.string().email().required(),
});
type FormData = Yup.InferType<typeof subSchema>;

const SubscribeToOurNewsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(subSchema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <section className="section_two_wrapper">
      <div className="sections section_form">
        <h2 className="section_title text-center">
          Subscribe to Our Newsletter
        </h2>
        <p className="section_desc text-center">
          Do not want to miss news, updates, note and any offer on our products,
          then please subscriber to our mailling list.
        </p>
        <form
          className="subscribe_form flex"
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Your name"
            name="name"
          />
          <p>{errors.name?.message}</p>

          <input
            {...register("mobile")}
            type="text"
            placeholder="Your Mobile phone"
            name="mobile"
          />
          <p>{errors.mobile?.message}</p>

          <input
            {...register("email")}
            type="email"
            placeholder="Your email address"
            name="email"
            className="input"
          />
          <p>{errors.email?.message}</p>

          <button type="submit" className="button">
            <i className="fa fa-envelope-o"></i> Subscribe email list
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeToOurNewsletter;
