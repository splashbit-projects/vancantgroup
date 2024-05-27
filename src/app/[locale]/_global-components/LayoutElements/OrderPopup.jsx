"use client";
import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import { usePopup } from "@/src/utils/PopupsContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomInput = React.forwardRef(({ value, onClick, inputPlaceholder }, ref) => (
  <span
    className="custom-input"
    data-placeholder={inputPlaceholder}
    onClick={onClick}
    ref={ref}
  >
    <span>{value || inputPlaceholder}</span>
    <img src="/images/date.svg" />
  </span>
));

const FormikDatePicker = ({ placeholder, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <div>
      <DatePicker
        {...field}
        {...props}
        selected={field.value ? new Date(field.value) : null}
        onChange={(date) => setFieldValue(field.name, date)}
        customInput={<CustomInput inputPlaceholder={placeholder} />}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

function OrderPopup({ orderTitle, placeholders, validationMessages }) {
  const { orderPopupDisplay, setOrderPopupDisplay, serviceValue } = usePopup();
  const [resetFormFunction, setResetFormFunction] = useState(() => () => {});

  const validationSchema = Yup.object({
    name: Yup.string().required(validationMessages.required),
    email: Yup.string()
      .email(validationMessages.email)
      .required(validationMessages.required),
    phone: Yup.string().required(validationMessages.required),
    project: Yup.string().required(validationMessages.required),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      validationMessages.acceptTerms
    ),
  });

  console.log("serviceValue", serviceValue);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    project: "",
    description: "",
    date: null,
    acceptTerms: false,
    service: serviceValue,
  };

  const closePopup = () => {
    setOrderPopupDisplay(false);
    resetFormFunction();
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const formValue = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        project: values.project,
        description: values.description,
        date: values.date,
        service: serviceValue,
      };
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });
      console.log(JSON.stringify(formValue));
      if (response.ok) {
        resetForm();
        setStatus({ success: true });
        setSubmitting(false);
        setResetFormFunction(() => resetForm);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      setResetFormFunction(() => resetForm);
    }, 400);
  };

  return (
    <div className={`order-popup-wrap ${orderPopupDisplay ? "opened" : ""}`}>
      <div className="overlay" onClick={() => closePopup()}></div>
      <div className="popup-inner">
        <svg
          className="popup-close"
          onClick={() => closePopup()}
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 18.5L2 2.5M18 2.5L2 18.5"
            stroke="#fff"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <div>
          <div className="form-wrap">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {({ isSubmitting, status, touched, errors }) => (
                <Form>
                  {!status && (
                    <div className="form-inner">
                      <h2>
                        <span
                          dangerouslySetInnerHTML={{ __html: serviceValue }}
                        />{" "}
                        {orderTitle}
                      </h2>
                      <Field type="hidden" name="service" />
                      <div>
                        <Field
                          name="name"
                          type="text"
                          placeholder={placeholders.name}
                          className={
                            touched.name && errors.name ? "invalid" : ""
                          }
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div>
                        <Field
                          name="email"
                          type="email"
                          placeholder={placeholders.email}
                          className={
                            touched.email && errors.email ? "invalid" : ""
                          }
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div>
                        <Field
                          name="phone"
                          type="tel"
                          placeholder={placeholders.phone}
                          className={
                            touched.phone && errors.phone ? "invalid" : ""
                          }
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div>
                        <Field
                          name="project"
                          type="text"
                          placeholder={placeholders.project}
                          className={
                            touched.project && errors.project ? "invalid" : ""
                          }
                        />
                        <ErrorMessage
                          name="project"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div>
                        <FormikDatePicker
                          name="date"
                          placeholder={placeholders.date}
                        />
                      </div>

                      <div className="full">
                        <Field
                          name="description"
                          as="textarea"
                          placeholder={placeholders.description}
                          className={
                            touched.description && errors.description
                              ? "invalid"
                              : ""
                          }
                        />
                        <ErrorMessage
                          name="description"
                          component="div"
                          className="error"
                        />
                      </div>

                      <div className="checkbox">
                        <Field
                          type="checkbox"
                          name="acceptTerms"
                          id="acceptTerms"
                        />
                        <label htmlFor="acceptTerms">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="7" cy="7" r="6.5" stroke="#333333" />
                            <circle cx="7" cy="7" r="3" fill="#E74848" />
                          </svg>
                          <span>
                            {validationMessages.acceptTermsLabel}
                          </span>
                        </label>
                        <ErrorMessage
                          name="acceptTerms"
                          component="div"
                          className="error"
                        />
                      </div>

                      <button
                        type="submit"
                        className="main-button"
                        disabled={isSubmitting}
                      >
                        {orderTitle}
                      </button>
                    </div>
                  )}
                  {status && status.success && (
                    <div className="success">
                      <img src="/images/success.svg" />
                      <h3>{validationMessages.successTitle}</h3>
                      <p>{validationMessages.successMessage}</p>
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPopup;
