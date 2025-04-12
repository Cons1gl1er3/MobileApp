import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Category {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  amount: string;
}

const Categories = () => {
  const categoriesData: Category[] = [
    { name: 'Clothing', icon: 'shirt-outline', color: '#9333EA', amount: '€650.0' },
    { name: 'Leisure', icon: 'game-controller-outline', color: '#4F46E5', amount: '€580.0' },
    { name: 'Entertainment', icon: 'film-outline', color: '#EC4899', amount: '€500.0' },
    { name: 'Health', icon: 'medical-outline', color: '#6366F1', amount: '€250.0' },
    { name: 'Dining', icon: 'restaurant-outline', color: '#F97316', amount: '€320.0' },
    { name: 'Transport', icon: 'car-outline', color: '#22C55E', amount: '€150.0' },
  ];

  return (
    <ScrollView className="flex-1 bg-white p-4">
      {/* Header */}
      <View className="flex-row justify-between items-center">
        <Text className="text-2xl font-bold">Categories</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Categories Grid */}
      <View className="mt-6 space-y-4">
        {categoriesData.map((category, index) => (
          <TouchableOpacity key={index} className="flex-row items-center justify-between bg-gray-100 p-4 rounded-lg">
            <View className="flex-row items-center">
              <View style={{ backgroundColor: category.color }} className="w-12 h-12 rounded-full items-center justify-center">
                <Ionicons name={category.icon} size={24} color="white" />
              </View>
              <Text className="ml-4 text-lg font-medium">{category.name}</Text>
            </View>
            <Text className="text-lg font-semibold">{category.amount}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Categories;
