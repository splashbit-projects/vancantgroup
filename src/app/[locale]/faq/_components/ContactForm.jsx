"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = ({
  contactFormNamePlaceholder,
  contactFormEmailPlaceholder,
  contactFormQuestionPlaceholder,
  contactFormSubmitButton,
  contactFormSuccessMessage,
  validation_required,
  validation_email
}) => {
  const initialValues = {
    name: "",
    email: "",
    question: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(validation_required),
    email: Yup.string()
      .email(validation_email)
      .required(validation_required),
    question: Yup.string().required(validation_required),
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
    <div className="faq-form">
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
                placeholder={contactFormNamePlaceholder}
                className={touched.name && errors.name ? "invalid" : ""}
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder={contactFormEmailPlaceholder}
                className={touched.email && errors.email ? "invalid" : ""}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <Field
                name="question"
                as="textarea"
                placeholder={contactFormQuestionPlaceholder}
                className={touched.question && errors.question ? "invalid" : ""}
              />
              <ErrorMessage name="question" component="div" className="error" />
            </div>

            <button
              type="submit"
              className="main-button"
              disabled={isSubmitting}
            >
              {contactFormSubmitButton}
            </button>

            {status && status.success && (
              <p className="success">
                {contactFormSuccessMessage}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
