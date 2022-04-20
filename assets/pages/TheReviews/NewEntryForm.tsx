import { Button, View, TextInput, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../../components/TheReviews/Button';

import globalStyles from '../../styles/global';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  synopsis: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test(
      'is-num-1-5',
      'Rating must be a number 1 - 5',
      /* @ts-expect-error */
      (val) => parseInt(val) < 6 && parseInt(val) > 0
    )
});

const NewEntryForm = ({ addReview }: any) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', synopsis: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Title"
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Synopsis"
              onChangeText={formikProps.handleChange('synopsis')}
              value={formikProps.values.synopsis}
              onBlur={formikProps.handleBlur('synopsis')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.synopsis && formikProps.errors.synopsis}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              keyboardType="numeric"
              onBlur={formikProps.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>
            <FlatButton text="submit" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default NewEntryForm;
