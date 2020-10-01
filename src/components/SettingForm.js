import React from 'react'
import { Field, Form as FormikForm, Formik } from 'formik'
import { Button, Form } from 'react-bootstrap'

function SettingForm() {
    return (
        <div>
            <h1>Settings</h1>
            <Formik
                initialValues={{
                    siteTitle: "",
                    email: "",
                    apiKey: "",
                }}
                validate={values => {
                    const errors = {}
                    if (values.siteTitle === "") {
                        errors.siteTitle = "Site başlığı boş olamaz"
                    }

                    if (values.email === "") {
                        errors.email = "E- Mail boş olamaz"
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = "E-mail formatı hatalı"
                    }

                    if (values.apiKey === "") {
                        errors.apiKey = "ApiKey boş olamaz"
                    }
                    console.log('errors', errors)
                    return errors
                }}

                onSubmit={values => {
                    const vals = JSON.stringify(values)
                    console.log('vals', vals)
                }}
            >

                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (

                        <FormikForm>
                            <Form.Group controlId="siteTitle">
                                <Form.Label>Site Title</Form.Label>
                                <Field className="form-control" name="siteTitle" id="siteTitle" placeholder="Site Title" />
                                <Form.Text className="text-danger">
                                    {errors.siteTitle}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>E-Mail</Form.Label>
                                <Field className="form-control" name="email" id="email" placeholder="E-Mail" />
                                <Form.Text className="text-danger">
                                    {errors.email}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="apiKey">
                                <Form.Label>Api Key</Form.Label>
                                <Field className="form-control" name="apiKey" id="apiKey" placeholder="apiKey" />
                                <Form.Text className="text-danger">
                                    {errors.apiKey}
                                </Form.Text>
                            </Form.Group>
                            <Button type="submit" variant="success" >Send</Button>
                        </FormikForm>
                    )}
            </Formik>
        </div>
    )
}

export default SettingForm
