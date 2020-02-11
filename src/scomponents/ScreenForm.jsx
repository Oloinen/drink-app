import React, {useState} from 'react';
import * as Yup from 'yup';
import '../styles/Form.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';


const ScreenForm = ({addDrink}) => {

    const DrinkSchema = Yup.object().shape({
        btype: Yup.string()
        .min(4, "Vähintään neljä kirjainta")
        .max(50, "Enintään 50 kirjainta")
        .required("Oluttyyppi vaaditaan"),
        name: Yup.string()
        .min(5, "Vähintään viisi kirjainta")
        .max(50, "Enintään 50 kirjainta")
    })

    let today = new Date();

    return (
            <Formik
              initialValues={{date: today, btype: "", name: "", price: 0, desiltr: 0, permille: 0, place: ""}}
              validationSchema={DrinkSchema}
              onSubmit={(values, {setSubmitting, resetForm}) => {
                  setSubmitting(true);
                  setTimeout(() => {
                    console.log(values)
                    addDrink(values);
                  resetForm();
                  setSubmitting(false);
              }, 500)
            }}
            >
              {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="form">
                    <fieldset>
                    <Field
                      type="text"
                      name="btype"
                      placeholder="Juoman tyyppi"
                      className={touched.btype && errors.btype ? "error" : null}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.btype || ''}
                    />
                    <ErrorMessage
                      component="div"
                      name="btype"
                      className="invalid-feedback"
                    /></fieldset>
                    <fieldset>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Juoman nimi"
                      className={touched.name && errors.name ? "error" : null}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name || ''}
                    />
                    <ErrorMessage
                      component="div"
                      name="name"
                      className="invalid-feedback"
                    />
                    </fieldset>
                    <fieldset>
                    <Field
                      type="number"
                      name="price"
                      placeholder="Juoman hinta"
                      className={touched.price && errors.price ? "error" : null}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price || ''}
                    />
                     <ErrorMessage
                      component="div"
                      name="price"
                      className="invalid-feedback"
                    />
                    </fieldset>
                    <fieldset>
                    <Field
                      type="number"
                      name="desiltr"
                      placeholder="Määrä desilitroina"
                      className={touched.desiltr && errors.desiltr ? "error" : null}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.desiltr || ''}
                    />
                    <ErrorMessage
                      component="div"
                      name="desiltr"
                      className="invalid-feedback"
                    />
                    </fieldset>
                    <fieldset>
                    <Field 
                      type="number"
                      name="permille"
                      placeholder="Promillet"
                      className={touched.permille && errors.permille ? "error" : null}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.permille || ''}
                    />
                    <ErrorMessage
                      component="div"
                      name="permille"
                      className="invalid-feedback"
                    />
                    </fieldset>
                    <fieldset>
                    <Field
                      type="text"
                      name="place"
                      placeholder="Paikka"
                      className={touched.place && errors.place ? "error" : null}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.place || ''}
                    />
                    <ErrorMessage
                      component="div"
                      name="place"
                      className="invalid-feedback"
                    /></fieldset>
                    <fieldset>
                    <Field
                      type="date"
                      name="date"
                      className={touched.date && errors.date ? "error" : null}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.date || ''}
                    />
                    <ErrorMessage
                      component="div"
                      name="date"
                      className="invalid-feedback"
                    />
                    </fieldset>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    >Lähetä
                  </button>
                </Form>
              )}
            </Formik>
    );
  }

export default ScreenForm;