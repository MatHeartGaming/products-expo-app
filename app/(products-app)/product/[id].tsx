import { Gender, Size } from '@/core/products/interfaces/product.interface';
import ProductImages from '@/presentation/products/components/ProductImages';
import { useProduct } from '@/presentation/products/hooks/useProduct';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedButtonGroup from '@/presentation/theme/components/ThemedButtonGroup';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { ThemedView } from '@/presentation/theme/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

const ProductScreen = () => {

  const { id } = useLocalSearchParams();

  const navigation = useNavigation();

  const { productQuery, producMutation } = useProduct(id.toString());

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons name='camera-outline' size={25} />
      )
    })
  }, []);

  useEffect(() => {
    if (!productQuery.data) return;
    navigation.setOptions({
      title: productQuery.data.title,
    })
  }, [productQuery.data]);

  if (productQuery.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={30} />
      </View>
    );
  }

  if (!productQuery.data) {
    return <Redirect href='/(products-app)/(home)' />
  }

  const product = productQuery.data!;

  return (
    <Formik
      initialValues={product}
      onSubmit={(producLike) => producMutation.mutate(producLike)}
    >

      {({ values, handleSubmit, handleChange, setFieldValue }) => (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView>

            <ProductImages images={values.images} />

            <ThemedView style={{ marginHorizontal: 10, marginTop: 20 }} >
              <ThemedTextInput
                placeholder='Titulo'
                style={{ marginVertical: 5 }}
                value={values.title}
                onChangeText={handleChange('title')}
              />
              <ThemedTextInput
                placeholder='Slug'
                style={{ marginVertical: 5 }}
                value={values.slug}
                onChangeText={handleChange('slug')}
              />
              <ThemedTextInput
                placeholder='Descripcion'
                multiline
                numberOfLines={5}
                style={{ marginVertical: 5 }}
                value={values.description}
                onChangeText={handleChange('description')}
              />
            </ThemedView>

            <ThemedView
              style={{
                marginHorizontal: 10,
                marginVertical: 5,
                flexDirection: 'row',
                gap: 10,
              }}>

              <ThemedTextInput
                placeholder='Precio'
                style={{ flex: 1 }}
                value={values.price.toString()}
                onChangeText={handleChange('price')}
              />

              <ThemedTextInput
                placeholder='Inventario'
                style={{ flex: 1 }}
                value={values.stock.toString()}
                onChangeText={handleChange('stock')}
              />

            </ThemedView>

            <ThemedView>
              <ThemedButtonGroup
                options={[Size.Xs, Size.S, Size.M, Size.L, Size.Xl, Size.Xxl, Size.Xxxl].map((size) => size.toString())}
                selectedOptions={values.sizes}
                onSelect={(selectedSizes) => {
                  const listSelectedSizes = values.sizes.includes(selectedSizes as Size) 
                  ? values.sizes.filter(s => s != selectedSizes)
                  : [...values.sizes, selectedSizes];
                  
                  setFieldValue('sizes', listSelectedSizes)
                }}
              />

              <ThemedButtonGroup
                options={[Gender.Kid, Gender.Men, Gender.Women, Gender.Unisex].map((size) => size.toString())}
                selectedOptions={[values.gender]}
                onSelect={(selectedOptions) => {
                  setFieldValue('gender', selectedOptions)
                }}
              />
            </ThemedView>

            <View style={{
              marginHorizontal: 10,
              marginBottom: 50,
              marginTop: 20
            }}>
              <ThemedButton
                onPress={() => handleSubmit()}
                icon='save-outline'
              >
                Guardar
              </ThemedButton>
            </View>

          </ScrollView>
        </KeyboardAvoidingView>
      )}

    </Formik>
  )
}

export default ProductScreen