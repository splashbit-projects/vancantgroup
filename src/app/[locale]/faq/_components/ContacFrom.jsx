"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    question: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a corrected email address.")
      .required("This field is required."),
    question: Yup.string().required("This field is required."),
  });

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(JSON.stringify(values));
      if (response.ok) {
        resetForm();
        setStatus({ success: true });
        setSubmitting(false);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <div className="form-wrap">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status, touched, errors }) => (
          <Form>
            <div>
              <Field
                name="name"
                type="text"
                placeholder="Your Name"
                className={touched.name && errors.name ? "invalid" : ""}
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder="Your Email"
                className={touched.email && errors.email ? "invalid" : ""}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <Field
                name="question"
                as="textarea"
                placeholder="Your Question"
                className={touched.question && errors.question ? "invalid" : ""}
              />
              <ErrorMessage name="question" component="div" className="error" />
            </div>

            <button
              type="submit"
              className="main-button"
              disabled={isSubmitting}
            >
              Submit
            </button>

            {status && status.success && (
              <p className="success">
                Your question has been submitted successfully. You will receive
                an email with a link to our FAQ page when your question will be
                answered.
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
