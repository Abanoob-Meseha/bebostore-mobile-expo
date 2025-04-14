import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@/components/Slider'
import SearchBar from '@/components/SearchBar'
import SearchFilterSection from '@/components/SearchFilterSection'
import SectionTitle from '@/components/SectionTitle'
import SubCategoriesSection from '@/components/SubCategoriesSection'
import ProductCard from '@/components/ProductCard'
import { products } from '@/assets/data/products'
import ProductsWrapper from '@/components/ProductsWrapper'

const home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* search Section */}
      <SearchBar />
      {/* search Categories Filter Section */}
      <SearchFilterSection/>
      {/* Banner Slider */}
      <Slider />
      {/* SubCategories Section */}
      <SectionTitle title='Categories' href='..'/>
      <SubCategoriesSection />
      {/* Top selling Section */}
      <SectionTitle title='Top Selling' href='..'/>
      <ProductsWrapper />
    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({
    container: {
      padding: 16,
      gap: 10, 
      },
})