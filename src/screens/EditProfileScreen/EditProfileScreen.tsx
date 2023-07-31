import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {useForm, Controller, Control} from 'react-hook-form';

import user from '../../assets/data/user.json';
import colors from '../../theme/color';
import fonts from '../../theme/fonts';
import {IUser} from '../../types/models';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i;

type IEditableUserFields = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserFields>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserFields;
  multiline?: boolean;
  rules?: object;
}
const CustonInput = ({
  label,
  multiline = false,
  name,
  control,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              style={[
                styles.input,
                {
                  borderColor: error ? colors.error : colors.border,
                },
              ]}
              multiline={multiline}
            />
            {error && (
              <Text style={{color: colors.error}}>{error.message}</Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

const EditProfileScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      bio: user.bio,
      website: user.website,
    },
  });

  const onSubmit = (data: IEditableUser) => {
    console.log('submit', data);
  };

  // console.log(errors);

  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change Profile Photo</Text>

      <CustonInput
        name="name"
        label="Name"
        control={control}
        rules={{required: 'Name is required'}}
      />
      <CustonInput
        name="username"
        label="Username"
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username should be more than 3 characters',
          },
        }}
      />
      <CustonInput
        name="website"
        label="Website"
        control={control}
        rules={{
          required: 'Website is required',
          pattern: {
            value: URL_REGEX,
            message: 'Invalid URL',
          },
        }}
      />
      <CustonInput
        name="bio"
        label="Bio"
        multiline
        control={control}
        rules={{
          maxLength: {
            value: 200,
            message: 'Bio should be less than 200 characters',
          },
        }}
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,

    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  label: {
    width: 75,
    color: colors.white,
  },
  input: {
    borderBottomWidth: 1,
  },
});

export default EditProfileScreen;
